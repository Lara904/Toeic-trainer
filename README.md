# TOEIC Trainer

Application web React + Vite permettant de s’entraîner aux 7 parties du TOEIC® (Listening & Reading), inspirée de plateformes comme 990prep.

L’application fonctionne entièrement côté client et utilise la Web Speech API du navigateur pour la synthèse vocale.

---

## Fonctionnement de l’application

Le module Listening repose sur la Web Speech API (`window.speechSynthesis`) :

- Le texte des exercices (`audioText`) est lu directement par le navigateur.
- L’événement `boundary` permet de suivre la position du mot en cours de lecture.
- Le composant `ListeningPlayer` utilise ces informations pour afficher un surlignage dynamique du texte (effet karaoké).
- Aucun fichier audio n’est stocké ou pré-généré : la lecture est générée à la volée.

---

## Structure du projet

```
src/
├── data/
│ ├── drillsIndex.js -> base de données des exercices (test blanc)
│ ├── drills/.json -> exercices du test blanc
│ ├── training/.json -> exercices d’entraînement
│ └── trainingIndex.js -> index des exercices d’entraînement
│
├── hooks/
│ ├── useSpeechSynthesis.js -> wrapper Web Speech API
│ └── useProgress.js -> gestion de la progression (localStorage)
│
├── components/
│ ├── Navbar.jsx
│ ├── DrillCard.jsx
│ ├── ListeningPlayer.jsx -> lecteur TTS + surlignage
│ ├── QuestionCard.jsx -> QCM et correction
│ └── ResultsSummary.jsx -> synthèse des résultats
│
└── pages/
├── Home.jsx -> accueil / liste des exercices
├── DrillPage.jsx -> page d’exercice
├── Stats.jsx -> progression
└── NotFound.jsx

```

## Format des exercices (TOEIC)

Les exercices sont définis en fichiers JSON dans `src/data/drills/` et `src/data/training/`, puis référencés via `drillsIndex.js` et `trainingIndex.js`.

Chaque exercice suit une structure commune, avec des variations selon la partie du TOEIC.

---

### Structure générale

| Champ          | Description |
|----------------|------------|
| `id`           | Identifiant unique (ex : `"p3-002"`) |
| `part`         | Partie TOEIC (1 à 7) |
| `skill`        | `"listening"` ou `"reading"` |
| `title`        | Titre de l’exercice |
| `instructions` | Consigne affichée |
| `questions`    | Tableau de questions |

---

### Spécificités par partie

**Part 1 – Photographies**
- `image: { src, alt }`
- `audioText` (descriptions lues)
- 4 choix de réponse
- `answer` : index (0–3)

**Part 2 – Questions / Réponses**
- `audioText` (question + réponses lues)
- 3 choix de réponse
- `answer` : index

**Part 3 & 4 – Conversations / Monologues**
- `audioText` (dialogue ou monologue)
- Plusieurs questions :
  - `prompt`
  - `choices`
  - `answer`
  - `explanation`

**Part 5 – Phrases à compléter**
- `sentence` avec `____`
- `choices`
- `answer`
- `explanation`

**Part 6 – Texte à trous**
- `passage` avec `{{1}}`, `{{2}}`, etc.
- `blank` dans chaque question
- `choices`
- `answer`
- `explanation`

**Part 7 – Lecture (document unique)**
- `passage`
- `questions` :
  - `prompt`
  - `choices`
  - `answer`
  - `explanation`

**Part 8 – Lecture (multi-documents)**
- `passages` :
  - `{ label, text }`
- `questions` :
  - `prompt`
  - `choices`
  - `answer`
  - `explanation`

---

### Format d’une question

Pour toutes les parties :

- `choices` : tableau de réponses
- `answer` : index de la bonne réponse (0 = A, 1 = B, etc.)
- `explanation` : explication affichée après validation