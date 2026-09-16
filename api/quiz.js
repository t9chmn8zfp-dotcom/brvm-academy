function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function callMistral(prompt) {
  return fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    })
  });
}

export default async function handler(req, res) {
  // CORS : autorise l'appel depuis un fichier local (origin "null") ou n'importe où
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { lessonTitle, moduleTitle } = req.body;

  if (!lessonTitle || !moduleTitle) {
    return res.status(400).json({ error: "Missing lessonTitle or moduleTitle" });
  }

  const prompt = `Tu es un formateur expert en finance de marché, spécialisé sur la BRVM (Bourse Régionale des Valeurs Mobilières, Afrique de l'Ouest).

Génère exactement 4 questions QCM sur le thème : "${lessonTitle}" (module : "${moduleTitle}").

Règles strictes :
- Questions précises, factuelles et adaptées à la BRVM/UEMOA
- 4 choix par question (A, B, C, D)
- Une seule bonne réponse par question
- Explication courte (1-2 phrases) après la bonne réponse

Réponds UNIQUEMENT en JSON valide, sans balises markdown, exactement ce format :
{
  "questions": [
    {
      "question": "texte de la question ?",
      "choices": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correct": 0,
      "explanation": "Explication de la bonne réponse."
    }
  ]
}`;

  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await callMistral(prompt);

      if (response.status === 429) {
        if (attempt < maxAttempts) { await sleep(attempt * 3000); continue; }
        return res.status(429).json({
          error: "Mistral rate limit",
          detail: "Trop de requêtes sur le plan gratuit. Attends quelques secondes et réessaie."
        });
      }

      if (!response.ok) {
        const err = await response.text();
        return res.status(500).json({ error: "Mistral API error", detail: err });
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      return res.status(200).json(parsed);

    } catch (err) {
      if (attempt === maxAttempts) {
        return res.status(500).json({ error: "Server error", detail: err.message });
      }
      await sleep(attempt * 2000);
    }
  }
}
