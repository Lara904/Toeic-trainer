// src/data/coursData.js
// 7 chapitres de cours grammaticaux pour la section Apprendre

export const COURS_DATA = [
  // ─────────────────────────────────────────────────────────────
  // 1. STRUCTURE DE LA PHRASE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'structure',
    icon: '🏗️',
    title: 'Structure de la phrase',
    color: '#3b82f6',
    lecon: [
      {
        id: 'structure-intro',
        titre: 'Les 4 structures fondamentales',
        contenu: `En anglais, l'ordre des mots est FIXE. Contrairement au français, on ne peut pas réorganiser les mots librement. Il existe 4 structures de base :`,
        tableaux: [
          {
            titre: 'Les 4 structures',
            colonnes: ['Type', 'Schéma', 'Exemple'],
            lignes: [
              ['✅ Affirmative', 'Sujet + (Auxiliaire) + Verbe + Complément', 'I like chocolate.'],
              ['❌ Négative', 'Sujet + Auxiliaire + NOT + Verbe', "I can't help you."],
              ['❓ Interrogative', 'Auxiliaire + Sujet + Verbe', 'Can you help me?'],
              ['❓❌ Interro-négative', 'Auxiliaire + NOT + Sujet + Verbe', "Why can't you help me?"],
            ],
          },
        ],
        astuce: `💡 Astuce TOEIC : Dans les exercices à trous (Part 5 & 6), identifier la structure de la phrase en premier te permet de savoir immédiatement quel type de mot est attendu (verbe, nom, adjectif, adverbe...).`,
      },
      {
        id: 'structure-ordre',
        titre: "L'ordre Sujet - Verbe - Objet",
        contenu: `En anglais, le sujet vient TOUJOURS avant le verbe, et l'objet TOUJOURS après.`,
        exemples: [
          { fr: 'La pomme, je la mange.', en: 'I eat the apple.', note: '→ "La pomme" ne peut pas être au début en anglais.' },
          { fr: 'Ce film, je l\'adore.', en: 'I love this film.', note: '→ L\'objet suit toujours le verbe.' },
          { fr: 'Pierre aime Marie.', en: 'Pierre loves Marie.', note: '→ Changer l\'ordre change le sens !' },
        ],
        astuce: `⚠️ Piège courant : "The report wrote my manager" est FAUX. La bonne forme est "My manager wrote the report."`,
      },
    ],
    questions: [
      {
        id: 'str-q1',
        enonce: 'Choisissez la phrase correctement structurée :',
        choices: [
          'The meeting cancelled was.',
          'Was cancelled the meeting.',
          'The meeting was cancelled.',
          'Cancelled was the meeting.',
        ],
        answer: 2,
        explication: '✅ Correct : "The meeting was cancelled." suit la structure Sujet (The meeting) + Auxiliaire (was) + Verbe (cancelled). Les autres options inversent l\'ordre des mots, ce qui est incorrect en anglais.',
        regle: '📌 Règle : En anglais, l\'ordre est toujours Sujet + Verbe (+ Complément). On ne peut pas placer le verbe avant le sujet dans une phrase affirmative.',
      },
      {
        id: 'str-q2',
        enonce: 'Quelle est la forme interrogative correcte de "She works here." ?',
        choices: [
          'She works here?',
          'Works she here?',
          'Does she work here?',
          'Is she work here?',
        ],
        answer: 2,
        explication: '✅ Correct : "Does she work here?" L\'auxiliaire "does" se place en tête de phrase, le sujet "she" vient ensuite, puis le verbe à l\'infinitif "work" (sans -s).',
        regle: '📌 Règle interrogative : Auxiliaire + Sujet + Verbe (infinitif). Pour le présent simple sans modal, on utilise do/does. Attention : le -s du verbe disparaît car "does" porte déjà la marque du singulier.',
      },
      {
        id: 'str-q3',
        enonce: 'Complétez la phrase négative : "She ___ finish the project on time."',
        choices: [
          "didn't finished",
          "didn't finish",
          "not finished",
          "doesn't finished",
        ],
        answer: 1,
        explication: '✅ Correct : "She didn\'t finish the project on time." L\'auxiliaire "did" porte la marque du passé, donc le verbe reste à l\'infinitif (sans -ed).',
        regle: '📌 Règle : Structure négative = Sujet + Auxiliaire + NOT + Verbe (infinitif). "Didn\'t" = did + not. Erreur fréquente : "didn\'t finished" → double marque du passé, c\'est incorrect !',
      },
      {
        id: 'str-q4',
        enonce: 'Quelle phrase est interro-négative correcte ?',
        choices: [
          "Why not you came?",
          "Why didn't you come?",
          "Why you didn't come?",
          "Why came you not?",
        ],
        answer: 1,
        explication: '✅ Correct : "Why didn\'t you come?" suit le schéma Mot interrogatif + Auxiliaire+NOT + Sujet + Verbe.',
        regle: '📌 Règle interro-négative : Mot interrogatif + Auxiliaire + NOT + Sujet + Verbe (infinitif). L\'auxiliaire contracté (didn\'t, can\'t, won\'t) vient AVANT le sujet.',
      },
      {
        id: 'str-q5',
        enonce: 'Identifiez la phrase avec l\'ordre des mots correct :',
        choices: [
          'Always she is late.',
          'She is always late.',
          'She always is late.',
          'Is she always late.',
        ],
        answer: 1,
        explication: '✅ Correct : "She is always late." Les adverbes de fréquence (always, never, often...) se placent APRÈS le verbe être mais AVANT les autres verbes.',
        regle: '📌 Règle sur les adverbes de fréquence : Sujet + BE + adverbe de fréquence + adjectif. Ou : Sujet + adverbe de fréquence + verbe principal. Exemple : "She always arrives late." mais "She is always late."',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. LES CONJUGAISONS (12 temps)
  // ─────────────────────────────────────────────────────────────
    {
    id: 'conjugaison',
    icon: '⏰',
    title: 'Les conjugaisons',
    color: '#8b5cf6',
 
    // Présence de sousOnglets → CoursPage bascule en mode ConjugaisonPanel
    sousOnglets: [
 
      // ════════════════════════════════════════════════════════════════════════
      // 1. TEMPS SIMPLES
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'simple',
        label: '① Simple',
        lecon: [
          {
            id: 'conj-simples',
            titre: 'Les temps SIMPLES',
            contenu: `Les temps simples expriment des faits bruts, des habitudes, des vérités générales ou des actions ponctuelles. Ils se forment SANS auxiliaire "be + -ing".`,
            tableaux: [
              {
                titre: '3 temps simples',
                colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
                lignes: [
                  ['Présent simple', 'Sujet + V (+ s à la 3ème pers.)', 'Habitude, vérité générale, routine, fait permanent', 'I play tennis every Sunday. / She works in Paris.'],
                  ['Passé simple', 'Sujet + V-ed / V irrégulier', 'Action terminée à un moment précis du passé', 'Yesterday, she called me. / He went to London last week.'],
                  ['Futur simple', 'Sujet + will + V (base)', 'Prédiction, décision spontanée, promesse, offre', 'I will help you tomorrow. / It will rain tonight.'],
                ],
              },
            ],
            astuce: `💡 Marqueurs temporels qui déclenchent chaque temps :
• Présent simple → every day/week, always, never, usually, often, sometimes, on Mondays
• Passé simple → yesterday, last week/year, in 2020, ago, at 5pm, when (moment précis)
• Futur simple → tomorrow, next week, soon, in the future, I think..., probably
 
⚠️ Piège classique : "She go to work every day." → FAUX. 3ème personne sing. : "She GOES to work every day."
⚠️ Négatif 3ème pers. : "She doesn't work" → le verbe reste à la BASE (sans s).`,
          },
        ],
        questions: [
          {
            id: 'simple-q1',
            enonce: 'Choisissez la bonne forme : "She ___ to the gym every morning before work."',
            choices: ['go', 'goes', 'went', 'will go'],
            answer: 1,
            explication: '✅ Correct : "She goes to the gym..." → Habitude régulière = présent simple. À la 3ème personne du singulier (she/he/it), on ajoute -s au verbe.',
            regle: '📌 Règle : Présent simple → habitude/routine. 3ème pers. sing. : V + s. Marqueurs : every day, always, usually, often, never.',
          },
          {
            id: 'simple-q2',
            enonce: '"The company ___ its annual report last Friday." — Quel temps ?',
            choices: ['publishes', 'will publish', 'published', 'is publishing'],
            answer: 2,
            explication: '✅ Correct : "published" → "last Friday" indique un moment précis et terminé du passé → passé simple.',
            regle: '📌 Règle : Passé simple = action terminée à un moment précis. Marqueurs clés : yesterday, last week/month/year, ago, in [année], at [heure].',
          },
          {
            id: 'simple-q3',
            enonce: '"I ___ you a hand with those boxes — they look heavy!"',
            choices: ['give', 'gave', 'will give', 'am giving'],
            answer: 2,
            explication: '✅ Correct : "will give" → Décision spontanée prise au moment où on parle = futur simple avec will.',
            regle: '📌 Règle : Will = décision prise à l\'instant, offre spontanée, prédiction. À ne pas confondre avec be going to (intention planifiée à l\'avance).',
          },
          {
            id: 'simple-q4',
            enonce: 'Laquelle de ces phrases est au PRÉSENT SIMPLE correct ?',
            choices: [
              'He don\'t like meetings.',
              'He doesn\'t likes meetings.',
              'He doesn\'t like meetings.',
              'He not like meetings.',
            ],
            answer: 2,
            explication: '✅ Correct : "He doesn\'t like meetings." → Négation 3ème pers. sing. : doesn\'t + verbe BASE (sans s). "Doesn\'t likes" est une double erreur classique.',
            regle: '📌 Règle : Négatif présent simple : I/You/We/They + don\'t + V. He/She/It + doesn\'t + V (base, sans -s). L\'auxiliaire "does" porte déjà la marque du singulier.',
          },
          {
            id: 'simple-q5',
            enonce: '"Water ___ at 100 degrees Celsius." — Quel temps convient ?',
            choices: ['boiled', 'boils', 'will boil', 'is boiling'],
            answer: 1,
            explication: '✅ Correct : "boils" → Vérité scientifique générale, toujours vraie = présent simple.',
            regle: '📌 Règle : Le présent simple s\'utilise pour les vérités générales et les faits scientifiques. Ce n\'est pas une action qui se passe "en ce moment", c\'est une réalité permanente.',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 2. TEMPS PROGRESSIFS
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'progressif',
        label: '② Progressif',
        lecon: [
          {
            id: 'conj-progressifs',
            titre: 'Les temps PROGRESSIFS (continus)',
            contenu: `Les temps progressifs décrivent une action EN TRAIN DE SE DÉROULER à un moment précis — passé, présent ou futur. Formation : BE (conjugué selon le temps) + verbe en -ING.`,
            tableaux: [
              {
                titre: '3 temps progressifs',
                colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
                lignes: [
                  ['Présent progressif', 'am/is/are + V-ing', 'Action en cours EN CE MOMENT / situation temporaire / futur planifié proche', 'I am working right now. / She is staying in Paris this month.'],
                  ['Passé progressif', 'was/were + V-ing', 'Action en cours à un moment précis du passé / action interrompue par une autre', 'She was sleeping when I arrived. / At 8pm, we were having dinner.'],
                  ['Futur progressif', 'will be + V-ing', 'Action qui sera en cours à un moment précis du futur', 'I will be travelling this time tomorrow. / She will be presenting at 3pm.'],
                ],
              },
            ],
            astuce: `💡 Verbes qui NE s'utilisent PAS au progressif (stative verbs) :
• État mental : know, believe, understand, think (=croire), want, need, prefer
• Sentiment : like, love, hate, wish
• Possession : have (=posséder), own, belong, contain
• Sens : see (=voir), hear, smell, taste, seem, appear
 
❌ "I am knowing the answer." → FAUX
✅ "I know the answer." → Correct
 
💡 Marqueurs progressif : right now, at the moment, currently, at 5pm yesterday, this week (temporaire), Look! / Listen!`,
          },
        ],
        questions: [
          {
            id: 'prog-q1',
            enonce: '"Listen! Someone ___ (knock) on the door."',
            choices: ['knocks', 'knocked', 'is knocking', 'was knocking'],
            answer: 2,
            explication: '✅ Correct : "is knocking" → "Listen!" signale une action en cours en ce moment précis → présent progressif.',
            regle: '📌 Règle : Présent progressif = action qui se passe maintenant. Déclencheurs : Look!, Listen!, right now, at the moment, currently.',
          },
          {
            id: 'prog-q2',
            enonce: '"At 9am yesterday, the team ___ (discuss) the budget proposal."',
            choices: ['discusses', 'discussed', 'was discussing', 'has discussed'],
            answer: 2,
            explication: '✅ Correct : "was discussing" → "At 9am yesterday" = moment précis dans le passé. Action en cours à ce moment = passé progressif.',
            regle: '📌 Règle : Passé progressif = action en cours à un moment précis du passé. Souvent introduit par "at [heure] yesterday", "when...", "while...".',
          },
          {
            id: 'prog-q3',
            enonce: 'Laquelle est INCORRECTE ? (stative verb mal utilisé)',
            choices: [
              'She is thinking about quitting.',
              'He is knowing the answer.',
              'We are having a great time!',
              'They are meeting clients today.',
            ],
            answer: 1,
            explication: '✅ "He is knowing the answer." est INCORRECT. "Know" est un stative verb (état mental) — il ne s\'utilise jamais au progressif. → "He knows the answer."',
            regle: '📌 Règle : Les stative verbs (know, believe, want, need, understand, like, love, hate, have-posséder...) ne s\'utilisent PAS au progressif. Exception : "have" au sens d\'activité → "I am having lunch" ✅.',
          },
          {
            id: 'prog-q4',
            enonce: '"Don\'t call me at 8pm — I ___ (watch) the match."',
            choices: ['watch', 'watched', 'will be watching', 'am watching'],
            answer: 2,
            explication: '✅ Correct : "will be watching" → Action en cours à un moment précis du futur (8pm) = futur progressif.',
            regle: '📌 Règle : Futur progressif (will be + V-ing) = action qui sera en cours à un moment précis du futur. Utile pour : "What will you be doing at [heure] ?"',
          },
          {
            id: 'prog-q5',
            enonce: '"I ___ in Paris for two weeks while my apartment is being renovated." (situation temporaire)',
            choices: ['stay', 'stayed', 'am staying', 'will stay'],
            answer: 2,
            explication: '✅ Correct : "am staying" → Situation temporaire en cours (pas une habitude permanente) = présent progressif.',
            regle: '📌 Règle : Le présent progressif peut exprimer une situation TEMPORAIRE. "I live in Paris" (permanent) vs "I am living in Paris for 3 months" (temporaire).',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 3. TEMPS PARFAITS
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'parfait',
        label: '③ Parfait',
        lecon: [
          {
            id: 'conj-parfaits',
            titre: 'Les temps PARFAITS',
            contenu: `Les temps parfaits créent un LIEN entre deux moments — une action passée et son résultat présent, ou son rapport avec un autre moment passé/futur. Formation : HAVE/HAS/HAD + participe passé (V-pp).`,
            tableaux: [
              {
                titre: '3 temps parfaits',
                colonnes: ['Temps', 'Formation', 'Usage principal', 'Exemple'],
                lignes: [
                  ['Présent parfait', 'have/has + V-pp', '① Expérience de vie ② Résultat visible maintenant ③ Action récente (just) ④ Action qui dure jusqu\'au présent', 'I have visited Paris. / She has just left. / He has worked here for 5 years.'],
                  ['Passé parfait', 'had + V-pp', 'Action terminée AVANT une autre action passée', 'When I arrived, she had already left. / He had finished before the meeting started.'],
                  ['Futur parfait', 'will have + V-pp', 'Action qui sera terminée AVANT un moment précis du futur', 'By 2030, I will have graduated. / By 5pm, she will have sent the report.'],
                ],
              },
            ],
            astuce: `💡 Règle d'or : présent parfait vs passé simple
• ❌ "I have seen him YESTERDAY." → FAUX ! "Yesterday" = moment précis terminé → passé simple obligatoire.
• ✅ "I saw him yesterday."
• ✅ "I have seen this film before." (expérience, pas de moment précis)
 
Marqueurs du PRÉSENT PARFAIT : already, yet, just, ever, never, since, for, recently, so far, up to now
Marqueurs du PASSÉ PARFAIT : when, before, after, already (+ passé simple pour l'autre action)
Marqueurs du FUTUR PARFAIT : by the time, by [date], before, when (futur)`,
          },
        ],
        questions: [
          {
            id: 'parfait-q1',
            enonce: '"When I arrived at the office, the meeting ___ (already/start)."',
            choices: [
              'already started',
              'had already started',
              'has already started',
              'was already starting',
            ],
            answer: 1,
            explication: '✅ Correct : "had already started" → Deux actions passées. La réunion a commencé AVANT mon arrivée → la plus ancienne prend le passé parfait. "Arrived" = passé simple (action plus récente).',
            regle: '📌 Règle : Passé parfait = action terminée avant une autre action passée. Structure classique : "When + passé simple, sujet + had + pp" (ou inversement).',
          },
          {
            id: 'parfait-q2',
            enonce: '"Look! The floor is wet. Someone ___ (spill) water."',
            choices: ['spilled', 'was spilling', 'has spilled', 'had spilled'],
            answer: 2,
            explication: '✅ Correct : "has spilled" → Le résultat (sol mouillé) est visible MAINTENANT. Une action passée dont l\'effet est présent = présent parfait.',
            regle: '📌 Règle : Présent parfait = action passée dont le résultat est encore visible/ressenti maintenant. Aucun moment précis n\'est mentionné.',
          },
          {
            id: 'parfait-q3',
            enonce: 'Lequel de ces marqueurs NE PEUT PAS accompagner le présent parfait ?',
            choices: ['already', 'yesterday', 'just', 'yet'],
            answer: 1,
            explication: '✅ Correct : "yesterday" ne peut PAS accompagner le présent parfait. Il indique un moment précis et terminé → passé simple. "I saw him yesterday." (JAMAIS "I have seen him yesterday.")',
            regle: '📌 Règle : Le présent parfait est INTERDIT avec des marqueurs temporels précis : yesterday, last week, in 2020, at 3pm, ago. Ces marqueurs → passé simple obligatoire.',
          },
          {
            id: 'parfait-q4',
            enonce: '"By the time you arrive, I ___ (cook) dinner."',
            choices: ['will cook', 'will have cooked', 'will be cooking', 'cooked'],
            answer: 1,
            explication: '✅ Correct : "will have cooked" → "By the time" + action future → l\'action sera TERMINÉE avant ton arrivée = futur parfait.',
            regle: '📌 Règle : Futur parfait (will have + V-pp) = action terminée avant un moment futur. Marqueurs : by the time, by [date], before [événement futur].',
          },
          {
            id: 'parfait-q5',
            enonce: '"This is the first time I ___ sushi." — Quel temps ?',
            choices: ['eat', 'ate', 'have eaten', 'had eaten'],
            answer: 2,
            explication: '✅ Correct : "have eaten" → "It\'s the first time + présent parfait" est une structure fixe pour parler d\'une première expérience.',
            regle: '📌 Structure fixe : "It\'s the first/second time + sujet + have/has + V-pp." Exemple : "It\'s the third time he has been late this week."',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 4. TEMPS PARFAITS PROGRESSIFS
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'parfait-progressif',
        label: '④ Parfait Progressif',
        lecon: [
          {
            id: 'conj-parfaits-prog',
            titre: 'Les temps PARFAITS PROGRESSIFS',
            contenu: `Ces temps combinent le parfait (lien entre deux moments) et le progressif (durée, continuité). Ils insistent sur la DURÉE d'une action en lien avec un autre moment. Formation : HAVE/HAS/HAD BEEN + V-ING.`,
            tableaux: [
              {
                titre: '3 temps parfaits progressifs',
                colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
                lignes: [
                  ['Présent parfait progressif', 'have/has been + V-ing', 'Action commencée dans le passé, qui CONTINUE jusqu\'à maintenant — ou qui vient de se terminer (traces visibles)', 'I have been working here for 5 years. / She looks tired — she has been running.'],
                  ['Passé parfait progressif', 'had been + V-ing', 'Action en cours PENDANT une durée, AVANT un moment précis du passé', 'She had been waiting for 2 hours when he finally arrived.'],
                  ['Futur parfait progressif', 'will have been + V-ing', 'Durée d\'une action jusqu\'à un moment précis du futur', 'By June, I will have been learning English for 3 years.'],
                ],
              },
            ],
            astuce: `💡 Présent parfait vs Présent parfait progressif :
• "I have read this book." → Résultat : le livre EST lu (terminé)
• "I have been reading this book all day." → Durée : j'ai passé toute la journée à le lire
 
💡 Passé parfait vs Passé parfait progressif :
• "She had waited for an hour." → Fait établi
• "She had been waiting for an hour." → Durée vécue, processus insistant
 
Mots-clés : for (pendant), since (depuis), all day/week/morning, how long.`,
          },
        ],
        questions: [
          {
            id: 'parfprog-q1',
            enonce: '"I ___ (work) in this company for 10 years." — L\'action continue encore aujourd\'hui.',
            choices: ['worked', 'was working', 'have been working', 'had worked'],
            answer: 2,
            explication: '✅ Correct : "have been working" → Action commencée dans le passé qui CONTINUE jusqu\'au présent + durée exprimée avec "for" = présent parfait progressif.',
            regle: '📌 Règle : have/has been + V-ing = action qui dure depuis le passé jusqu\'au présent. Avec "for" (durée) ou "since" (point de départ).',
          },
          {
            id: 'parfprog-q2',
            enonce: '"She looked exhausted — she ___ (run) for over an hour."',
            choices: ['ran', 'has run', 'has been running', 'had run'],
            answer: 2,
            explication: '✅ Correct : "has been running" → Les traces visibles (épuisée) révèlent une activité continue qui vient de se terminer. Le présent parfait progressif montre la cause visible dans le présent.',
            regle: '📌 Astuce : Quand le résultat visible d\'une activité continue est présent (sueur, fatigue...), on utilise souvent le présent parfait progressif.',
          },
          {
            id: 'parfprog-q3',
            enonce: '"The clients ___ (wait) for 45 minutes when the manager finally appeared."',
            choices: ['waited', 'were waiting', 'had been waiting', 'have been waiting'],
            answer: 2,
            explication: '✅ Correct : "had been waiting" → Durée d\'une action AVANT un moment du passé = passé parfait progressif.',
            regle: '📌 Règle : Passé parfait progressif = action en cours pendant une durée, AVANT un autre moment du passé. Structure : "had been + V-ing + for... + when + passé simple."',
          },
          {
            id: 'parfprog-q4',
            enonce: '"By next January, she ___ (teach) at this school for 20 years."',
            choices: ['will teach', 'will have taught', 'will be teaching', 'will have been teaching'],
            answer: 3,
            explication: '✅ Correct : "will have been teaching" → Durée d\'une action jusqu\'à un moment précis du futur = futur parfait progressif.',
            regle: '📌 Règle : Futur parfait progressif (will have been + V-ing) = insistance sur la durée d\'une action jusqu\'à un point futur. Marqueurs : by [date/moment futur], for, since.',
          },
          {
            id: 'parfprog-q5',
            enonce: 'Quelle phrase insiste le plus sur la DURÉE de l\'effort accompli ?',
            choices: [
              'She has written the report.',
              'She was writing the report.',
              'She wrote the report.',
              'She has been writing the report all morning.',
            ],
            answer: 3,
            explication: '✅ Correct : "She has been writing the report all morning." → "all morning" + présent parfait progressif = insistance sur la durée continue de l\'effort.',
            regle: '📌 Règle : Pour insister sur la DURÉE d\'une activité continue, on utilise have/has been + V-ing. "She has written" parle du résultat ; "she has been writing" parle du processus et de la durée.',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 5. DIFFÉRENCIATION : Simple vs Progressif
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'diff-simple-prog',
        label: '⚖️ Simple vs Progressif',
        lecon: [
          {
            id: 'diff-sp-lecon',
            titre: 'Quand choisir Simple ou Progressif ?',
            contenu: `La clé : le temps SIMPLE parle de FAITS, d'habitudes ou de vérités. Le temps PROGRESSIF parle d'une action EN COURS à un moment donné.`,
            tableaux: [
              {
                titre: 'Simple vs Progressif — tableau comparatif',
                colonnes: ['Critère', 'Temps SIMPLE', 'Temps PROGRESSIF'],
                lignes: [
                  ['Nature', 'Fait, habitude, vérité, action ponctuelle', 'Action en cours à un moment donné'],
                  ['Durée', 'Pas d\'insistance sur la durée', 'Durée ou caractère temporaire mis en avant'],
                  ['Interruption', '—', '"I was reading WHEN she called." (action en cours interrompue)'],
                  ['Simultanéité passé', '"She worked while he slept." (deux faits)', '"She was working while he was sleeping." (deux actions en cours)'],
                  ['Stative verbs', 'Toujours simple : know / want / believe', 'Jamais progressif avec stative verbs'],
                  ['Marqueurs clés', 'every day, always, yesterday, last week, tomorrow', 'now, right now, at the moment, at 5pm yesterday, currently'],
                ],
              },
            ],
            exemples: [
              { fr: 'Habitude vs action du moment', en: '"She WORKS in London." (habituel, permanent)\n"She IS WORKING from home today." (temporaire, en cours)', note: 'Présent simple = permanent/habituel. Présent progressif = temporaire/en cours.' },
              { fr: 'Action terminée vs en cours au passé', en: '"I READ the report." (simple → c\'est fait)\n"I WAS READING the report when he called." (interrompue)', note: 'Passé simple = action terminée. Passé progressif = action en cours au moment de l\'interruption.' },
              { fr: 'Futur : décision vs action en cours', en: '"I WILL CALL you tomorrow." (décision/promesse)\n"I WILL BE CALLING clients all day." (action en cours toute la journée)', note: 'Futur simple = décision/prédiction. Futur progressif = action en cours à ce moment futur.' },
            ],
            astuce: `⚠️ Pièges classiques :
1. "She is knowing the answer." → ❌ Know = stative verb → "She knows."
2. "I am working here since 2018." → ❌ Action qui dure depuis le passé → présent parfait progressif : "I have been working here since 2018."
3. "What do you do right now?" → ❌ "Right now" → progressif : "What are you doing right now?"`,
          },
        ],
        questions: [
          {
            id: 'diff-sp-q1',
            enonce: '"___ you understand the instructions?" vs "___ you listening?"',
            choices: ['Are / Do', 'Do / Are', 'Have / Are', 'Do / Do'],
            answer: 1,
            explication: '✅ Correct : "Do you understand?" (understand = stative verb → simple) / "Are you listening?" (action en cours = progressif).',
            regle: '📌 Règle : Stative verbs (understand, know, believe, want...) → temps simple. Verbes d\'action (listen, work, run...) → peuvent être au progressif.',
          },
          {
            id: 'diff-sp-q2',
            enonce: '"I ___ (think) you\'re right." vs "She ___ (think) about changing jobs."',
            choices: ['am thinking / thinks', 'think / is thinking', 'am thinking / is thinking', 'think / thinks'],
            answer: 1,
            explication: '✅ Correct : "I think" (opinion = stative → simple) / "She is thinking about" (réflexion active en cours = progressif). "Think" change de sens !',
            regle: '📌 Piège classique : "think" a deux sens. Think = croire/opinion → simple. Think = réfléchir à → progressif. Même logique pour "see", "have", "be".',
          },
          {
            id: 'diff-sp-q3',
            enonce: '"The train ___ (leave) at 8am every day." vs "Hurry! The train ___ (leave)!"',
            choices: ['leaves / is leaving', 'is leaving / leaves', 'leaves / leaves', 'is leaving / is leaving'],
            answer: 0,
            explication: '✅ Correct : "leaves" (horaire fixe = présent simple) / "is leaving" (action en train de se passer maintenant = présent progressif).',
            regle: '📌 Règle : Horaires/programmes fixes → présent simple. Action qui se passe en ce moment précis → présent progressif.',
          },
          {
            id: 'diff-sp-q4',
            enonce: '"When I called, she ___ a shower — that\'s why she didn\'t hear."',
            choices: ['took', 'takes', 'was taking', 'has taken'],
            answer: 2,
            explication: '✅ Correct : "was taking" → Action longue en cours au moment d\'une autre action dans le passé. La douche (longue) était en cours quand l\'appel (court) a eu lieu.',
            regle: '📌 Règle : Action longue en cours (passé progressif) + action courte qui l\'interrompt (passé simple) : "was doing X when Y happened."',
          },
          {
            id: 'diff-sp-q5',
            enonce: '"This time next week, I ___ on the beach in Bali."',
            choices: ['sit', 'sat', 'will sit', 'will be sitting'],
            answer: 3,
            explication: '✅ Correct : "will be sitting" → "This time next week" = moment précis dans le futur. On imagine l\'action comme EN COURS à ce moment → futur progressif.',
            regle: '📌 Règle : "This time tomorrow/next week/month" → futur progressif. L\'action sera en cours, pas juste une décision.',
          },
          {
            id: 'diff-sp-q6',
            enonce: '"She ___ (work) for this company since 2019." (Elle travaille toujours là-bas.)',
            choices: ['works', 'worked', 'is working', 'has been working'],
            answer: 3,
            explication: '✅ Correct : "has been working" → Action commencée en 2019, toujours en cours + durée (since) = présent parfait progressif.',
            regle: '📌 Règle : Action qui a commencé dans le passé et CONTINUE dans le présent avec "since/for" → présent parfait progressif (have been + V-ing).',
          },
          {
            id: 'diff-sp-q7',
            enonce: '"While he ___ (prepare) the slides, she ___ (call) the clients."',
            choices: ['was preparing / called', 'prepared / was calling', 'was preparing / was calling', 'prepared / called'],
            answer: 2,
            explication: '✅ Correct : "was preparing / was calling" → Deux actions simultanées dans le passé = deux passés progressifs. "While" + simultanéité = deux progressifs.',
            regle: '📌 Règle : "While" + simultanéité au passé → les deux actions au passé progressif. Si une interrompt l\'autre : was doing... when + passé simple.',
          },
          {
            id: 'diff-sp-q8',
            enonce: '"I usually ___ coffee but today I ___ tea."',
            choices: ['drink / am drinking', 'am drinking / drink', 'drink / drink', 'am drinking / am drinking'],
            answer: 0,
            explication: '✅ Correct : "I usually drink" (habitude = présent simple) / "today I am drinking tea" (exception temporaire du jour = présent progressif).',
            regle: '📌 Règle : Habitude → présent simple. Situation temporaire/exception du jour → présent progressif. Les deux peuvent coexister dans la même phrase.',
          },
          {
            id: 'diff-sp-q9',
            enonce: '"By the time she ___ (arrive), he ___ (already/leave)."',
            choices: ['arrives / already left', 'will arrive / already left', 'arrives / will have already left', 'arrived / had already left'],
            answer: 2,
            explication: '✅ Correct : "By the time she arrives, he will have already left." → Présent simple dans la subordonnée temporelle + futur parfait pour l\'action accomplie avant.',
            regle: '📌 Règle : "By the time + présent simple, sujet + will have + pp." Le présent simple remplace le futur dans les propositions temporelles.',
          },
          {
            id: 'diff-sp-q10',
            enonce: '"She ___ (not/speak) to him since their argument last week."',
            choices: ['doesn\'t speak', 'wasn\'t speaking', 'hasn\'t spoken', 'hadn\'t spoken'],
            answer: 2,
            explication: '✅ Correct : "hasn\'t spoken" → "since" + passé = présent parfait. L\'absence de communication a commencé après la dispute et continue jusqu\'à maintenant.',
            regle: '📌 Règle : "Since" (depuis un point du passé) + présent parfait. L\'état/action a commencé à ce moment et a un lien avec le présent.',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 6. DIFFÉRENCIATION : Parfait vs Parfait Progressif
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'diff-parfait-prog',
        label: '⚖️ Parfait vs Parfait Progressif',
        lecon: [
          {
            id: 'diff-pp-lecon',
            titre: 'Quand choisir Parfait ou Parfait Progressif ?',
            contenu: `La différence est subtile mais logique : le parfait met en avant le RÉSULTAT ou l'expérience ; le parfait progressif met en avant la DURÉE ou le processus continu.`,
            tableaux: [
              {
                titre: 'Parfait vs Parfait Progressif — tableau comparatif',
                colonnes: ['Critère', 'PARFAIT (have + V-pp)', 'PARFAIT PROGRESSIF (have been + V-ing)'],
                lignes: [
                  ['Insistance sur', 'Le RÉSULTAT, l\'accomplissement', 'La DURÉE, le processus continu'],
                  ['Action', 'Souvent TERMINÉE (le résultat reste)', 'Peut être encore EN COURS'],
                  ['Quantité', '"She has written 3 reports." (combien)', '— (pas de quantité précise)'],
                  ['Durée', '— (ou durée comme fait)', '"She has been writing for 3 hours." (durée vécue)'],
                  ['Traces visibles', '"She has baked a cake." (le gâteau est là)', '"She has been baking." (elle a de la farine sur les mains)'],
                  ['Stative verbs', 'Oui : "I have known him for years."', 'Non : ❌ "I have been knowing him."'],
                ],
              },
            ],
            exemples: [
              { fr: 'Résultat vs Durée', en: '"I have read the report." → Je l\'ai lu (c\'est fait)\n"I have been reading the report." → Je le lis depuis un moment (durée)', note: 'La 1ère dit que c\'est terminé. La 2ème insiste sur le temps passé à le lire.' },
              { fr: 'Accomplissement vs Processus', en: '"She has written the email." → L\'email est écrit (terminé)\n"She has been writing emails all morning." → Elle a passé la matinée à écrire', note: 'La 1ère = résultat précis. La 2ème = activité qui a duré.' },
              { fr: 'Au passé aussi', en: '"He had eaten when I arrived." → Fait accompli avant mon arrivée\n"He had been eating for an hour when I arrived." → Il mangeait depuis 1h (durée)', note: 'Même logique au passé : had + pp = résultat ; had been + V-ing = durée.' },
            ],
            astuce: `💡 Test mental pour choisir :
1. Tu veux dire "c'est terminé, voilà le résultat" ? → Parfait (have + pp)
2. Tu veux dire "ça dure/ça durait depuis longtemps" ? → Parfait progressif (have been + V-ing)
3. Le verbe est stative (know, want...) ? → Toujours parfait simple.
 
⚠️ Pièges :
• "I have been finishing the report." → ❌ → "I have finished the report." ✅
• "She has known him since 2010." → ✅ (know = stative, jamais progressif)`,
          },
        ],
        questions: [
          {
            id: 'diff-pp-q1',
            enonce: 'Laquelle insiste sur le RÉSULTAT plutôt que la durée ?',
            choices: ['She has been cleaning the office.', 'She has cleaned the office.', 'She was cleaning the office.', 'She had been cleaning the office.'],
            answer: 1,
            explication: '✅ Correct : "She has cleaned the office." → Le résultat est là (le bureau est propre). "Has been cleaning" insisterait sur la durée du nettoyage.',
            regle: '📌 Règle : Présent parfait (have + pp) = résultat/accomplissement. Présent parfait progressif (have been + V-ing) = durée/processus.',
          },
          {
            id: 'diff-pp-q2',
            enonce: '"Why are your hands dirty?" — Réponse qui explique par une activité récente prolongée :',
            choices: ['I have fixed the car.', 'I fixed the car.', 'I have been fixing the car.', 'I was fixing the car.'],
            answer: 2,
            explication: '✅ Correct : "I have been fixing the car." → Les mains sales = trace visible d\'une activité continue récente → présent parfait progressif.',
            regle: '📌 Règle : Traces visibles d\'une activité récente (sueur, mains sales, fatigue...) → présent parfait progressif.',
          },
          {
            id: 'diff-pp-q3',
            enonce: '"She ___ three cups of coffee this morning." (résultat, quantité)',
            choices: ['has been drinking', 'has drunk', 'was drinking', 'had drunk'],
            answer: 1,
            explication: '✅ Correct : "has drunk" → Quantité précise (3 tasses) = résultat/accomplissement = présent parfait. "Has been drinking" n\'exprime pas la quantité.',
            regle: '📌 Règle : Quantité ou nombre précis mentionné → parfait simple (have + pp). Le progressif ne peut pas indiquer de quantité accomplie.',
          },
          {
            id: 'diff-pp-q4',
            enonce: '"They ___ for the bus for 40 minutes when it finally came."',
            choices: ['waited', 'had waited', 'had been waiting', 'have been waiting'],
            answer: 2,
            explication: '✅ Correct : "had been waiting" → Durée vécue (40 minutes) AVANT un moment du passé = passé parfait progressif.',
            regle: '📌 Règle : Passé parfait progressif = insistance sur la durée d\'une activité avant un moment passé. "Had been + V-ing + for [durée] + when + passé simple."',
          },
          {
            id: 'diff-pp-q5',
            enonce: '"I have ___ him for over 20 years." (know)',
            choices: ['been knowing', 'know', 'known', 'been known'],
            answer: 2,
            explication: '✅ Correct : "I have known him for over 20 years." → "Know" est stative → jamais au progressif. Présent parfait simple pour la durée avec un stative verb.',
            regle: '📌 Règle : Stative verbs (know, want, believe, like, love, own...) → JAMAIS au progressif. Pour la durée avec un stative verb : have/has + pp + for/since.',
          },
          {
            id: 'diff-pp-q6',
            enonce: 'Quelle phrase est INCORRECTE ?',
            choices: [
              'I have been trying to reach you all day.',
              'She has been finishing the project.',
              'They have been arguing for hours.',
              'He has been thinking about quitting.',
            ],
            answer: 1,
            explication: '✅ "She has been finishing the project." est INCORRECT. "Finish" implique un résultat → "She has finished the project." ou "She is still working on the project."',
            regle: '📌 Règle : Certains verbes de résultat (finish, arrive, stop, open, close...) s\'utilisent au parfait simple plutôt qu\'au progressif.',
          },
          {
            id: 'diff-pp-q7',
            enonce: '"By next April, they ___ on this project for two years."',
            choices: ['will work', 'will have worked', 'will be working', 'will have been working'],
            answer: 3,
            explication: '✅ Correct : "will have been working" → Durée (2 ans) jusqu\'à un point précis du futur + continuité = futur parfait progressif.',
            regle: '📌 Règle : Futur parfait progressif (will have been + V-ing) = durée continue jusqu\'à un moment futur. Durée + point futur → futur parfait progressif.',
          },
          {
            id: 'diff-pp-q8',
            enonce: '"We ___ all the documents before the auditors arrived."',
            choices: ['reviewed', 'had reviewed', 'had been reviewing', 'have reviewed'],
            answer: 1,
            explication: '✅ Correct : "had reviewed" → Résultat accompli AVANT un moment du passé. L\'accent est sur l\'accomplissement = passé parfait.',
            regle: '📌 Règle : Passé parfait (had + pp) = résultat accompli avant un autre moment passé. "Had been reviewing" insisterait sur la durée du processus.',
          },
          {
            id: 'diff-pp-q9',
            enonce: '"She looked pale and exhausted — she ___ all night."',
            choices: ['has studied', 'had studied', 'had been studying', 'studied'],
            answer: 2,
            explication: '✅ Correct : "had been studying" → Traces physiques (pâle, épuisée) d\'une activité prolongée AVANT le moment évoqué = passé parfait progressif.',
            regle: '📌 Règle : Traces visibles d\'une activité prolongée avant un moment du passé → passé parfait progressif.',
          },
          {
            id: 'diff-pp-q10',
            enonce: '"How many pages ___ (write) so far?" (bilan de résultat)',
            choices: ['have you been writing', 'have you written', 'did you write', 'were you writing'],
            answer: 1,
            explication: '✅ Correct : "have you written" → "How many" demande une quantité/résultat = présent parfait. "How long have you been writing?" demanderait la durée.',
            regle: '📌 Règle : How much/many → résultat → présent parfait (have + pp). How long → durée/processus → présent parfait progressif (have been + V-ing).',
          },
        ],
      },
 
      // ════════════════════════════════════════════════════════════════════════
      // 7. PIÈGES TYPIQUES
      // ════════════════════════════════════════════════════════════════════════
      {
        id: 'pieges',
        label: '⚠️ Pièges typiques',
        lecon: [
          {
            id: 'pieges-lecon',
            titre: 'Les pièges les plus fréquents au TOEIC',
            contenu: `Ces erreurs reviennent constamment dans les exercices TOEIC. Identifie-les, comprends pourquoi elles sont fausses, et tu éviteras des points perdus bêtement.`,
            tableaux: [
              {
                titre: 'Pièges classiques',
                colonnes: ['❌ Erreur fréquente', '✅ Correction', 'Raison'],
                lignes: [
                  ['"I have seen him yesterday."', '"I saw him yesterday."', '"Yesterday" = moment précis → passé simple obligatoire.'],
                  ['"She doesn\'t knows."', '"She doesn\'t know."', 'Avec doesn\'t, le verbe reste à la BASE (sans s).'],
                  ['"I am working here since 2019."', '"I have been working here since 2019."', '"Since" + action qui dure → présent parfait (progressif).'],
                  ['"When she will arrive, call me."', '"When she arrives, call me."', 'Après when/if → présent simple, jamais will.'],
                  ['"She is knowing the answer."', '"She knows the answer."', '"Know" = stative verb → jamais au progressif.'],
                  ['"He has been finishing the report."', '"He has finished the report."', '"Finish" = résultat → parfait simple.'],
                  ['"I was working here since 2019."', '"I have been working here since 2019."', 'Action qui CONTINUE → présent parfait, pas passé.'],
                  ['"By the time she arrives, he will leave."', '"By the time she arrives, he will have left."', '"By the time" + futur → futur parfait.'],
                ],
              },
            ],
            astuce: `💡 Les 5 réflexes à avoir face à une question sur les temps :
1. Y a-t-il un marqueur temporel ? (yesterday, since, already, when...) → il guide souvent le choix
2. L'action est-elle terminée ou en cours ?
3. Y a-t-il un lien avec un autre moment (passé/futur) ?
4. Le verbe est-il stative ? (know, want, believe...) → jamais progressif
5. S'agit-il d'un résultat ou d'une durée/processus ?`,
          },
        ],
        questions: [
          {
            id: 'pieges-q1',
            enonce: 'Trouvez l\'erreur : "She has visited her parents yesterday."',
            choices: ['"has visited" → "visited"', '"visited" → "has visited"', '"her" → "hers"', '"yesterday" → "since yesterday"'],
            answer: 0,
            explication: '✅ Correct : "has visited" → "visited" (passé simple). "Yesterday" est un marqueur de temps passé précis → présent parfait interdit. "She visited her parents yesterday."',
            regle: '📌 Règle d\'or : Présent parfait (have + pp) + yesterday/last week/in 2020/ago → IMPOSSIBLE. Ces marqueurs imposent le passé simple.',
          },
          {
            id: 'pieges-q2',
            enonce: '"When the meeting will start, please turn off your phones."',
            choices: ['La phrase est correcte.', '"will start" → "starts"', '"turn off" → "turning off"', '"please" → "kindly"'],
            answer: 1,
            explication: '✅ Correct : "will start" → "starts". Après "when" (conjonction temporelle), on utilise le présent simple — jamais le futur avec "will".',
            regle: '📌 Règle : Après when / if / as soon as / until / before / after → présent simple pour exprimer le futur. "When she arrives" ✅ (jamais "when she will arrive").',
          },
          {
            id: 'pieges-q3',
            enonce: '"I am living in Paris since 2020." — Qu\'est-ce qui ne va pas ?',
            choices: ['"am living" → "live"', '"am living" → "have been living"', '"since" → "for"', 'La phrase est correcte.'],
            answer: 1,
            explication: '✅ Correct : "have been living". L\'action a commencé en 2020 et CONTINUE jusqu\'au présent avec "since" → présent parfait progressif.',
            regle: '📌 Règle : Action qui dure depuis un point du passé jusqu\'au présent → have/has been + V-ing + since. "I have been living in Paris since 2020."',
          },
          {
            id: 'pieges-q4',
            enonce: '"He doesn\'t understands what you mean."',
            choices: ['"doesn\'t" → "don\'t"', '"understands" → "understand"', '"what" → "that"', 'La phrase est correcte.'],
            answer: 1,
            explication: '✅ Correct : "understands" → "understand". Avec "doesn\'t", le verbe principal reste à la forme BASE. "Doesn\'t" porte déjà la conjugaison.',
            regle: '📌 Règle : doesn\'t / don\'t + verbe BASE. "He doesn\'t understand" ✅ / "He understands" ✅ / "He doesn\'t understands" ❌.',
          },
          {
            id: 'pieges-q5',
            enonce: '"By the time the manager arrives, the team will finish the presentation."',
            choices: ['"arrives" → "will arrive"', '"will finish" → "will have finished"', '"the presentation" → "a presentation"', 'La phrase est correcte.'],
            answer: 1,
            explication: '✅ Correct : "will finish" → "will have finished". "By the time + présent simple" exprime qu\'une action sera TERMINÉE avant un moment futur → futur parfait.',
            regle: '📌 Règle : "By the time + présent simple, sujet + will have + pp." L\'action sera accomplie avant l\'action de la subordonnée.',
          },
        ],
      },
    ],
 
    // Conservé pour la compatibilité avec les autres chapitres (CoursPage vérifie .lecon.length)
    lecon: [],
    questions: [],
  },


  // ─────────────────────────────────────────────────────────────
  // 3. LES PRONOMS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pronoms',
    icon: '👤',
    title: 'Les pronoms',
    color: '#10b981',
    lecon: [
      {
        id: 'pronoms-tableau',
        titre: 'Les 5 catégories de pronoms',
        contenu: `Les pronoms remplacent les noms pour éviter les répétitions. Il existe 5 catégories, chacune ayant un rôle précis dans la phrase.`,
        tableaux: [
          {
            titre: 'Tableau complet des pronoms',
            colonnes: ['Personne', 'Sujet', 'Complément', 'Adj. possessif', 'Pron. possessif', 'Réfléchi'],
            lignes: [
              ['1ère sing.', 'I', 'me', 'my', 'mine', 'myself'],
              ['2ème', 'you', 'you', 'your', 'yours', 'yourself'],
              ['3ème masc.', 'he', 'him', 'his', 'his', 'himself'],
              ['3ème fém.', 'she', 'her', 'her', 'hers', 'herself'],
              ['3ème neutre', 'it', 'it', 'its', 'its', 'itself'],
              ['1ère plur.', 'we', 'us', 'our', 'ours', 'ourselves'],
              ['2ème plur.', 'you', 'you', 'your', 'yours', 'yourselves'],
              ['3ème plur.', 'they', 'them', 'their', 'theirs', 'themselves'],
            ],
          },
        ],
        astuce: `💡 Différences importantes :
• Adjectif possessif + nom : "This is MY book." (my précède un nom)
• Pronom possessif seul : "This book is MINE." (mine remplace "my book", pas de nom après)
• Réfléchi = même personne que le sujet : "She hurt HERSELF." (sujet = she, réfléchi = herself)`,
      },
      {
        id: 'pronoms-pieges',
        titre: 'Les pièges classiques',
        contenu: `Certains pronoms se ressemblent beaucoup et sont souvent confondus.`,
        exemples: [
          { fr: 'its vs it\'s', en: '• "The company changed ITS policy." (possessif)\n• "IT\'S a good company." (it is = contraction)', note: 'its = possessif (pas d\'apostrophe) / it\'s = it is ou it has' },
          { fr: 'their / there / they\'re', en: '• THEIR car is new. (possessif)\n• The office is over THERE. (lieu)\n• THEY\'RE working late. (they are)', note: 'Trois mots qui sonnent pareil mais ont des sens différents !' },
          { fr: 'her (adjectif ou pronom ?)', en: '• "This is HER bag." (adjectif possessif)\n• "I saw HER." (pronom complément)', note: '"her" joue deux rôles selon sa position dans la phrase.' },
        ],
        astuce: `⚠️ Test rapide pour "its" vs "it's" : Si tu peux remplacer par "it is", alors c'est "it's". Sinon, c'est "its" (possessif).`,
      },
    ],
    questions: [
      {
        id: 'pron-q1',
        enonce: '"The team did ___ best to finish the project on time."',
        choices: ['their', 'its', 'his', 'our'],
        answer: 1,
        explication: '✅ Correct : "The team did ITS best." En anglais, un groupe (team, company, committee) est considéré comme une entité singulière neutre → on utilise "its" (et non "their" comme en français).',
        regle: '📌 Règle : Les noms collectifs (team, company, group, staff, management) utilisent "its" en anglais américain (standard TOEIC). "Their" est possible en anglais britannique informel, mais "its" est la réponse attendue au TOEIC.',
      },
      {
        id: 'pron-q2',
        enonce: '"This report was written by ___ alone  -  no one helped me."',
        choices: ['me', 'I', 'myself', 'mine'],
        answer: 2,
        explication: '✅ Correct : "This report was written by MYSELF alone." Le pronom réfléchi "myself" est utilisé ici pour renforcer l\'idée d\'indépendance (sens emphatique : j\'ai fait cela seul).',
        regle: '📌 Règle : Les pronoms réfléchis (myself, yourself...) ont deux usages : 1) Réfléchi : "She cut herself." (sujet = objet) 2) Emphatique : "I did it myself." (pour insister sur l\'autonomie). Après une préposition d\'accompagnement : "by myself" = tout seul.',
      },
      {
        id: 'pron-q3',
        enonce: 'Choisissez la phrase correcte :',
        choices: [
          "The decision is your.",
          "The decision is yours.",
          "The decision is you're.",
          "The decision is your's.",
        ],
        answer: 1,
        explication: '✅ Correct : "The decision is YOURS." Après le verbe "be", on utilise le pronom possessif (sans nom après) : mine, yours, his, hers, ours, theirs. L\'adjectif possessif (your) doit toujours être suivi d\'un nom.',
        regle: '📌 Règle : Adjectif possessif + NOM = "your decision". Pronom possessif SEUL = "yours". Les pronoms possessifs n\'ont jamais d\'apostrophe (yours, hers, theirs  -  jamais your\'s ou their\'s).',
      },
      {
        id: 'pron-q4',
        enonce: '"___ is a well-known company in the industry."',
        choices: ['Its', "It's", 'Its\'', 'It'],
        answer: 1,
        explication: '✅ Correct : "IT\'S a well-known company." = "It is a well-known company." Ici on a besoin d\'un sujet + verbe être → "it\'s" (contraction de it is). "Its" (sans apostrophe) est un adjectif possessif qui doit précéder un nom.',
        regle: '📌 Règle : it\'s = it is (ou it has). its = possessif (comme "my", "your", "his"). Astuce : peut-on remplacer par "it is" ? Oui → it\'s. Non → its.',
      },
      {
        id: 'pron-q5',
        enonce: '"Please send the documents to Sarah and ___."',
        choices: ['I', 'me', 'myself', 'my'],
        answer: 1,
        explication: '✅ Correct : "Please send the documents to Sarah and ME." Après une préposition (to), on utilise un pronom complément (me, him, her, us, them), pas un pronom sujet (I).',
        regle: '📌 Règle : Après une préposition (to, for, with, from...) → pronom complément : me, you, him, her, us, them. Erreur classique : "Send it to Sarah and I" → FAUX. Test : enlève "Sarah and" → "Send it to I" sonne faux → c\'est "me".',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. COMPARATIFS ET SUPERLATIFS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'comparatifs',
    icon: '📊',
    title: 'Comparatifs & Superlatifs',
    color: '#f59e0b',
    lecon: [
      {
        id: 'comp-regles',
        titre: 'Les règles de formation',
        contenu: `Pour former le comparatif ou le superlatif, tout dépend du nombre de syllabes de l'adjectif.`,
        tableaux: [
          {
            titre: 'Comparatif de supériorité',
            colonnes: ['Type d\'adjectif', 'Formation', 'Exemple'],
            lignes: [
              ['Court (1 syllabe)', 'adjectif + -er + than', '"old → older than" / "fast → faster than"'],
              ['Court (finit en -e)', 'adjectif + -r + than', '"large → larger than"'],
              ['Court (consonne double)', 'double consonne + -er + than', '"big → bigger than" / "hot → hotter than"'],
              ['Long (2+ syllabes)', 'more + adjectif + than', '"interesting → more interesting than"'],
              ['Irréguliers', 'forme spéciale', '"good → better / bad → worse / far → further"'],
            ],
          },
          {
            titre: 'Superlatif',
            colonnes: ['Type d\'adjectif', 'Formation', 'Exemple'],
            lignes: [
              ['Court (1 syllabe)', 'the + adjectif + -est', '"old → the oldest"'],
              ['Long (2+ syllabes)', 'the most + adjectif', '"interesting → the most interesting"'],
              ['Irréguliers', 'forme spéciale', '"good → the best / bad → the worst / far → the furthest"'],
            ],
          },
        ],
        astuce: `💡 Règle du doublement de la consonne :
Si l'adjectif est court et se termine par : voyelle + consonne → on double la consonne.
• big → bigger / biggest
• hot → hotter / hottest
• fat → fatter / fattest
Mais : fast → faster (deux consonnes finales → pas de doublement)`,
      },
      {
        id: 'comp-types',
        titre: 'Comparatif d\'égalité et d\'infériorité',
        contenu: `En plus du comparatif de supériorité (more / -er), il existe deux autres formes.`,
        exemples: [
          { fr: 'Égalité', en: 'as + adjectif + as', note: '"She is AS tall AS her brother." / "This model is AS efficient AS the previous one."' },
          { fr: 'Infériorité', en: 'less + adjectif + than', note: '"This phone is LESS expensive THAN the other one."' },
          { fr: 'Négation d\'égalité', en: 'not as + adjectif + as', note: '"This report is NOT AS detailed AS the last one."' },
        ],
        astuce: `💡 Au TOEIC, les phrases à compléter testent souvent la structure "as ... as". Retiens-la bien :
✅ "She is as qualified AS him."  -  les deux "as" encadrent l'adjectif.
❌ "She is as qualified than him."  -  FAUX, "than" ne va pas avec "as...as".`,
      },
      {
        id: 'comp-irreguliers',
        titre: 'Les irréguliers  -  à apprendre par cœur',
        contenu: `Certains adjectifs ont des formes comparatives et superlatives totalement irrégulières. Ils sont fréquents au TOEIC.`,
        tableaux: [
          {
            titre: 'Adjectifs irréguliers',
            colonnes: ['Adjectif', 'Comparatif', 'Superlatif'],
            lignes: [
              ['good (bon)', 'better', 'the best'],
              ['bad (mauvais)', 'worse', 'the worst'],
              ['far (loin)', 'further / farther', 'the furthest / the farthest'],
              ['little (peu)', 'less', 'the least'],
              ['many / much (beaucoup)', 'more', 'the most'],
              ['old (vieux / ancien)', 'older / elder', 'the oldest / the eldest'],
            ],
          },
        ],
        astuce: `⚠️ "Elder" et "eldest" s'utilisent uniquement pour les membres d'une famille ("my elder sister"). Pour le reste, utilisez "older / oldest".`,
      },
    ],
    questions: [
      {
        id: 'comp-q1',
        enonce: '"This quarter\'s results are ___ than last quarter\'s."',
        choices: [
          'more good',
          'gooder',
          'better',
          'more better',
        ],
        answer: 2,
        explication: '✅ Correct : "better" est la forme comparative irrégulière de "good". "More good" et "gooder" sont des formes inexistantes. "More better" est une double forme incorrecte (never use two comparatives together).',
        regle: '📌 Règle : "good" est irrégulier → good / better / the best. Ne jamais ajouter "more" ou "-er" à un comparatif irrégulier.',
      },
      {
        id: 'comp-q2',
        enonce: '"This is ___ hotel in the city." (expensive)',
        choices: [
          'the more expensive',
          'the most expensive',
          'the expensivest',
          'most expensive',
        ],
        answer: 1,
        explication: '✅ Correct : "the most expensive". "Expensive" a 3 syllabes → superlatif avec "the most + adjectif". "The expensivest" n\'existe pas. "The more expensive" est le comparatif, pas le superlatif. L\'article "the" est obligatoire au superlatif.',
        regle: '📌 Règle : Superlatif des adjectifs longs (2+ syllabes) = THE MOST + adjectif. L\'article "the" est TOUJOURS présent au superlatif. On ne peut jamais dire "most expensive" sans "the" dans ce contexte.',
      },
      {
        id: 'comp-q3',
        enonce: '"The new software is ___ efficient ___ the old version."',
        choices: [
          'as ... as',
          'more ... than',
          'less ... than',
          'the most ... of',
        ],
        answer: 0,
        explication: '✅ Correct : "as efficient as" exprime l\'égalité. La phrase signifie que les deux logiciels ont le même niveau d\'efficacité. Structure : as + adjectif + as.',
        regle: '📌 Règle du comparatif d\'égalité : as + adjectif + as. Les deux "as" encadrent TOUJOURS l\'adjectif. Jamais "as ... than" ou "as ... like". Pour la négation : "not as efficient as".',
      },
      {
        id: 'comp-q4',
        enonce: '"The situation is getting ___." (bad → pire et pire)',
        choices: [
          'worse and worse',
          'more and more bad',
          'badder and badder',
          'more worse and more worse',
        ],
        answer: 0,
        explication: '✅ Correct : "worse and worse". Pour exprimer une progression, on double le comparatif : comparatif + and + comparatif. "Bad" étant irrégulier, son comparatif est "worse".',
        regle: '📌 Règle : Pour exprimer "de plus en plus", on utilise : comparatif + and + comparatif. Exemples : "better and better", "more and more expensive", "worse and worse". Jamais "more and more bad" car "bad" est irrégulier.',
      },
      {
        id: 'comp-q5',
        enonce: '"This is ___ presentation I have ever seen."',
        choices: [
          'the most impressive',
          'the more impressive',
          'more impressive',
          'most impressive',
        ],
        answer: 0,
        explication: '✅ Correct : "the most impressive". "I have ever seen" est un marqueur classique du superlatif. On utilise "the most + adjectif long" avec l\'article défini "the" obligatoire.',
        regle: '📌 Règle : "The + superlatif + I have ever seen/done/met" est une structure très fréquente au TOEIC. L\'article "the" est indispensable. "Ever" avec le superlatif = parmi toutes les expériences.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. LES MODAUX
  // ─────────────────────────────────────────────────────────────
  {
    id: 'modaux',
    icon: '🎭',
    title: 'Les modaux',
    color: '#ef4444',
    lecon: [
      {
        id: 'modaux-intro',
        titre: 'Qu\'est-ce qu\'un modal ?',
        contenu: `Les modaux (ou auxiliaires modaux) sont des auxiliaires particuliers qui MODIFIENT le sens du verbe principal. Ils expriment la capacité, la permission, l'obligation, la probabilité, etc.

Règles grammaticales communes à TOUS les modaux :
1. Ils sont INVARIABLES (pas de -s à la 3ème personne du singulier)
2. Ils sont TOUJOURS suivis d'un verbe à l'infinitif SANS "to" (sauf "ought to")
3. Pour les négatifs : modal + NOT + infinitif
4. Pour les questions : modal + sujet + infinitif`,
        tableaux: [
          {
            titre: 'Vue d\'ensemble des modaux',
            colonnes: ['Modal', 'Sens principal', 'Exemple'],
            lignes: [
              ['can', 'Capacité / Permission', '"I can speak English." / "Can I leave?"'],
              ['could', 'Capacité passée / Conditionnel / Suggestion polie', '"I could swim when I was young." / "Could you help me?"'],
              ['must', 'Obligation forte / Déduction logique (positive)', '"You must wear a badge." / "She must be tired."'],
              ['mustn\'t', 'Interdiction', '"You mustn\'t smoke here."'],
              ['should', 'Conseil / Recommandation', '"You should see a doctor."'],
              ['ought to', 'Obligation morale / Conseil formel', '"You ought to apologize."'],
              ['will', 'Futur / Volonté', '"I will call you." / "I will not accept this."'],
              ['would', 'Conditionnel / Requête polie / Habitude passée', '"I would help if I could." / "Would you mind?"'],
              ['shall', 'Futur avec I/We / Proposition', '"Shall we meet at 3pm?"'],
              ['may', 'Permission formelle / Probabilité forte', '"May I come in?" / "It may rain."'],
              ['might', 'Probabilité faible', '"I might be late."'],
            ],
          },
        ],
        astuce: `⚠️ NE PAS confondre must et have to :
• MUST → obligation interne (la personne elle-même décide) : "I must call her, she's my friend."
• HAVE TO → obligation externe (imposée par quelqu'un d'autre ou une règle) : "I have to wear a uniform at work."

⚠️ NE PAS confondre mustn't et don't have to :
• MUSTN'T → interdiction : "You mustn't park here." (défense absolue)
• DON'T HAVE TO → absence d'obligation : "You don't have to come." (c'est facultatif)`,
      },
      {
        id: 'modaux-probabilite',
        titre: 'Les modaux de probabilité',
        contenu: `Au TOEIC, les modaux de probabilité sont très fréquents, notamment dans les mails et rapports professionnels.`,
        tableaux: [
          {
            titre: 'Degré de probabilité',
            colonnes: ['Modal', 'Certitude', 'Exemple'],
            lignes: [
              ['must + infinitif', '95% certain (déduction positive)', '"He must be in a meeting  -  his line is busy."'],
              ['can\'t / couldn\'t + infinitif', '95% certain (déduction négative)', '"She can\'t be the manager  -  she just started."'],
              ['should + infinitif', '75% probable', '"The package should arrive tomorrow."'],
              ['may + infinitif', '50% probable', '"It may be a technical issue."'],
              ['might + infinitif', '30% probable', '"I might attend the conference."'],
              ['could + infinitif', '30% possible', '"The delay could be due to weather."'],
            ],
          },
        ],
        astuce: `💡 Probabilité sur le passé → modal + have + participe passé :
• "He must have left already." (il a certainement déjà quitté)
• "She might have forgotten." (elle a peut-être oublié)
• "They can't have received it yet." (ils ne peuvent pas encore l'avoir reçu)`,
      },
    ],
    questions: [
      {
        id: 'mod-q1',
        enonce: '"You ___ submit your application before Friday." (obligation forte, règle imposée)',
        choices: [
          'must',
          'should',
          'might',
          'could',
        ],
        answer: 0,
        explication: '✅ Correct : "must" exprime une obligation forte et incontournable. "Should" est une recommandation (plus faible). "Might" et "could" expriment une possibilité, pas une obligation.',
        regle: '📌 Règle : must = obligation forte ou interdiction (mustn\'t). should = conseil, recommandation. might/could = possibilité. Au TOEIC, les consignes officielles et règlements utilisent toujours "must".',
      },
      {
        id: 'mod-q2',
        enonce: '"You ___ worry about it  -  it\'s optional." (absence d\'obligation)',
        choices: [
          "mustn't",
          "don't have to",
          "can't",
          "shouldn't",
        ],
        answer: 1,
        explication: '✅ Correct : "don\'t have to" = ce n\'est pas obligatoire, c\'est facultatif. "Mustn\'t" = interdiction (complètement différent !). "Can\'t" = impossibilité ou interdiction. "Shouldn\'t" = déconseillé.',
        regle: '📌 PIÈGE CLASSIQUE : mustn\'t != don\'t have to. mustn\'t = INTERDIT (you must not do this). don\'t have to = PAS NÉCESSAIRE (you are not obliged to do this). Ce piège apparaît régulièrement au TOEIC Part 5.',
      },
      {
        id: 'mod-q3',
        enonce: '"The lights are off. She ___ left already."',
        choices: [
          'must have',
          'should have',
          'might',
          'can',
        ],
        answer: 0,
        explication: '✅ Correct : "She must have left already." On déduit avec quasi-certitude qu\'elle est partie (déduction sur le passé). Structure : must have + participe passé.',
        regle: '📌 Règle : Déduction sur le passé = modal + have + participe passé. must have + pp = quasi-certitude. might have + pp = possibilité. can\'t have + pp = quasi-impossibilité.',
      },
      {
        id: 'mod-q4',
        enonce: '"___ you please send me the updated report by tomorrow?"',
        choices: [
          'Will',
          'Would',
          'Shall',
          'Must',
        ],
        answer: 1,
        explication: '✅ Correct : "Would you please...?" est la formulation la plus polie pour une requête au TOEIC. "Will you...?" est plus direct. "Shall" est utilisé pour des propositions (Shall I help?). "Must" est une obligation, pas une requête.',
        regle: '📌 Règle : Requêtes polies au TOEIC : Would you + infinitif = très poli. Will you + infinitif = direct. Could you + infinitif = poli (alternative à would). Dans un contexte professionnel formel, "would" est préféré.',
      },
      {
        id: 'mod-q5',
        enonce: '"According to the forecast, it ___ snow tomorrow."',
        choices: [
          'must',
          'shall',
          'might',
          'would',
        ],
        answer: 2,
        explication: '✅ Correct : "might" exprime une faible probabilité (il se pourrait qu\'il neige). "Must" = déduction quasi-certaine. "Shall" = futur avec I/we ou proposition. "Would" = conditionnel ou habitude passée.',
        regle: '📌 Règle de probabilité : must (95%) > should (75%) > may (50%) > might (30%) > could (30%). Pour une prévision météo incertaine, "might" ou "may" sont appropriés.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. LES MOTS DE LIAISON
  // ─────────────────────────────────────────────────────────────
  {
    id: 'liaisons',
    icon: '🔗',
    title: 'Les mots de liaison',
    color: '#06b6d4',
    lecon: [
      {
        id: 'liaison-categories',
        titre: 'Les 5 catégories de connecteurs',
        contenu: `Les mots de liaison (connecteurs logiques) organisent les idées et créent de la cohérence. Au TOEIC Part 5 et 6, ils sont testés très régulièrement.`,
        tableaux: [
          {
            titre: 'Connecteurs logiques',
            colonnes: ['Catégorie', 'Connecteurs', 'Usage'],
            lignes: [
              ['Addition', 'and, also, moreover, furthermore, in addition, besides', 'Ajouter une idée'],
              ['Opposition', 'but, however, although, even though, despite, yet, while', 'Contraster deux idées'],
              ['Cause', 'because, since, as, due to, owing to, because of', 'Exprimer une cause'],
              ['Conséquence', 'so, therefore, consequently, thus, as a result, hence', 'Exprimer un résultat'],
              ['Conclusion', 'finally, in short, to sum up, in conclusion, overall', 'Conclure ou résumer'],
            ],
          },
        ],
        astuce: `💡 Différence entre "although" et "despite" :
• although + proposition (sujet + verbe) : "Although it was raining, we went out."
• despite + nom ou V-ing : "Despite the rain, we went out." / "Despite being tired, she worked."
⚠️ Erreur classique : "Despite it was raining" → FAUX ! Après "despite", pas de proposition conjuguée.`,
      },
      {
        id: 'liaison-pieges',
        titre: 'Les confusions fréquentes au TOEIC',
        contenu: `Certains connecteurs sont souvent confondus car ils ont des sens proches mais des structures différentes.`,
        exemples: [
          { fr: 'because vs because of vs due to', en: '• because + proposition : "I was late because there was traffic."\n• because of + nom : "I was late because of the traffic."\n• due to + nom : "The delay was due to the traffic."', note: '"Due to" est plus formel, fréquent dans les textes professionnels TOEIC.' },
          { fr: 'however vs but', en: '• but connecte deux propositions : "I was tired, but I finished."\n• however commence ou est au milieu d\'une phrase : "I was tired. However, I finished."', note: '"However" nécessite un point ou point-virgule avant lui (jamais une virgule seule).' },
          { fr: 'so vs therefore', en: '• so est informel : "I was tired, so I went home."\n• therefore est formel : "The project was delayed; therefore, costs increased."', note: 'Au TOEIC, les textes professionnels préfèrent "therefore", "consequently" ou "as a result".' },
        ],
        astuce: `⚠️ Test pour choisir le bon connecteur : demande-toi d'abord QUELLE relation logique existe entre les deux idées (opposition, cause, conséquence...), PUIS choisis la bonne structure grammaticale.`,
      },
    ],
    questions: [
      {
        id: 'lia-q1',
        enonce: '"___ the bad weather, the conference was held outdoors."',
        choices: [
          'Although',
          'Despite',
          'Because of',
          'Even though',
        ],
        answer: 1,
        explication: '✅ Correct : "Despite the bad weather" → "despite" est suivi d\'un nom (the bad weather). "Although" et "even though" doivent être suivis d\'une proposition avec sujet + verbe. "Because of" exprime une cause, pas une opposition.',
        regle: '📌 Règle : despite / in spite of + NOM ou V-ING. although / even though / though + SUJET + VERBE. Ces deux structures expriment le même sens (concession) mais ont des constructions différentes.',
      },
      {
        id: 'lia-q2',
        enonce: '"The project was behind schedule; ___, we met the deadline."',
        choices: [
          'because',
          'however',
          'therefore',
          'so',
        ],
        answer: 1,
        explication: '✅ Correct : "however" exprime une opposition/surprise entre le retard et le fait d\'avoir tenu le délai. "Therefore" et "so" expriment une conséquence logique. "Because" exprime une cause.',
        regle: '📌 Règle : "however" = mais/pourtant → opposition. Il se place après un point ou point-virgule, PAS après une virgule seule. Structure : "Phrase 1. However, Phrase 2." ou "Phrase 1; however, Phrase 2."',
      },
      {
        id: 'lia-q3',
        enonce: '"Sales increased significantly. ___, the company decided to expand."',
        choices: [
          'Although',
          'However',
          'Therefore',
          'Despite',
        ],
        answer: 2,
        explication: '✅ Correct : "Therefore" exprime la conséquence. Parce que les ventes ont augmenté (cause), la décision d\'expansion a été prise (résultat). "Although" et "however" expriment une opposition. "Despite" + nom.',
        regle: '📌 Règle : Connecteurs de conséquence : therefore, consequently, as a result, thus, hence. Structure : "Cause. Therefore, conséquence." ou "Cause; therefore, conséquence."',
      },
      {
        id: 'lia-q4',
        enonce: '"She is qualified for the role ___ she lacks direct experience."',
        choices: [
          'and',
          'so',
          'because',
          'although',
        ],
        answer: 3,
        explication: '✅ Correct : "although" introduit une opposition entre deux faits contradictoires (qualifiée MAIS sans expérience directe). "And" ajoute des idées similaires. "So" exprime la conséquence. "Because" exprime la cause.',
        regle: '📌 Règle : "although" = bien que → concession/opposition. Structure : Although + sujet + verbe, résultat. Ou : Résultat, although + sujet + verbe. Les deux parties de la phrase sont contradictoires.',
      },
      {
        id: 'lia-q5',
        enonce: '"The decline in sales was ___ a drop in consumer confidence."',
        choices: [
          'because',
          'due to',
          'although',
          'therefore',
        ],
        answer: 1,
        explication: '✅ Correct : "due to a drop" → "due to" est suivi d\'un nom. "Because" doit être suivi d\'une proposition (sujet + verbe). "Although" = opposition. "Therefore" = conséquence.',
        regle: '📌 Règle : because + PROPOSITION (sujet + verbe). because of / due to / owing to + NOM ou V-ING. "Due to" est plus formel et très utilisé dans les textes TOEIC (rapports, annonces officielles).',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. LES PHRASAL VERBS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'phrasalverbs',
    icon: '🔤',
    title: 'Les phrasal verbs',
    color: '#ec4899',
    lecon: [
      {
        id: 'pv-intro',
        titre: 'Qu\'est-ce qu\'un phrasal verb ?',
        contenu: `Un phrasal verb est un verbe + une ou deux particules (prépositions ou adverbes) qui forment ensemble une nouvelle unité de sens. Le sens du phrasal verb est souvent très différent du sens du verbe seul.

Exemple : "to look" (regarder) peut donner :
• look up = chercher (dans un dictionnaire)
• look after = prendre soin de
• look forward to = avoir hâte de
• look into = enquêter sur`,
        tableaux: [
          {
            titre: 'Les 4 types de phrasal verbs',
            colonnes: ['Type', 'Description', 'Exemple'],
            lignes: [
              ['Transitif séparable', 'L\'objet peut se placer entre le verbe et la particule, ou après', '"Turn off the light." / "Turn the light off." / "Turn it off." (pronom → toujours au milieu)'],
              ['Transitif inséparable', 'L\'objet se place TOUJOURS après la particule', '"Look after the baby." (JAMAIS "look the baby after")'],
              ['Intransitif', 'Pas d\'objet direct, la phrase est complète sans complément', '"The plane took off." / "She broke down."'],
              ['Trois mots', 'Verbe + deux particules, ordre fixe, inséparable', '"I look forward to meeting you." / "She came up with a plan."'],
            ],
          },
        ],
        astuce: `💡 Règle du PRONOM avec les phrasal verbs séparables :
✅ "Turn off the light." ou "Turn the light off." → les deux sont corrects.
✅ "Turn IT off." → le pronom se place TOUJOURS entre le verbe et la particule.
❌ "Turn off it." → FAUX lorsque l'objet est un pronom !`,
      },
      {
        id: 'pv-courants',
        titre: 'Phrasal verbs courants au TOEIC',
        contenu: `Ces phrasal verbs apparaissent fréquemment dans les documents professionnels du TOEIC.`,
        tableaux: [
          {
            titre: 'Phrasal verbs professionnels fréquents',
            colonnes: ['Phrasal verb', 'Sens', 'Exemple'],
            lignes: [
              ['carry out', 'effectuer, réaliser', '"We need to carry out an audit."'],
              ['come up with', 'trouver, proposer (une idée)', '"She came up with an innovative solution."'],
              ['deal with', 'gérer, traiter', '"Who will deal with customer complaints?"'],
              ['draw up', 'rédiger, établir (un document)', '"Please draw up a contract."'],
              ['fill in / fill out', 'remplir (un formulaire)', '"Please fill in this form."'],
              ['follow up', 'faire un suivi', '"I\'ll follow up on this tomorrow."'],
              ['go ahead', 'procéder, continuer', '"Please go ahead with the plan."'],
              ['hand in / hand out', 'remettre / distribuer', '"Hand in your report by Friday."'],
              ['look into', 'enquêter, examiner', '"We are looking into the issue."'],
              ['put off', 'reporter, remettre à plus tard', '"The meeting was put off until next week."'],
              ['set up', 'organiser, mettre en place', '"She set up a new training program."'],
              ['take over', 'reprendre, prendre la relève', '"He will take over the project."'],
            ],
          },
        ],
        astuce: `💡 Stratégie TOEIC : Dans les exercices Part 5 et 6, quand tu vois un phrasal verb, essaie de deviner le sens depuis le contexte de la phrase. Le sens littéral du verbe seul peut aider, mais ne t'y fie pas entièrement.`,
      },
    ],
    questions: [
      {
        id: 'pv-q1',
        enonce: '"The conference was ___ due to the hurricane warning."',
        choices: [
          'put on',
          'put off',
          'put up',
          'put down',
        ],
        answer: 1,
        explication: '✅ Correct : "put off" = reporter, remettre à plus tard. "Put on" = mettre (vêtement) ou allumer. "Put up" = héberger ou afficher. "Put down" = poser, noter.',
        regle: '📌 La particule change TOUT le sens : put on != put off != put up != put down. C\'est la difficulté des phrasal verbs : il faut les mémoriser un par un.',
      },
      {
        id: 'pv-q2',
        enonce: '"She has ___ an excellent proposal for the new marketing campaign."',
        choices: [
          'come across with',
          'come up with',
          'come out with',
          'come down with',
        ],
        answer: 1,
        explication: '✅ Correct : "come up with" = trouver, proposer une idée. "Come across" = tomber sur (par hasard). "Come out with" = sortir (un produit). "Come down with" = tomber malade.',
        regle: '📌 "Come up with" est l\'un des phrasal verbs les plus courants dans un contexte professionnel (TOEIC). Il signifie "proposer, imaginer, trouver" une solution ou une idée.',
      },
      {
        id: 'pv-q3',
        enonce: '"Please ___ the application form and submit it by Friday."',
        choices: [
          'fill up',
          'fill in',
          'fill for',
          'fill at',
        ],
        answer: 1,
        explication: '✅ Correct : "fill in" (ou "fill out") = remplir un formulaire. "Fill up" = remplir complètement (un réservoir, un verre). "Fill for" et "fill at" n\'existent pas comme phrasal verbs.',
        regle: '📌 fill in / fill out = remplir un document ou formulaire (les deux sont acceptés). fill up = remplir jusqu\'au bord (fill up the tank). Ce phrasal verb est très fréquent dans les formulaires TOEIC.',
      },
      {
        id: 'pv-q4',
        enonce: '"I found this article interesting  -  can you ___ more information on the topic?"',
        choices: [
          'look up',
          'look into',
          'look at',
          'look for',
        ],
        answer: 1,
        explication: '✅ Correct : "look into" = enquêter, examiner, chercher des informations sur quelque chose. "Look up" = chercher dans une source (dictionnaire, liste). "Look at" = regarder (physiquement). "Look for" = chercher (quelque chose perdu).',
        regle: '📌 Les phrasal verbs avec "look" : look at (regarder), look for (chercher), look up (chercher dans une source), look into (enquêter), look after (prendre soin), look forward to (avoir hâte). Chacun a son contexte spécifique.',
      },
      {
        id: 'pv-q5',
        enonce: '"The new manager will ___ the team next Monday."',
        choices: [
          'take up',
          'take after',
          'take over',
          'take on',
        ],
        answer: 2,
        explication: '✅ Correct : "take over" = prendre la relève, reprendre le contrôle de quelque chose. "Take up" = commencer une activité / occuper de l\'espace. "Take after" = ressembler à (un parent). "Take on" = embaucher ou prendre en charge un défi.',
        regle: '📌 "Take over" est fréquent dans les contextes professionnels : take over a project, take over a company, take over from someone. Mémoriser les nuances entre take up / take after / take over / take on.',
      },
    ],
  },
];
