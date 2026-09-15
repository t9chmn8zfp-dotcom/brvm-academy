export const MODULES = [
  {
    id: 1, icon: "📊", title: "Fondements des marchés financiers",
    color: "#1565C0", lightColor: "#E3F2FD",
    lessons: [
      { id: "1-1", title: "Qu'est-ce qu'un marché financier ?", xp: 10 },
      { id: "1-2", title: "Marché primaire vs marché secondaire", xp: 10 },
      { id: "1-3", title: "Les instruments financiers", xp: 15 },
      { id: "1-4", title: "Les acteurs du marché", xp: 10 },
      { id: "1-5", title: "Les risques de marché", xp: 15 },
    ]
  },
  {
    id: 2, icon: "🏛️", title: "Découverte de la BRVM",
    color: "#6A1B9A", lightColor: "#F3E5F5",
    lessons: [
      { id: "2-1", title: "Historique et organisation de la BRVM", xp: 10 },
      { id: "2-2", title: "UEMOA, BCEAO et CREPMF", xp: 15 },
      { id: "2-3", title: "Les SGI et le DC/BR", xp: 15 },
      { id: "2-4", title: "Indices BRVM et secteurs", xp: 10 },
      { id: "2-5", title: "Cotation, frais et fiscalité", xp: 20 },
    ]
  },
  {
    id: 3, icon: "📈", title: "Comprendre une action",
    color: "#00695C", lightColor: "#E0F2F1",
    lessons: [
      { id: "3-1", title: "Définition juridique et droits", xp: 10 },
      { id: "3-2", title: "Valeur nominale, comptable, intrinsèque", xp: 15 },
      { id: "3-3", title: "Capitalisation boursière et flottant", xp: 10 },
      { id: "3-4", title: "Liquidité et volatilité", xp: 15 },
    ]
  },
  {
    id: 4, icon: "📋", title: "Lecture des états financiers",
    color: "#E65100", lightColor: "#FFF3E0",
    lessons: [
      { id: "4-1", title: "Le bilan SYSCOHADA", xp: 20 },
      { id: "4-2", title: "Le compte de résultat", xp: 20 },
      { id: "4-3", title: "Tableau des flux de trésorerie", xp: 20 },
      { id: "4-4", title: "Annexes et rapport annuel", xp: 15 },
    ]
  },
  {
    id: 5, icon: "🔍", title: "Analyse fondamentale",
    color: "#1B5E20", lightColor: "#E8F5E9",
    lessons: [
      { id: "5-1", title: "Analyse macro et sectorielle", xp: 20 },
      { id: "5-2", title: "Analyse concurrentielle (Porter)", xp: 20 },
      { id: "5-3", title: "Avantages compétitifs (moats)", xp: 20 },
      { id: "5-4", title: "Qualité du management", xp: 15 },
    ]
  },
  {
    id: 6, icon: "🧮", title: "Les ratios financiers",
    color: "#880E4F", lightColor: "#FCE4EC",
    lessons: [
      { id: "6-1", title: "Ratios de valorisation (PER, P/B, Yield)", xp: 25 },
      { id: "6-2", title: "Ratios de rentabilité (ROE, ROA, marges)", xp: 25 },
      { id: "6-3", title: "Ratios de flux (EBITDA, FCF)", xp: 20 },
      { id: "6-4", title: "Structure financière et endettement", xp: 20 },
    ]
  },
  {
    id: 7, icon: "💎", title: "Évaluation d'une entreprise",
    color: "#4527A0", lightColor: "#EDE7F6",
    lessons: [
      { id: "7-1", title: "Valorisation patrimoniale et par bénéfices", xp: 20 },
      { id: "7-2", title: "Modèle de Gordon-Shapiro", xp: 25 },
      { id: "7-3", title: "DCF (Discounted Cash Flow)", xp: 30 },
      { id: "7-4", title: "Multiples et marge de sécurité", xp: 25 },
    ]
  },
  {
    id: 8, icon: "💰", title: "Les dividendes",
    color: "#F57F17", lightColor: "#FFFDE7",
    lessons: [
      { id: "8-1", title: "Calendrier et dates clés", xp: 10 },
      { id: "8-2", title: "Calcul du rendement et payout ratio", xp: 15 },
      { id: "8-3", title: "Politique de distribution", xp: 15 },
      { id: "8-4", title: "Réinvestissement et rendement total", xp: 20 },
    ]
  },
  {
    id: 9, icon: "📉", title: "Analyse technique BRVM",
    color: "#0277BD", lightColor: "#E1F5FE",
    lessons: [
      { id: "9-1", title: "Supports, résistances et tendances", xp: 20 },
      { id: "9-2", title: "Volumes et moyennes mobiles", xp: 20 },
      { id: "9-3", title: "RSI, MACD, Bollinger", xp: 25 },
      { id: "9-4", title: "Figures chartistes et cassures", xp: 25 },
    ]
  },
  {
    id: 10, icon: "🗂️", title: "Construction de portefeuille",
    color: "#2E7D32", lightColor: "#E8F5E9",
    lessons: [
      { id: "10-1", title: "Diversification et allocation", xp: 20 },
      { id: "10-2", title: "Sizing et gestion du risque", xp: 25 },
      { id: "10-3", title: "Modified Dietz et Indice Base 100", xp: 30 },
      { id: "10-4", title: "Rééquilibrage et benchmark", xp: 20 },
    ]
  },
  {
    id: 11, icon: "🖥️", title: "Passer un ordre en bourse",
    color: "#37474F", lightColor: "#ECEFF1",
    lessons: [
      { id: "11-1", title: "Ouvrir un compte SGI", xp: 10 },
      { id: "11-2", title: "Types d'ordres à la BRVM", xp: 20 },
      { id: "11-3", title: "Règlement J+3 et conservation", xp: 15 },
    ]
  },
  {
    id: 12, icon: "📡", title: "Suivi d'une société cotée",
    color: "#00838F", lightColor: "#E0F7FA",
    lessons: [
      { id: "12-1", title: "Publications et calendrier financier", xp: 15 },
      { id: "12-2", title: "AGO, AGE et annonces réglementées", xp: 15 },
      { id: "12-3", title: "OPA, fusion, scission", xp: 20 },
    ]
  },
  {
    id: 13, icon: "🛡️", title: "Gestion des risques",
    color: "#B71C1C", lightColor: "#FFEBEE",
    lessons: [
      { id: "13-1", title: "Risques de marché, liquidité, change", xp: 20 },
      { id: "13-2", title: "Risque politique et réglementaire", xp: 15 },
      { id: "13-3", title: "Stop-loss, sizing, diversification", xp: 25 },
    ]
  },
  {
    id: 14, icon: "🧠", title: "Psychologie de l'investisseur",
    color: "#4A148C", lightColor: "#F3E5F5",
    lessons: [
      { id: "14-1", title: "Biais cognitifs (confirmation, confiance)", xp: 20 },
      { id: "14-2", title: "Aversion aux pertes et effet de disposition", xp: 20 },
      { id: "14-3", title: "Discipline et plan d'investissement", xp: 25 },
    ]
  },
  {
    id: 15, icon: "🏢", title: "Études de cas BRVM",
    color: "#1A237E", lightColor: "#E8EAF6",
    lessons: [
      { id: "15-1", title: "Analyse SIB et BOA", xp: 40 },
      { id: "15-2", title: "Analyse ORANGE CI et SONATEL", xp: 40 },
      { id: "15-3", title: "Analyse SOLIBRA et TOTAL CI", xp: 40 },
      { id: "15-4", title: "Méthode standardisée appliquée", xp: 50 },
    ]
  },
  {
    id: 16, icon: "🎓", title: "Projet final",
    color: "#1B5E20", lightColor: "#E8F5E9",
    lessons: [
      { id: "16-1", title: "Analyse complète d'une société BRVM", xp: 100 },
    ]
  },
];

export const TOTAL_XP = MODULES.reduce(
  (s, m) => s + m.lessons.reduce((ls, l) => ls + l.xp, 0), 0
);
