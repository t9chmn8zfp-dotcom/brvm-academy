// content.js
// Contenu des cours — Programme de formation BRVM (Daniel)
// Une entrée par leçon, indexée par l'id utilisé dans modules.js (ex: "1-1")

export const CONTENT = {

  // ===================== MODULE 1 — Fondements des marchés financiers =====================
  "1-1": `Un marché financier est un espace (physique ou électronique) où se rencontrent des agents qui ont besoin de financement (entreprises, États) et des agents qui disposent de capitaux disponibles (particuliers, investisseurs institutionnels).

La bourse remplit plusieurs fonctions économiques essentielles :
• Financement des entreprises et des États — lever des capitaux à grande échelle
• Liquidité pour les investisseurs — pouvoir revendre un titre à tout moment
• Formation des prix — le cours reflète l'information disponible et les anticipations
• Discipline des entreprises — une entreprise cotée est soumise à des obligations de transparence
• Baromètre économique — les indices boursiers reflètent la santé de l'économie`,

  "1-2": `Marché primaire : émission de nouveaux titres. L'entreprise ou l'État lève des fonds directement auprès des investisseurs (ex. IPO de PALM CI, émission obligataire de l'État ivoirien).

Marché secondaire : échange de titres déjà existants entre investisseurs. L'émetteur ne reçoit pas de nouveaux fonds (ex. achat/vente quotidien d'actions SONATEL).

Point clé : quand tu achètes une action SOLIBRA sur la BRVM, tu achètes à un autre investisseur, pas à SOLIBRA directement. SOLIBRA n'a reçu des fonds que lors de son introduction en bourse.`,

  "1-3": `Les actions : part du capital d'une entreprise. L'actionnaire est copropriétaire, perçoit des dividendes si distribués, et supporte le risque de l'entreprise. Gain illimité, perte possible jusqu'à zéro.

Les obligations : titre de créance, tu prêtes de l'argent. L'émetteur rembourse le capital à l'échéance et verse des intérêts (coupon). Risque inférieur aux actions, gain plafonné.

Les OPCVM : fonds gérés par des professionnels qui mutualisent les capitaux de plusieurs investisseurs. Utiles pour débuter avec peu de capital.

Les ETF : fonds indiciels cotés qui répliquent un indice (ex. BRVM Composite). Peu présents en Afrique de l'Ouest, mais utiles à connaître.

Les produits dérivés (options, futures, swaps) : réservés aux investisseurs avancés, non pertinents à la BRVM à ce stade.`,

  "1-4": `Types d'investisseurs sur les marchés :
• Investisseur particulier — gère son épargne personnelle
• Investisseur institutionnel — assurances, fonds de pension, banques
• Gestionnaire de fonds — gère des OPCVM pour compte de tiers
• Fonds souverains — États investissant leurs réserves
• Spéculateur / Trader — gains à court terme sur les mouvements de prix

Le régulateur de la BRVM est le CREPMF (Conseil Régional de l'Épargne Publique et des Marchés Financiers). Il autorise les acteurs, surveille le marché et sanctionne les abus (manipulation, délit d'initié).`,

  "1-5": `Risques liés aux marchés financiers :
• Risque de marché — le cours baisse suite à un événement économique global
• Risque de liquidité — impossible de vendre rapidement à un bon prix
• Risque sectoriel — un choc affecte tout un secteur (ex. chute du prix du cacao)
• Risque politique — instabilité dégradant le contexte (ex. tensions zone AES)
• Risque de change — variations de change impactant une entreprise exportatrice`,

  // ===================== MODULE 2 — Découverte de la BRVM =====================
  "2-1": `La BRVM a été créée en 1996 et inaugurée en 1998, succédant à la Bourse des Valeurs d'Abidjan (BVA, 1976). Elle est commune aux huit États membres de l'UEMOA, siège à Abidjan, avec des Antennes Nationales de Bourse dans chaque capitale.

Objectif de sa création : mutualiser les marchés de capitaux de huit pays pour atteindre une masse critique suffisante, attirer davantage d'entreprises et d'investisseurs, et favoriser le financement de l'économie réelle.`,

  "2-2": `UEMOA : Union Économique et Monétaire Ouest-Africaine (Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo). Monnaie commune (FCFA), banque centrale commune, cadre réglementaire unifié.

BCEAO : Banque Centrale des États de l'Afrique de l'Ouest. Émet le FCFA, gère la politique monétaire, fixe les taux directeurs (un relèvement des taux rend les obligations plus attractives face aux actions).

CREPMF : régulateur de la BRVM. Délivre les agréments aux SGI, autorise les émissions et introductions en bourse, surveille les transactions.`,

  "2-3": `DC/BR (Dépositaire Central / Banque de Règlement) : conserve les titres sous forme dématérialisée et assure le règlement-livraison des transactions. Invisible pour l'investisseur particulier, mais essentiel.

SGI (Sociétés de Gestion et d'Intermédiation) : seuls intermédiaires autorisés à passer des ordres sur la BRVM. Impossible d'acheter/vendre une action directement — il faut obligatoirement passer par une SGI (ex. CGF Bourse, Hudson & Cie, SIB Bourse, NSIA Finance, Atlantique Finance).`,

  "2-4": `Indices :
• BRVM Composite — toutes les actions cotées, baromètre global
• BRVM 30 — les 30 titres les plus actifs, partie liquide du marché
• BRVM Prestige — sociétés répondant à des critères stricts de gouvernance et liquidité

Secteurs cotés principaux : Finance/Banques (SIB, BNI, NSIA, BOA), Télécoms (SONATEL, ORANGE CI), Agroalimentaire (SOLIBRA, PALM CI, SUCRIVOIRE, SAPH), Distribution (CFAO CI, VIVO ENERGY CI), Industrie/BTP, Services publics (CIE, SODECI), Immobilier (SICOGI).`,

  "2-5": `Système de cotation — le fixing : contrairement au NYSE ou à Euronext, la BRVM fonctionne par fixing unique quotidien. Le matin, les ordres sont collectés via les SGI, puis un algorithme détermine le prix qui maximise le volume échangé. Sans ordre correspondant, pas de transaction ce jour-là.

Règlement-livraison J+3 : le transfert des titres et des fonds intervient 3 jours ouvrés après la transaction. Pas de day trading possible ; prévois ta trésorerie.

Frais de transaction : commission de courtage (0,5 à 1,5 %) + commission BRVM + commission DC/BR + taxes. Sur un petit capital, les frais comptent — toujours les inclure dans le calcul de rentabilité.

Fiscalité (Côte d'Ivoire) : dividendes imposés à la source (retenue de 10 à 15 %), plus-values taxées selon le régime applicable.`,

  // ===================== MODULE 3 — Comprendre une action =====================
  "3-1": `Une action est un titre de propriété représentant une fraction du capital social d'une société. L'actionnaire est juridiquement copropriétaire de l'entreprise à hauteur de sa participation.

Droits de l'actionnaire :
• Vote en Assemblée Générale (AGO annuelle, AGE pour les décisions exceptionnelles)
• Droit aux dividendes — jamais garanti, décidé en AG
• Droit à la plus-value — si le cours monte entre achat et vente`,

  "3-2": `• Valeur nominale — inscrite dans les statuts à la création, ne correspond plus au prix de marché
• Valeur comptable — Capitaux propres / Nombre d'actions
• Valeur intrinsèque — valeur "réelle" estimée par un modèle de valorisation (DCF, multiples)
• Cours de bourse — prix d'échange à un instant donné, résultat de l'offre et de la demande`,

  "3-3": `Capitalisation boursière = Cours de bourse × Nombre total d'actions. Mesure la valeur que le marché attribue à l'entreprise dans son ensemble.
Exemple : ORANGE CI, 14 millions d'actions, cours à 2 000 FCFA → capitalisation de 28 milliards de FCFA.

Flottant : part du capital librement échangeable en bourse (hors actionnaires de référence stables). À la BRVM, de nombreuses entreprises ont un faible flottant (capital très concentré), ce qui explique la faible liquidité de plusieurs titres.`,

  "3-4": `Volatilité : ampleur des fluctuations du cours. La BRVM est généralement peu volatile par rapport aux marchés développés.

Opérations sur le capital :
• Fractionnement (split) — plus d'actions, cours divisé, valeur totale identique
• Regroupement (reverse split) — inverse du split
• Distribution de dividende en actions — actions supplémentaires au lieu de cash`,

  // ===================== MODULE 4 — Lecture des états financiers =====================
  "4-1": `Le bilan est une photographie du patrimoine de l'entreprise à une date précise. Équation fondamentale :
ACTIF = PASSIF + CAPITAUX PROPRES

Capitaux propres : Capital + Réserves + Résultat de l'exercice — la valeur comptable nette de l'entreprise.
Fonds de roulement (FR) : ressources stables − actif immobilisé.
BFR (Besoin en Fonds de Roulement) : Stocks + Créances clients − Dettes fournisseurs.

Les entreprises de l'UEMOA établissent leurs comptes selon le SYSCOHADA (référentiel comptable de l'OHADA), qui diffère des normes IFRS internationales.`,

  "4-2": `Le compte de résultat montre l'activité sur une période (généralement 12 mois) :

Chiffre d'affaires
− Coût des marchandises vendues = Marge brute
− Charges d'exploitation = EBITDA
− Amortissements = EBIT (résultat d'exploitation)
− Charges financières = Résultat avant impôt
− Impôts = Résultat net

EBITDA : proxy de la capacité à générer du cash par l'activité opérationnelle.
Marge nette = Résultat net / Chiffre d'affaires × 100.`,

  "4-3": `Un bénéfice comptable ne signifie pas que l'entreprise a du cash. Le tableau des flux de trésorerie (TFT) montre les mouvements réels d'argent :
• Flux opérationnels (CFO) — cash généré par l'activité, doit idéalement dépasser le résultat net
• Flux d'investissement (CFI) — négatif si l'entreprise investit pour grandir
• Flux de financement (CFF) — emprunts, remboursements, dividendes versés
• Free Cash Flow (FCF) = CFO − Investissements. Positif = entreprise saine.

Piège à éviter : une entreprise qui vend à crédit peut afficher un bénéfice net positif tout en manquant de liquidités si les créances clients explosent.`,

  "4-4": `Les annexes détaillent les chiffres du bilan et du compte de résultat : méthodes comptables, engagements hors bilan, litiges en cours, détail des dettes.

Le rapport du commissaire aux comptes (CAC) certifie que les comptes donnent une image fidèle de la réalité. Une réserve ou un refus de certifier est un signal d'alarme majeur — à lire en premier.

Toute société cotée doit publier ses comptes annuels et semestriels, disponibles sur brvm.org.`,

  // ===================== MODULE 5 — Analyse fondamentale =====================
  "5-1": `Analyse macro : croissance du PIB UEMOA, inflation et politique BCEAO, prix des matières premières (cacao, palmier à huile), stabilité politique (risque zone AES).

Analyse sectorielle : chaque secteur a ses moteurs et ses risques.
• Télécoms — pénétration mobile money, régulation ARTCI
• Banques — bancarisation, risque crédit
• Agroalimentaire — prix matières premières, météo
• Distribution — pouvoir d'achat
• Services publics — tarification réglementée`,

  "5-2": `Matrice des 5 forces de Porter :
• Rivalité entre concurrents existants
• Menace de nouveaux entrants
• Pouvoir de négociation des clients
• Pouvoir de négociation des fournisseurs
• Menace des produits de substitution

Exemple : ORANGE CI face à MTN et Moov — avantage de la marque et d'Orange Money, mais MTN investit massivement.`,

  "5-3": `Les "moats" (fossés protecteurs, concept de Warren Buffett) sont les avantages concurrentiels durables :
• Marque forte (SOLIBRA / Bock, Flag)
• Effets de réseau (Orange Money)
• Coûts de changement élevés (un client bancaire change rarement)
• Avantages de coûts (économies d'échelle)
• Licences ou concessions exclusives (CIE — distribution d'électricité)`,

  "5-4": `Qualité du management : l'équipe dirigeante est-elle compétente, transparente, alignée avec les actionnaires ? Indicateurs : turnover des dirigeants, allocations de capital historiques, discours tenus versus résultats obtenus.

Création de valeur — ROCE (Return on Capital Employed) = EBIT / Capitaux employés. Si ROCE > coût du capital, l'entreprise crée de la valeur pour l'actionnaire.

L'analyse financière complète couvre aussi : rentabilité, solvabilité (dette nette/EBITDA < 2x = sain), liquidité (current ratio > 1) et croissance.`,

  // ===================== MODULE 6 — Les ratios financiers =====================
  "6-1": `Ratios de valorisation :
• PER (Price-to-Earnings) = Cours / EPS — nombre d'années de bénéfices payées. À la BRVM, un PER de 8 à 15 est souvent raisonnable.
• Price-to-Book (P/B) = Cours / Valeur comptable par action
• EV/EBITDA = (Capi + Dettes nettes) / EBITDA
• Dividend Yield = Dividende / Cours × 100
• Payout Ratio = Dividende / Résultat net × 100

Règle d'or : toujours comparer au même secteur, un PER de 8 est élevé pour une banque mais bas pour une télécom.`,

  "6-2": `Ratios de rentabilité :
• EPS = Résultat net / Nombre d'actions
• Marge nette = Résultat net / CA × 100 (Télécoms 15-25 %, Agro 5-15 %)
• ROE = Résultat net / Capitaux propres × 100 (> 15 % = généralement bon)
• ROA = Résultat net / Total Actif × 100
• ROCE = EBIT / Capitaux employés × 100

Décomposition DuPont : ROE = Marge nette × Rotation des actifs × Levier financier. Un ROE élevé grâce à un fort endettement est fragile — toujours vérifier.`,

  "6-3": `EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) : mesure la capacité à générer du cash par l'activité, indépendamment de la structure de financement — utile pour comparer des entreprises entre elles.

Free Cash Flow (FCF) = CFO − Investissements : le cash réellement disponible après maintien de l'outil de production. Toujours vérifier que le FCF couvre le dividende versé pour juger de sa durabilité.`,

  "6-4": `Ratios de structure financière :
• Dette nette / EBITDA — alerte si > 3x (risque de refinancement)
• Gearing (levier) = Dettes nettes / Capitaux propres × 100 — alerte si > 100 %
• Current Ratio = Actif circulant / Dettes court terme — alerte si < 1
• Quick Ratio = (Actif circulant − Stocks) / Dettes CT — alerte si < 0,8

Règles d'utilisation : comparer au même secteur, analyser la tendance sur 3-5 ans, chercher toujours l'explication derrière le chiffre.`,

  // ===================== MODULE 7 — Évaluation d'une entreprise =====================
  "7-1": `Valorisation patrimoniale : valeur de l'entreprise = actifs − dettes = capitaux propres (valeur comptable), comparée au cours via le P/B. Limite : ne reflète pas la valeur réelle des actifs.

Valorisation par les multiples : méthode la plus utilisée à la BRVM. Exemple — PALM CI, BPA estimé 800 FCFA, PER médian secteur agro 10x → valeur estimée = 8 000 FCFA. Si le cours est inférieur, l'action est potentiellement sous-évaluée.`,

  "7-2": `Modèle de Gordon-Shapiro : Prix théorique = Dividende / (Taux de rendement exigé − Taux de croissance du dividende). Adapté aux entreprises matures à dividendes stables.

Exemple : SOLIBRA verse 3 000 FCFA de dividende, rendement exigé 10 %, croissance anticipée 3 % → Valeur théorique = 3 000 / (10 % − 3 %) ≈ 42 857 FCFA. Si le cours est inférieur, l'action est potentiellement sous-évaluée selon ce modèle.`,

  "7-3": `DCF (Discounted Cash Flow) : la valeur d'une entreprise aujourd'hui = somme de tous ses Free Cash Flows futurs actualisés au WACC (coût moyen pondéré du capital).

Étapes : projeter les FCF sur 5-10 ans → estimer une valeur terminale → actualiser au WACC → soustraire la dette nette → diviser par le nombre d'actions.

Précaution : très sensible aux hypothèses (1 % de croissance en plus/moins peut changer la valeur de 30-40 %). Toujours utiliser plusieurs scénarios (optimiste, central, pessimiste).`,

  "7-4": `Comparables sectoriels : identifier 3 à 5 entreprises comparables et comparer leurs multiples (PER, P/B, ROE) plutôt que d'utiliser une moyenne sectorielle abstraite.

Marge de sécurité (Benjamin Graham) : n'acheter qu'avec une décote significative (20 à 40 %) par rapport à la valeur intrinsèque estimée, pour se protéger des erreurs d'estimation.
Exemple : valeur estimée 10 000 FCFA, cours à 8 000 FCFA → marge de sécurité de 20 %.`,

  // ===================== MODULE 8 — Les dividendes =====================
  "8-1": `Le dividende est décidé en AGO sur proposition du conseil d'administration — jamais garanti.

Calendrier :
• Date d'annonce — l'entreprise annonce le montant en AGO
• Date de détachement (ex-date) — le cours baisse théoriquement du montant du dividende ; il faut posséder l'action avant cette date pour y avoir droit
• Date d'enregistrement — vérification par le DC/BR
• Date de paiement — versement sur ton compte SGI

Exemple : SOLIBRA annonce 3 000 FCFA de dividende, cours à 48 000 FCFA → le jour du détachement, le cours ouvre théoriquement à 45 000 FCFA (ce n'est pas une perte : tu reçois le cash équivalent).`,

  "8-2": `Dividend Yield (rendement dividende) = Dividende annuel / Cours actuel × 100.

Payout Ratio = Dividende par action / EPS × 100 — mesure la part des bénéfices distribuée.
• Payout < 60 % : souvent soutenable
• Payout > 80-90 % : l'entreprise distribue presque tout, peu de marge pour investir`,

  "8-3": `Un dividende élevé n'est une opportunité que s'il est durable. Toujours vérifier que le Free Cash Flow de l'entreprise couvre le dividende versé, et que le payout ratio est raisonnable pour le secteur.

Croissance du dividende : les meilleures entreprises font croître leur dividende régulièrement. Une croissance de 5 %/an double le dividende en 14 ans — signal fort de confiance du management.`,

  "8-4": `Le réinvestissement des dividendes est l'un des moteurs les plus puissants de création de richesse à long terme : en rachetant des actions avec les dividendes reçus, on bénéficie des intérêts composés.

Exemple pour Daniel : capital initial 50 000 FCFA + 17 000 FCFA/mois, rendement dividende moyen 5 % + plus-value moyenne 5 % = rendement total estimé 10 %/an. En réinvestissant tout pendant 10 ans, le capital peut atteindre plusieurs millions de FCFA.`,

  // ===================== MODULE 9 — Analyse technique appliquée à la BRVM =====================
  "9-1": `Attention : l'analyse technique a été conçue pour des marchés très liquides. À la BRVM, certains titres ne s'échangent que quelques fois par semaine — sa fiabilité est réduite. Règle d'or : l'AT confirme l'analyse fondamentale, elle ne la remplace jamais.

Support : niveau de prix où la demande arrête historiquement la baisse.
Résistance : niveau où l'offre bloque historiquement la hausse.

Tendances : haussière (plus hauts et plus bas ascendants), baissière (inverse), consolidation (canal horizontal). À la BRVM, identifier d'abord la tendance sur des graphiques mensuels avant les hebdomadaires.`,

  "9-2": `À la BRVM, les volumes sont l'indicateur technique le plus fiable :
• Volume ×3 sans annonce officielle → surveiller les jours suivants
• Fort volume + hausse → signal haussier confirmé
• Fort volume + baisse → signal baissier confirmé
• Fort volume sans mouvement de prix → signal ambigu, prudence

Moyennes mobiles (MM50, MM200) : lissent les fluctuations. Cours au-dessus de la MM200 = tendance de fond haussière. À la BRVM, utiliser les MM sur données hebdomadaires, éviter les MM courtes (trop instables avec peu de transactions).`,

  "9-3": `RSI (Relative Strength Index) : oscille entre 0 et 100. RSI < 30 = survente (potentiellement bon à acheter), RSI > 70 = surachat. À la BRVM, le RSI peut rester longtemps en zone extrême — ne jamais acheter sur ce seul signal.

MACD : différence entre deux moyennes mobiles exponentielles, utile pour confirmer les tendances — peu fiable sur les titres très peu liquides.

Bandes de Bollinger : enveloppe autour du cours (MM centrale ± 2 écarts-types). Cours sur la bande inférieure = potentiellement survendu.`,

  "9-4": `Figures chartistes principales :
• Tête-épaules — retournement baissier si la ligne de cou est cassée
• Double fond — retournement haussier potentiel
• Triangle ascendant — continuation haussière si franchissement
• Cassure (breakout) — signal haussier fort si accompagné de volume
• Pullback — retour vers un niveau cassé, souvent point d'entrée favorable

Concepts SMC/ICT adaptés à la BRVM : order blocks pertinents uniquement sur les titres liquides (SONATEL, ORANGE CI) en hebdomadaire ; BOS/CHoCH utilisables sur des échelles longues ; les killzones intraday n'ont pas de sens ici (marché au fixing unique).`,

  // ===================== MODULE 10 — Construction d'un portefeuille =====================
  "10-1": `La diversification réduit le risque total sans sacrifier le rendement, en répartissant les investissements sur des actifs peu corrélés.

Allocation suggérée pour Daniel (50 000 FCFA + 17 000 FCFA/mois) :
• Télécoms (ORANGE CI/SONATEL) — 30 %
• Agroalimentaire (PALM CI/SOLIBRA) — 25 %
• Finance (SIB/BNI) — 25 %
• Liquidités/OAT — 20 %`,

  "10-2": `Règles de gestion du portefeuille :
1. Jamais plus de 30 % sur un seul titre
2. Minimum 3 secteurs différents
3. Conserver 10 à 20 % en liquidités pour les opportunités
4. Ne jamais surpondérer un titre peu liquide
5. Chaque achat doit être justifié par une analyse, pas une intuition

Gestion des apports mensuels : les 17 000 FCFA/mois permettent le DCA (Dollar-Cost Averaging) — investir un montant fixe régulièrement, ce qui réduit le prix de revient moyen en période de baisse.`,

  "10-3": `Indicateurs de performance :
• Rendement total = (Valeur finale − Valeur initiale + Dividendes) / Valeur initiale × 100
• Performance Dietz Modifiée — tient compte des apports en cours de période, le plus précis avec des apports mensuels réguliers
• Alpha = Rendement portefeuille − Rendement BRVM Composite (bats-tu le marché ?)
• Drawdown maximum — perte maximale depuis un pic
• Ratio de Sharpe = (Rendement − Taux sans risque) / Volatilité`,

  "10-4": `Rééquilibrage : avec le temps, certaines positions grossissent plus que d'autres. Le rééquilibrage consiste à vendre une partie des titres surpondérés pour renforcer les sous-pondérés. Fréquence suggérée : trimestrielle — mais attention aux frais de transaction sur un petit capital.

Comparer sa performance au BRVM Composite (benchmark) permet de savoir si la stratégie active crée réellement de la valeur par rapport à une approche passive.`,

  // ===================== MODULE 11 — Passer un ordre en bourse =====================
  "11-1": `Critères pour évaluer/choisir une SGI (Société de Gestion et d'Intermédiation) :
• Frais de courtage (généralement 0,5 à 1,5 %)
• Qualité de la plateforme de suivi et de passation d'ordres
• Réactivité du service client
• Accès à la recherche et aux analyses de marché
• Réputation et ancienneté

Rappel : impossible d'acheter/vendre directement sur la BRVM, il faut obligatoirement passer par une SGI agréée par le CREPMF.`,

  "11-2": `Types d'ordres :
• Ordre au marché — exécuté immédiatement, réservé aux titres très liquides (SONATEL)
• Ordre à cours limité — tu fixes un prix maximum (achat) ou minimum (vente) — à utiliser systématiquement sur la BRVM
• Ordre à seuil de déclenchement — s'active à un niveau donné, type stop-loss
• Ordre à plage de déclenchement — version sécurisée du précédent

Recommandation : utiliser toujours des ordres à cours limité, proche du dernier cours coté (±1 à 2 %), car un ordre au marché peut s'exécuter à un prix très défavorable sur un titre peu liquide.`,

  "11-3": `Règlement-livraison J+3 : le transfert effectif des titres et des fonds intervient 3 jours ouvrés après l'exécution. Conséquences pratiques :
• Impossible de revendre des titres achetés aujourd'hui avant J+3
• Si tu vends aujourd'hui, tu ne reçois les fonds que dans 3 jours

Conservation : tes titres sont nominatifs, conservés en compte chez le DC/BR. En cas de défaillance de la SGI, tes titres restent les tiens car séparés des actifs de la SGI.`,

  // ===================== MODULE 12 — Suivi d'une entreprise cotée =====================
  "12-1": `Le rapport annuel est le document le plus complet ; le rapport semestriel permet un suivi intermédiaire. Tous sont disponibles sur brvm.org.

À lire en priorité dans un rapport annuel :
1. Le message du président (vision stratégique)
2. Le rapport du commissaire aux comptes (réserves ?)
3. Les états financiers et leur évolution vs N-1
4. Le rapport de gestion (explication des résultats, perspectives)
5. Les notes annexes (engagements hors bilan, litiges, dettes)`,

  "12-2": `Toute information significative doit être publiée immédiatement sur brvm.org. Types d'annonces réglementées à surveiller :
• Résultats annuels et semestriels
• Convocations et procès-verbaux d'AGO / AGE
• Avis de paiement de dividende
• Changements dans la direction ou le capital
• Opérations sur le capital
• Événements exceptionnels affectant l'activité`,

  "12-3": `Événements exceptionnels et leur impact potentiel :
• Fusion — variable selon les conditions
• Acquisition — prime pour la cible, dilution possible pour l'acquéreur
• Scission — peut créer de la valeur si les activités sont mieux valorisées séparément
• OPA (Offre Publique d'Achat) — forte hausse du cours de la cible
• OPE (Offre Publique d'Échange) — rachat payé en actions

Les agences comme Bloomfield Investment et Agusto & Co notent les États et entreprises locaux ; une dégradation de note peut faire baisser le cours.`,

  // ===================== MODULE 13 — Gestion des risques =====================
  "13-1": `Cartographie des risques (marché, liquidité, change) :
• Risque de marché — baisse générale, indépendante des entreprises → diversification, horizon long terme, liquidités de réserve
• Risque de liquidité — impossible de vendre rapidement à bon prix → se concentrer sur les titres liquides
• Risque de change indirect — entreprise payant en USD mais vendant en FCFA (ou l'inverse) → analyser la structure des revenus et des coûts`,

  "13-2": `• Risque sectoriel — choc affectant tout un secteur (ex. prix du cacao, réglementation télécom) → diversification sectorielle
• Risque politique/pays — instabilité dans la zone UEMOA ou AES → éviter la surexposition
• Risque de crédit/contrepartie — défaillance d'un émetteur d'obligation → diversification obligataire, vérifier la notation
• Risque réglementaire — changement de loi défavorable → surveiller les annonces du CREPMF`,

  "13-3": `Taille des positions (capital de 50 000 FCFA) :
• Maximum 30 % sur un seul titre
• Sur un titre peu liquide : maximum 10 à 15 % du capital
• Commencer petit sur les entreprises moins connues

Stop-loss (discipline personnelle, pas un ordre automatique) :
1. Stop en % — vendre si la perte dépasse 15-20 %
2. Stop fondamental — vendre si la thèse d'achat n'est plus valable
3. Stop temporel — réévaluer si la thèse n'a pas évolué en 12 mois

La diversification (3 à 5 titres, secteurs différents) élimine la majorité du risque spécifique, mais pas le risque systémique lié au marché global.`,

  // ===================== MODULE 14 — Psychologie de l'investisseur =====================
  "14-1": `Les pertes des investisseurs particuliers viennent plus souvent de biais comportementaux que de mauvaises analyses :
• Biais de confirmation — ne chercher que les informations qui confirment ses convictions
• Excès de confiance — surestimer ses capacités de prévision
• Biais d'ancrage — rester fixé sur un prix de référence passé
• FOMO — acheter par peur de manquer une opportunité, sans analyse
• Biais de récence — extrapoler indéfiniment une tendance récente`,

  "14-2": `Aversion aux pertes : la douleur d'une perte est ressentie plus fortement que le plaisir d'un gain équivalent — pousse à garder une position perdante en espérant un rebond.

Effet de disposition : vendre les gagnants trop tôt et garder les perdants trop longtemps.

Situations à haut risque émotionnel : forte baisse ("je vends tout") — souvent le meilleur moment pour acheter si la thèse tient ; forte hausse ("j'achète plus") — souvent le pire moment pour entrer ; perte latente ("ça va remonter") — une perte de 20 % demande un gain de 25 % pour être compensée.`,

  "14-3": `La solution aux biais est un plan écrit auquel on s'astreint. Un plan d'investissement personnel définit :
• Tes objectifs financiers (horizon, rendement visé, tolérance au risque)
• Tes critères d'achat et de vente
• Tes règles de diversification
• Tes règles de suivi

Tiens un journal de chaque décision (pourquoi acheté, à quel prix, quelle thèse, objectif et stop-loss) et relis-le 6 mois après — c'est le meilleur outil d'apprentissage. À la BRVM, où les cours bougent lentement, la patience (horizon 5-10 ans) est une compétence rare et précieuse.`,

  // ===================== MODULE 15 — Études de cas BRVM =====================
  "15-1": `Étude de cas : SIB (Société Ivoirienne de Banque), filiale d'Attijariwafa Bank. Points clés à analyser (transposables à BOA) :
• PBR (Price-to-Book) — principale métrique de valorisation des banques
• ROE élevé — bonne utilisation du capital des actionnaires
• Qualité du portefeuille de crédits — ratio de prêts non performants (NPL)
• Respect des ratios prudentiels Bâle III imposés par la BCEAO
• Dividend Yield attractif et régulier`,

  "15-2": `Étude de cas : SONATEL, premier opérateur télécom coté à la BRVM (Sénégal, Guinée, Mali, Sierra Leone, Gambie sous la marque Orange). Points clés (transposables à ORANGE CI) :
• CA en croissance grâce à la data mobile et à Orange Money
• Forte marge EBITDA (> 35 %), typique du secteur télécom
• Exposition au Mali (risque AES) — part significative des revenus
• Dividende historiquement élevé et régulier
• Capex réseau important mais en réduction post-déploiement 4G`,

  "15-3": `Étude de cas : PALM CI, première entreprise agro-industrielle cotée à la BRVM (groupe Sifca). Points clés (transposables à SOLIBRA/TOTAL CI) :
• Sensibilité au prix international de la matière première (cotée en USD)
• Politique de dividendes généreuse
• Croissance des volumes liée à l'extension de la production
• Risque de change indirect (revenus en devises, charges en FCFA)`,

  "15-4": `Méthode d'analyse standardisée en 14 étapes, à appliquer à chaque entreprise :
1. Présentation de l'entreprise — 2. Historique boursier — 3. Gouvernance — 4. Secteur d'activité — 5. Position concurrentielle — 6. Analyse stratégique — 7. Analyse financière (3-5 ans) — 8. Ratios — 9. Politique de dividendes — 10. Valorisation — 11. Analyse technique — 12. Risques — 13. Conclusion argumentée — 14. Décision : ACHETER / CONSERVER / ÉVITER, justifiée par les données.`,

  // ===================== MODULE 16 — Projet final =====================
  "16-1": `Le projet final se structure en 10 parties : analyse macroéconomique, analyse sectorielle, analyse stratégique, analyse financière (5 ans), calcul complet des ratios, valorisation multi-méthodes, analyse technique, évaluation des risques, recommandation finale argumentée, intégration dans le portefeuille.

Choisis une entreprise BRVM pas encore analysée, avec des données disponibles (rapport annuel récent, historique de cours sur 3 ans, dividendes versés).

Recommandation finale : ACHETER si la valeur intrinsèque dépasse le cours avec une marge de sécurité suffisante ; CONSERVER si le cours est proche de la valeur juste ; ÉVITER si le cours dépasse la valeur estimée ou si les risques ne sont pas compensés. Un ACHETER doit toujours être accompagné d'un prix cible chiffré à 12-18 mois.`,

};

export default CONTENT;
