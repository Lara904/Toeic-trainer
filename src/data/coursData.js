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
    sousOnglets: [
 
      // ══════════════════════════════════════════════════════════════════════
      // 1. TEMPS SIMPLES
      // ══════════════════════════════════════════════════════════════════════
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
                  ['Présent simple', 'Sujet + V (+ s 3ème pers.)', 'Habitude, vérité générale, routine', 'She works in Paris. / Water boils at 100°C.'],
                  ['Passé simple', 'Sujet + V-ed / V irrégulier', 'Action terminée à un moment précis du passé', 'She called me yesterday. / He went to London last week.'],
                  ['Futur simple', 'Sujet + will + V base', 'Prédiction, décision spontanée, promesse', 'I will help you. / It will rain tonight.'],
                ],
              },
            ],
            astuce: `💡 Marqueurs temporels clés :
• Présent simple → every day/week, always, never, usually, often, on Mondays
• Passé simple → yesterday, last week/year, in 2020, ago, at 5pm
• Futur simple → tomorrow, next week, soon, I think..., probably
 
⚠️ Piège 3ème pers. sing. : "She go" → FAUX. "She goes" ✅
⚠️ Négatif : doesn't + V BASE. "She doesn't works" → FAUX. "She doesn't work" ✅`,
          },
        ],
        exercices: [
          {
            id: 'simple-exo1',
            titre: 'Exercice 1 — Présent simple : identifier et conjuguer',
            instructions: 'Choisissez la forme correcte du présent simple.',
            questions: [
              { id: 's1-q1', enonce: '"She ___ to work by bus every morning."', choices: ['go', 'goes', 'went', 'is going'], answer: 1, explication: '✅ "goes" — 3ème pers. sing. → V+s. Habitude = présent simple.', regle: '📌 3ème pers. sing. : he/she/it + V+s.' },
              { id: 's1-q2', enonce: '"Water ___ at 100 degrees Celsius."', choices: ['boiled', 'is boiling', 'boils', 'will boil'], answer: 2, explication: '✅ "boils" — Vérité scientifique = présent simple.', regle: '📌 Vérités générales → présent simple.' },
              { id: 's1-q3', enonce: '"They ___ in a small apartment near the city centre."', choices: ['live', 'lives', 'lived', 'are living'], answer: 0, explication: '✅ "live" — Sujet pluriel + fait permanent = présent simple sans s.', regle: '📌 Sujet pluriel → V base (sans s).' },
              { id: 's1-q4', enonce: '"The store ___ at 9am and ___ at 6pm every day."', choices: ['open / close', 'opens / closes', 'opened / closed', 'is opening / is closing'], answer: 1, explication: '✅ "opens / closes" — Horaire régulier + 3ème pers. sing.', regle: '📌 Horaires fixes → présent simple.' },
              { id: 's1-q5', enonce: '"He ___ not like spicy food."', choices: ['do', 'does', 'did', 'is'], answer: 1, explication: '✅ "does" — Négatif 3ème pers. sing. : doesn\'t + V base.', regle: '📌 He/she/it + doesn\'t + V base.' },
              { id: 's1-q6', enonce: 'Laquelle est correcte ?', choices: ["She don't know the answer.", "She doesn't knows the answer.", "She doesn't know the answer.", "She not know the answer."], answer: 2, explication: '✅ "She doesn\'t know" — doesn\'t + V base. "Doesn\'t knows" est une double erreur.', regle: '📌 Avec doesn\'t, le verbe principal reste à la BASE, sans -s.' },
              { id: 's1-q7', enonce: '"___ he work on weekends?"', choices: ['Do', 'Does', 'Did', 'Is'], answer: 1, explication: '✅ "Does" — Question 3ème pers. sing. présent simple.', regle: '📌 Question présent simple : Do I/you/we/they ? Does he/she/it ?' },
              { id: 's1-q8', enonce: '"The sun ___ in the east."', choices: ['rise', 'is rising', 'rises', 'rose'], answer: 2, explication: '✅ "rises" — Vérité + 3ème pers. sing.', regle: '📌 Vérités permanentes → présent simple. 3ème pers. : V+s.' },
              { id: 's1-q9', enonce: '"I ___ my teeth twice a day."', choices: ['brush', 'brushes', 'brushed', 'am brushing'], answer: 0, explication: '✅ "brush" — 1ère pers. + habitude = présent simple base.', regle: '📌 I/you/we/they + V base au présent simple.' },
              { id: 's1-q10', enonce: '"She always ___ the bus when it rains."', choices: ['take', 'takes', 'took', 'is taking'], answer: 1, explication: '✅ "takes" — Habitude (always) + 3ème pers. sing.', regle: '📌 "Always" = marqueur du présent simple (habitude).' },
            ],
          },
          {
            id: 'simple-exo2',
            titre: 'Exercice 2 — Passé simple : identifier et conjuguer',
            instructions: 'Choisissez la forme correcte du passé simple.',
            questions: [
              { id: 's2-q1', enonce: '"She ___ her keys this morning."', choices: ['lose', 'loses', 'lost', 'has lost'], answer: 2, explication: '✅ "lost" — "this morning" = passé précis terminé → passé simple. lose → lost (irrégulier).', regle: '📌 "This morning" (passé précis) → passé simple.' },
              { id: 's2-q2', enonce: '"They ___ a new office building last year."', choices: ['build', 'builds', 'built', 'have built'], answer: 2, explication: '✅ "built" — "last year" = passé simple. build → built (irrégulier).', regle: '📌 "Last year/week/month" → passé simple.' },
              { id: 's2-q3', enonce: '"When ___ you last ___ him?"', choices: ['did / see', 'do / saw', 'did / saw', 'do / see'], answer: 0, explication: '✅ "did / see" — Question passé simple : did + sujet + V base. "Saw" après "did" = FAUX.', regle: '📌 Did + sujet + V BASE. Jamais V-ed après did.' },
              { id: 's2-q4', enonce: '"He ___ not finish the report on time."', choices: ['do', 'does', 'did', 'had'], answer: 2, explication: '✅ "did" — Négatif passé simple : didn\'t + V base.', regle: '📌 Négatif passé simple : didn\'t + V BASE.' },
              { id: 's2-q5', enonce: '"I ___ to Paris in 2018 for a conference."', choices: ['go', 'goes', 'went', 'have gone'], answer: 2, explication: '✅ "went" — "in 2018" = moment précis passé → passé simple. go → went (irrégulier).', regle: '📌 "In [année]" → passé simple. "Go" → "went".' },
              { id: 's2-q6', enonce: '"The meeting ___ two hours ago."', choices: ['ends', 'ended', 'has ended', 'was ending'], answer: 1, explication: '✅ "ended" — "two hours ago" = moment précis → passé simple régulier.', regle: '📌 "Ago" = marqueur classique du passé simple.' },
              { id: 's2-q7', enonce: '"She ___ the project before the deadline."', choices: ['complete', 'completes', 'completed', 'has completed'], answer: 2, explication: '✅ "completed" — Action terminée dans le passé → passé simple.', regle: '📌 Passé simple pour les actions terminées dans le passé.' },
              { id: 's2-q8', enonce: '"They ___ the contract and ___ it to the client."', choices: ['signed / send', 'sign / sent', 'signed / sent', 'have signed / sent'], answer: 2, explication: '✅ "signed / sent" — Deux actions passées terminées → deux passés simples.', regle: '📌 Plusieurs actions passées → toutes au passé simple.' },
              { id: 's2-q9', enonce: '"___ you ___ the email I sent yesterday?"', choices: ['Did / received', 'Have / received', 'Did / receive', 'Do / receive'], answer: 2, explication: '✅ "Did / receive" — "yesterday" force le passé simple. Did + V base.', regle: '📌 "Yesterday" → passé simple. Did + V base.' },
              { id: 's2-q10', enonce: '"I ___ in London when I was a student."', choices: ['live', 'lives', 'lived', 'have lived'], answer: 2, explication: '✅ "lived" — "when I was a student" = période passée terminée → passé simple.', regle: '📌 Période passée et terminée → passé simple.' },
            ],
          },
          {
            id: 'simple-exo3',
            titre: 'Exercice 3 — Futur simple : will',
            instructions: 'Choisissez la forme correcte du futur simple.',
            questions: [
              { id: 's3-q1', enonce: '"I think it ___ rain this afternoon."', choices: ['is', 'was', 'will', 'would'], answer: 2, explication: '✅ "will" — Prédiction avec "I think".', regle: '📌 Prédictions → will + V base.' },
              { id: 's3-q2', enonce: '"Don\'t worry, I ___ help you with the report."', choices: ['am going to', 'will', 'am', 'was'], answer: 1, explication: '✅ "will" — Décision/promesse spontanée → will.', regle: '📌 Décision prise à l\'instant, promesse → will.' },
              { id: 's3-q3', enonce: '"She ___ not be at the meeting tomorrow — she\'s on holiday."', choices: ['do', 'does', 'will', 'has'], answer: 2, explication: '✅ "will" — Négatif futur : won\'t + V base.', regle: '📌 Négatif futur : won\'t / will not + V base.' },
              { id: 's3-q4', enonce: '"___ you help me move this weekend?"', choices: ['Do', 'Are', 'Will', 'Have'], answer: 2, explication: '✅ "Will" — Demande de service futur.', regle: '📌 Questions futur : Will + sujet + V base ?' },
              { id: 's3-q5', enonce: '"The next train ___ arrive at platform 3."', choices: ['arrives', 'arrived', 'will arrive', 'is arrived'], answer: 2, explication: '✅ "will arrive" — Annonce futur.', regle: '📌 Annonces et prédictions → will + V base.' },
              { id: 's3-q6', enonce: '"I\'m sure she ___ get the job."', choices: ['gets', 'got', 'will get', 'is getting'], answer: 2, explication: '✅ "will get" — Prédiction basée sur l\'opinion (I\'m sure).', regle: '📌 Opinions et certitudes sur le futur → will.' },
              { id: 's3-q7', enonce: '"___ you be at the office tomorrow morning?"', choices: ['Do', 'Did', 'Will', 'Are'], answer: 2, explication: '✅ "Will" — Question sur une action future.', regle: '📌 Will you...? pour demander quelque chose dans le futur.' },
              { id: 's3-q8', enonce: '"This project ___ take at least three months."', choices: ['takes', 'took', 'will take', 'has taken'], answer: 2, explication: '✅ "will take" — Estimation future.', regle: '📌 Estimations → will.' },
              { id: 's3-q9', enonce: '"If you work hard, you ___ succeed."', choices: ['succeed', 'succeeds', 'will succeed', 'succeeded'], answer: 2, explication: '✅ "will succeed" — If + présent simple → will + V base.', regle: '📌 If + présent simple → will + V base.' },
              { id: 's3-q10', enonce: '"I\'m hungry. I think I ___ make a sandwich."', choices: ['make', 'made', 'will make', 'am making'], answer: 2, explication: '✅ "will make" — Décision spontanée prise au moment de parler.', regle: '📌 Décision prise au moment de parler → will.' },
            ],
          },
          {
            id: 'simple-exo4',
            titre: 'Exercice 4 — Distinguer les 3 temps simples',
            instructions: 'Choisissez le bon temps simple selon le contexte.',
            questions: [
              { id: 's4-q1', enonce: '"She ___ her report every Monday." (habitude)', choices: ['submitted', 'submits', 'will submit', 'is submitting'], answer: 1, explication: '✅ "submits" — Habitude + 3ème pers. sing.', regle: '📌 Habitude → présent simple.' },
              { id: 's4-q2', enonce: '"He ___ the contract last Tuesday."', choices: ['signs', 'signed', 'will sign', 'has signed'], answer: 1, explication: '✅ "signed" — "last Tuesday" = moment précis → passé simple.', regle: '📌 "Last [jour]" → passé simple.' },
              { id: 's4-q3', enonce: '"I ___ call you back in five minutes." (promesse)', choices: ['call', 'called', 'will call', 'am calling'], answer: 2, explication: '✅ "will call" — Promesse → futur simple will.', regle: '📌 Promesse → will + V base.' },
              { id: 's4-q4', enonce: '"The company ___ a new CEO in 2019."', choices: ['appoints', 'appointed', 'will appoint', 'appoint'], answer: 1, explication: '✅ "appointed" — "in 2019" = passé précis.', regle: '📌 Date passée → passé simple.' },
              { id: 's4-q5', enonce: '"Dogs ___ meat." (vérité générale)', choices: ['ate', 'eat', 'will eat', 'are eating'], answer: 1, explication: '✅ "eat" — Vérité générale + sujet pluriel.', regle: '📌 Vérités générales → présent simple.' },
              { id: 's4-q6', enonce: '"I ___ probably need more time."', choices: ['need', 'needed', 'will need', 'am needing'], answer: 2, explication: '✅ "will need" — "probably" + futur. "Need" = stative → pas de progressif.', regle: '📌 "Probably" + futur → will.' },
              { id: 's4-q7', enonce: '"___ she speak English well?"', choices: ['Do', 'Does', 'Did', 'Will'], answer: 1, explication: '✅ "Does" — Question présent simple 3ème pers.', regle: '📌 Does + he/she/it + V base ?' },
              { id: 's4-q8', enonce: '"The earthquake ___ at 3am. Nobody was hurt."', choices: ['strikes', 'struck', 'will strike', 'has struck'], answer: 1, explication: '✅ "struck" — Événement passé terminé → passé simple irrégulier.', regle: '📌 Narration passée → passé simple.' },
              { id: 's4-q9', enonce: '"The presentation ___ at 10am tomorrow."', choices: ['starts', 'started', 'will start', 'has started'], answer: 2, explication: '✅ "will start" — Événement futur.', regle: '📌 Événements à venir → will.' },
              { id: 's4-q10', enonce: '"She ___ the piano since she was 5." — Quel est le PIÈGE ?', choices: ['plays', 'played', 'will play', 'None — needs present perfect'], answer: 3, explication: '✅ Piège ! "Since she was 5" + continue → présent parfait : "She has played (ou has been playing) the piano since she was 5."', regle: '📌 "Since" + action continue → présent parfait, pas présent simple.' },
            ],
          },
          {
            id: 'simple-exo5',
            titre: 'Exercice 5 — Questions et négations',
            instructions: 'Choisissez la forme interrogative ou négative correcte.',
            questions: [
              { id: 's5-q1', enonce: '"___ she work late often?" (présent)', choices: ['Is', 'Does', 'Did', 'Has'], answer: 1, explication: '✅ "Does" — Question présent simple 3ème pers.', regle: '📌 Does + he/she/it + V base ?' },
              { id: 's5-q2', enonce: '"They ___ not accept credit cards here." (présent)', choices: ['do', 'does', 'did', 'will'], answer: 0, explication: '✅ "do" — Négatif présent sujet pluriel : don\'t.', regle: '📌 I/you/we/they + don\'t.' },
              { id: 's5-q3', enonce: '"___ the manager call you back yesterday?"', choices: ['Does', 'Do', 'Did', 'Has'], answer: 2, explication: '✅ "Did" — Question passé simple.', regle: '📌 Did + sujet + V BASE ?' },
              { id: 's5-q4', enonce: '"She ___ not reply to my email last week."', choices: ['do', 'does', 'did', 'has'], answer: 2, explication: '✅ "did" — Négatif passé simple : didn\'t.', regle: '📌 Négatif passé simple : didn\'t + V base.' },
              { id: 's5-q5', enonce: '"___ they agree to the new terms?" (passé)', choices: ['Do', 'Does', 'Did', 'Have'], answer: 2, explication: '✅ "Did" — Événement passé → passé simple.', regle: '📌 Événements passés terminés → Did ?' },
              { id: 's5-q6', enonce: '"She ___ not understand what you mean." (présent)', choices: ['do', 'does', 'did', 'has'], answer: 1, explication: '✅ "does" — Négatif présent 3ème pers. sing.', regle: '📌 Doesn\'t + V base. "Doesn\'t understands" → FAUX.' },
              { id: 's5-q7', enonce: '"___ your team finish the audit in time?" (futur)', choices: ['Do', 'Does', 'Will', 'Had'], answer: 2, explication: '✅ "Will" — Question futur simple.', regle: '📌 Will + sujet + V base ?' },
              { id: 's5-q8', enonce: '"I ___ not think that\'s a good idea."', choices: ['do', 'does', 'did', 'am'], answer: 0, explication: '✅ "do" — Négatif présent 1ère pers. "Think" = opinion = stative.', regle: '📌 I/you/we/they + don\'t + V base.' },
              { id: 's5-q9', enonce: '"He ___ not attend the training last Monday."', choices: ['do', 'does', 'did', 'had'], answer: 2, explication: '✅ "did" — "last Monday" → passé simple. Négatif : didn\'t.', regle: '📌 "Last [jour]" → passé simple. Négatif : didn\'t + V base.' },
              { id: 's5-q10', enonce: '"___ it matter if I arrive a bit late?" (présent)', choices: ['Is', 'Does', 'Did', 'Do'], answer: 1, explication: '✅ "Does" — "it" = 3ème pers. sing. Question présent.', regle: '📌 Does + it/he/she + V base ?' },
            ],
          },
        ],
      },
// ══════════════════════════════════════════════════════════════════════
// 2. TEMPS PROGRESSIFS
// ══════════════════════════════════════════════════════════════════════
      {
        id: 'progressif',
        label: '② Progressif',
        lecon: [
          {
            id: 'conj-progressifs',
            titre: 'Les temps PROGRESSIFS (continus)',
            contenu: `Les temps progressifs décrivent une action EN TRAIN DE SE DÉROULER. Formation : BE (conjugué) + V-ING.`,
            tableaux: [
              {
                titre: '3 temps progressifs',
                colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
                lignes: [
                  ['Présent progressif', 'am/is/are + V-ing', 'Action en cours / situation temporaire / futur planifié proche', 'I am working right now.'],
                  ['Passé progressif', 'was/were + V-ing', 'Action en cours au passé / action interrompue', 'She was sleeping when I arrived.'],
                  ['Futur progressif', 'will be + V-ing', 'Action en cours à un moment précis du futur', 'I will be travelling this time tomorrow.'],
                ],
              },
            ],
            astuce: `💡 Stative verbs → JAMAIS au progressif : know, believe, understand, want, need, like, love, hate, have (posséder), own, see (voir), hear, seem.
❌ "I am knowing" → ✅ "I know"
 
💡 Marqueurs : right now, at the moment, currently, Look!, Listen!, at 5pm yesterday, this week (temporaire).`,
          },
        ],
        exercices: [
          {
            id: 'prog-exo1',
            titre: 'Exercice 1 — Présent progressif',
            instructions: 'Choisissez la forme correcte du présent progressif.',
            questions: [
              { id: 'p1-q1', enonce: '"Listen! The birds ___."', choices: ['sing', 'sang', 'are singing', 'were singing'], answer: 2, explication: '✅ "are singing" — "Listen!" = action en cours → présent progressif.', regle: '📌 "Look! / Listen!" → présent progressif.' },
              { id: 'p1-q2', enonce: '"She ___ in Paris this month while the office is renovated."', choices: ['works', 'worked', 'is working', 'will work'], answer: 2, explication: '✅ "is working" — Situation temporaire en cours.', regle: '📌 Situation temporaire → présent progressif.' },
              { id: 'p1-q3', enonce: '"Why ___ you ___ that old jacket today?"', choices: ['do / wear', 'are / wearing', 'did / wear', 'have / worn'], answer: 1, explication: '✅ "are / wearing" — Question présent progressif.', regle: '📌 Question présent progressif : Are + sujet + V-ing ?' },
              { id: 'p1-q4', enonce: '"They ___ a new product line at the moment."', choices: ['develop', 'developed', 'are developing', 'will develop'], answer: 2, explication: '✅ "are developing" — "at the moment" = action en cours.', regle: '📌 "At the moment / right now" → présent progressif.' },
              { id: 'p1-q5', enonce: 'Laquelle est INCORRECTE ?', choices: ['She is thinking about quitting.', 'I am having lunch right now.', 'He is knowing the answer.', 'They are meeting clients today.'], answer: 2, explication: '✅ "He is knowing" est FAUX. "Know" = stative → "He knows the answer."', regle: '📌 Stative verbs (know, believe...) → jamais au progressif.' },
              { id: 'p1-q6', enonce: '"I ___ (not/watch) TV right now — I\'m reading."', choices: ["don't watch", "didn't watch", "am not watching", "won't watch"], answer: 2, explication: '✅ "am not watching" — Négatif présent progressif : am/is/are + not + V-ing.', regle: '📌 Négatif présent progressif : am/is/are + not + V-ing.' },
              { id: 'p1-q7', enonce: '"She ___ better since she started the new treatment."', choices: ['is feeling', 'feels', 'felt', 'has felt'], answer: 1, explication: '✅ "feels" — "feel" comme état physique = stative → présent simple.', regle: '📌 "Feel" (état) = stative → présent simple.' },
              { id: 'p1-q8', enonce: '"What ___ you ___ this evening?" (plans)', choices: ['do / do', 'are / doing', 'did / do', 'will / do'], answer: 1, explication: '✅ "are / doing" — Plans proches confirmés → présent progressif pour le futur proche.', regle: '📌 Plans futurs proches confirmés → présent progressif.' },
              { id: 'p1-q9', enonce: '"The company ___ rapidly in new markets this year."', choices: ['expands', 'expanded', 'is expanding', 'has expanded'], answer: 2, explication: '✅ "is expanding" — "this year" = période temporaire en cours.', regle: '📌 "This year/week/month" en cours → présent progressif.' },
              { id: 'p1-q10', enonce: '"I ___ what you mean." (compréhension)', choices: ['am understanding', 'understand', 'understood', 'have understood'], answer: 1, explication: '✅ "understand" — Stative verb → jamais progressif.', regle: '📌 "Understand" = stative → présent simple.' },
            ],
          },
          {
            id: 'prog-exo2',
            titre: 'Exercice 2 — Passé progressif',
            instructions: 'Choisissez la forme correcte du passé progressif.',
            questions: [
              { id: 'p2-q1', enonce: '"At 9pm last night, she ___ a report."', choices: ['writes', 'wrote', 'was writing', 'has written'], answer: 2, explication: '✅ "was writing" — "At 9pm last night" = moment précis passé, action en cours.', regle: '📌 "At [heure] last night" → passé progressif.' },
              { id: 'p2-q2', enonce: '"I ___ a shower when the phone rang."', choices: ['take', 'took', 'was taking', 'had taken'], answer: 2, explication: '✅ "was taking" — Action longue interrompue par le téléphone.', regle: '📌 "Was doing X when Y happened" = action interrompue.' },
              { id: 'p2-q3', enonce: '"While she ___ the meeting, he ___ emails."', choices: ['led / wrote', 'was leading / was writing', 'leads / writes', 'led / was writing'], answer: 1, explication: '✅ "was leading / was writing" — Deux actions simultanées avec "while".', regle: '📌 "While" + simultanéité au passé → les deux au passé progressif.' },
              { id: 'p2-q4', enonce: '"What ___ you ___ at this time yesterday?"', choices: ['do / do', 'were / doing', 'did / do', 'are / doing'], answer: 1, explication: '✅ "were / doing" — Question passé progressif.', regle: '📌 Question passé progressif : Was/Were + sujet + V-ing ?' },
              { id: 'p2-q5', enonce: '"He ___ his phone when he walked into the door."', choices: ['checks', 'checked', 'was checking', 'has checked'], answer: 2, explication: '✅ "was checking" — Action en cours interrompue par un événement.', regle: '📌 Action en cours interrompue → passé progressif.' },
              { id: 'p2-q6', enonce: '"They ___ not ___ attention during the briefing."', choices: ['were / paying', 'did / pay', 'are / paying', 'do / pay'], answer: 0, explication: '✅ "were / paying" — Négatif passé progressif : weren\'t + V-ing.', regle: '📌 Négatif passé progressif : was/were + not + V-ing.' },
              { id: 'p2-q7', enonce: '"The children ___ when the storm started."', choices: ['sleep', 'slept', 'were sleeping', 'have slept'], answer: 2, explication: '✅ "were sleeping" — Action de fond (dormir) + événement soudain (tempête).', regle: '📌 Action de fond + événement → passé progressif + passé simple.' },
              { id: 'p2-q8', enonce: '"She looked tired — she ___ all day."', choices: ['worked', 'works', 'was working', 'had worked'], answer: 2, explication: '✅ "was working" — Activité en cours pendant toute une période passée.', regle: '📌 Activité en cours pendant une durée passée → passé progressif.' },
              { id: 'p2-q9', enonce: '"The sales team ___ a deal when the power cut happened."', choices: ['closes', 'closed', 'was closing', 'has closed'], answer: 2, explication: '✅ "was closing" — Action en cours (négociation) interrompue → passé progressif.', regle: '📌 Négociation en cours interrompue → passé progressif.' },
              { id: 'p2-q10', enonce: '"When I arrived, everyone ___ and laughing."', choices: ['talked', 'talks', 'was talking', 'were talking'], answer: 3, explication: '✅ "were talking" — Description de la scène à mon arrivée. "Everyone" → were ici (contexte pluriel implicite).', regle: '📌 Description de scène passée → passé progressif.' },
            ],
          },
          {
            id: 'prog-exo3',
            titre: 'Exercice 3 — Futur progressif',
            instructions: 'Choisissez la forme correcte du futur progressif.',
            questions: [
              { id: 'p3-q1', enonce: '"This time next week, I ___ on the beach."', choices: ['sit', 'sat', 'will be sitting', 'am sitting'], answer: 2, explication: '✅ "will be sitting" — "This time next week" = moment précis futur, action en cours.', regle: '📌 "This time tomorrow/next week" → futur progressif.' },
              { id: 'p3-q2', enonce: '"Don\'t call at 3pm — the team ___ a presentation."', choices: ['gives', 'gave', 'will be giving', 'is giving'], answer: 2, explication: '✅ "will be giving" — Action en cours à un moment précis du futur.', regle: '📌 Action en cours à un moment précis du futur → will be + V-ing.' },
              { id: 'p3-q3', enonce: '"She ___ the Paris office next month." (visite en cours pendant le mois)', choices: ['visits', 'visited', 'will be visiting', 'has visited'], answer: 2, explication: '✅ "will be visiting" — Activité continue pendant le mois prochain.', regle: '📌 Activité continue sur une période future → futur progressif.' },
              { id: 'p3-q4', enonce: '"At midnight tonight, the servers ___ data."', choices: ['process', 'processed', 'will be processing', 'are processing'], answer: 2, explication: '✅ "will be processing" — Moment précis (midnight), action en cours.', regle: '📌 "At [heure] tonight/tomorrow" → futur progressif.' },
              { id: 'p3-q5', enonce: '"What ___ you ___ at 6pm tomorrow?"', choices: ['do / do', 'are / doing', 'will / be doing', 'did / do'], answer: 2, explication: '✅ "will / be doing" — Question futur progressif.', regle: '📌 Question futur progressif : Will + sujet + be + V-ing ?' },
              { id: 'p3-q6', enonce: '"By the time you wake up, I ___ already."', choices: ['leave', 'left', 'will have left', 'will be leaving'], answer: 2, explication: '✅ "will have left" — "By the time" + action TERMINÉE → futur parfait (pas progressif).', regle: '📌 "By the time" → futur parfait (terminé), pas futur progressif (en cours).' },
              { id: 'p3-q7', enonce: '"She ___ the conference while I handle the clients."', choices: ['attends', 'attended', 'will be attending', 'has attended'], answer: 2, explication: '✅ "will be attending" — Action en cours pendant une période future.', regle: '📌 Deux activités parallèles futures → futur progressif.' },
              { id: 'p3-q8', enonce: '"I ___ through London next week — shall I visit you?"', choices: ['pass', 'passed', 'will be passing', 'am passing'], answer: 2, explication: '✅ "will be passing" — Action de fond future.', regle: '📌 Futur progressif pour une action de fond future.' },
              { id: 'p3-q9', enonce: '"They ___ the new system all day tomorrow."', choices: ['test', 'tested', 'will be testing', 'have tested'], answer: 2, explication: '✅ "will be testing" — Activité continue toute la journée demain.', regle: '📌 Activité continue sur une durée future → futur progressif.' },
              { id: 'p3-q10', enonce: '"I ___ (not/work) this Friday — I\'m off."', choices: ["don't work", "didn't work", "won't be working", "haven't worked"], answer: 2, explication: '✅ "won\'t be working" — Négatif futur progressif.', regle: '📌 Négatif futur progressif : won\'t be + V-ing.' },
            ],
          },
          {
            id: 'prog-exo4',
            titre: 'Exercice 4 — Stative verbs et pièges',
            instructions: 'Identifiez si le progressif est correct ou non.',
            questions: [
              { id: 'p4-q1', enonce: 'Laquelle est correcte ?', choices: ['I am wanting a coffee.', 'I want a coffee.', 'I am want a coffee.', 'I wanting a coffee.'], answer: 1, explication: '✅ "I want a coffee." — "Want" = stative → jamais progressif.', regle: '📌 "Want" = stative → présent simple.' },
              { id: 'p4-q2', enonce: '"She ___ the company." (=elle la possède)', choices: ['is owning', 'owns', 'is own', 'be owning'], answer: 1, explication: '✅ "owns" — "Own" (posséder) = stative.', regle: '📌 "Own" = stative → simple.' },
              { id: 'p4-q3', enonce: '"The soup ___ good!" (perception)', choices: ['is tasting', 'tastes', 'taste', 'was tasting'], answer: 1, explication: '✅ "tastes" — "Taste" comme perception involontaire = stative.', regle: '📌 Perception involontaire → présent simple.' },
              { id: 'p4-q4', enonce: '"I ___ (think) you should apologise." (opinion)', choices: ['am thinking', 'think', 'thought', 'was thinking'], answer: 1, explication: '✅ "think" — Opinion = stative → présent simple.', regle: '📌 "Think" = opinion → présent simple.' },
              { id: 'p4-q5', enonce: '"She ___ the coffee." (action active de goûter)', choices: ['is tasting', 'tastes', 'taste', 'was taste'], answer: 0, explication: '✅ "is tasting" — "Taste" comme action intentionnelle → progressif possible.', regle: '📌 "Taste" actif (intentionnel) → progressif. "Taste" passif (avoir un goût) → simple.' },
              { id: 'p4-q6', enonce: '"I ___ what you mean."', choices: ['am understanding', 'understand', 'understood', 'was understanding'], answer: 1, explication: '✅ "understand" — Stative, jamais progressif.', regle: '📌 "Understand" = stative → présent simple.' },
              { id: 'p4-q7', enonce: '"He ___ his car — it\'s in the garage." (possession)', choices: ['is having', 'has', 'have', 'was having'], answer: 1, explication: '✅ "has" — "Have" comme posséder = stative.', regle: '📌 "Have" = posséder → simple. "Have" = activité → peut être progressif.' },
              { id: 'p4-q8', enonce: '"They ___ lunch when I called." (activité)', choices: ['have', 'had', 'were having', 'are having'], answer: 2, explication: '✅ "were having" — "Have lunch" = activité, pas possession → progressif possible. Passé progressif.', regle: '📌 "Have" + repas/activité → progressif possible.' },
              { id: 'p4-q9', enonce: '"I ___ she\'s right about this." (croyance)', choices: ['am believing', 'believe', 'believed', 'was believing'], answer: 1, explication: '✅ "believe" — Stative.', regle: '📌 "Believe" = stative → simple.' },
              { id: 'p4-q10', enonce: '"The chef ___ each dish before service." (action intentionnelle)', choices: ['is tasting', 'tastes', 'taste', 'has tasted'], answer: 0, explication: '✅ "is tasting" — Action active en cours → progressif.', regle: '📌 "Taste" comme action délibérée → progressif. "Taste" comme état → simple.' },
            ],
          },
          {
            id: 'prog-exo5',
            titre: 'Exercice 5 — Tous les temps progressifs en contexte',
            instructions: 'Choisissez le bon temps progressif.',
            questions: [
              { id: 'p5-q1', enonce: '"I ___ right now — can I call you back?"', choices: ['drive', 'drove', 'am driving', 'will drive'], answer: 2, explication: '✅ "am driving" — Action en cours maintenant.', regle: '📌 Action en cours maintenant → présent progressif.' },
              { id: 'p5-q2', enonce: '"At 8pm yesterday, we ___ dinner with clients."', choices: ['have', 'had', 'were having', 'will be having'], answer: 2, explication: '✅ "were having" — Moment précis passé (8pm yesterday).', regle: '📌 "At [heure] yesterday" → passé progressif.' },
              { id: 'p5-q3', enonce: '"This time tomorrow, I ___ my driving test."', choices: ['take', 'took', 'am taking', 'will be taking'], answer: 3, explication: '✅ "will be taking" — "This time tomorrow" → futur progressif.', regle: '📌 "This time tomorrow" → futur progressif.' },
              { id: 'p5-q4', enonce: '"She ___ for the bus when it started to rain."', choices: ['waits', 'waited', 'was waiting', 'has waited'], answer: 2, explication: '✅ "was waiting" — Action en cours interrompue par la pluie.', regle: '📌 Action interrompue → passé progressif.' },
              { id: 'p5-q5', enonce: '"We ___ the new platform all of next week."', choices: ['test', 'tested', 'will be testing', 'have tested'], answer: 2, explication: '✅ "will be testing" — Activité continue la semaine prochaine.', regle: '📌 Activité continue sur période future → futur progressif.' },
              { id: 'p5-q6', enonce: '"Look! The CEO ___ in our direction."', choices: ['walks', 'walked', 'is walking', 'will walk'], answer: 2, explication: '✅ "is walking" — "Look!" = en cours maintenant.', regle: '📌 "Look!" → présent progressif.' },
              { id: 'p5-q7', enonce: '"She ___ her presentation while he was setting up the projector."', choices: ['practised', 'practises', 'was practising', 'is practising'], answer: 2, explication: '✅ "was practising" — "While" + simultanéité passée.', regle: '📌 "While" + simultanéité passée → passé progressif.' },
              { id: 'p5-q8', enonce: '"I ___ (not/work) from home anymore — I\'m back at the office."', choices: ["don't work", "am not working", "wasn't working", "won't be working"], answer: 1, explication: '✅ "am not working" — Changement de situation temporaire actuelle.', regle: '📌 Changement de situation temporaire → présent progressif.' },
              { id: 'p5-q9', enonce: '"Don\'t disturb her — she ___ a very important call."', choices: ['takes', 'took', 'is taking', 'was taking'], answer: 2, explication: '✅ "is taking" — Action en cours maintenant.', regle: '📌 Action en cours maintenant → présent progressif.' },
              { id: 'p5-q10', enonce: '"At this time next month, we ___ our results to the board."', choices: ['present', 'presented', 'will present', 'will be presenting'], answer: 3, explication: '✅ "will be presenting" — "At this time next month" = moment futur précis.', regle: '📌 "At this time next [période]" → futur progressif.' },
            ],
          },
        ],
      },
 
      // ══════════════════════════════════════════════════════════════════════
      // 3. TEMPS PARFAITS
      // ══════════════════════════════════════════════════════════════════════
      {
        id: 'parfait',
        label: '③ Parfait',
        lecon: [
          {
            id: 'conj-parfaits',
            titre: 'Les temps PARFAITS',
            contenu: `Les temps parfaits créent un LIEN entre deux moments. Formation : HAVE/HAS/HAD + participe passé (V-pp).`,
            tableaux: [
              {
                titre: '3 temps parfaits',
                colonnes: ['Temps', 'Formation', 'Usage principal', 'Exemple'],
                lignes: [
                  ['Présent parfait', 'have/has + V-pp', '① Expérience ② Résultat visible ③ Just/already/yet ④ Durée jusqu\'au présent', 'I have visited Paris. / She has just left.'],
                  ['Passé parfait', 'had + V-pp', 'Action terminée AVANT une autre action passée', 'When I arrived, she had already left.'],
                  ['Futur parfait', 'will have + V-pp', 'Action terminée AVANT un moment précis du futur', 'By 5pm, she will have sent the report.'],
                ],
              },
            ],
            astuce: `💡 Règle d'or : présent parfait ≠ passé simple
• ❌ "I have seen him YESTERDAY." → FAUX. "Yesterday" → passé simple.
• ✅ "I saw him yesterday." / ✅ "I have seen this film before."
 
Marqueurs présent parfait : already, yet, just, ever, never, since, for, recently.
INTERDIT avec : yesterday, last week, in 2020, at 3pm, ago.`,
          },
        ],
        exercices: [
          {
            id: 'parfait-exo1',
            titre: 'Exercice 1 — Présent parfait : résultat et expérience',
            instructions: 'Choisissez la forme correcte du présent parfait.',
            questions: [
              { id: 'pp1-q1', enonce: '"Look! Someone ___ the window."', choices: ['breaks', 'broke', 'has broken', 'had broken'], answer: 2, explication: '✅ "has broken" — Résultat visible maintenant → présent parfait.', regle: '📌 Résultat visible dans le présent → présent parfait.' },
              { id: 'pp1-q2', enonce: '"She ___ already ___ the report."', choices: ['has / finished', 'did / finish', 'have / finished', 'had / finished'], answer: 0, explication: '✅ "has / finished" — "Already" + 3ème pers. sing. → has.', regle: '📌 "Already" → présent parfait.' },
              { id: 'pp1-q3', enonce: '"Have you ever ___ sushi?"', choices: ['eat', 'ate', 'eaten', 'eating'], answer: 2, explication: '✅ "eaten" — "Ever" → présent parfait. V-pp = "eaten".', regle: '📌 "Ever" → présent parfait. Have + ever + V-pp.' },
              { id: 'pp1-q4', enonce: '"I ___ (just/receive) your email."', choices: ['received', 'have just received', 'was receiving', 'am receiving'], answer: 1, explication: '✅ "have just received" — "Just" = action très récente → présent parfait.', regle: '📌 "Just" → présent parfait.' },
              { id: 'pp1-q5', enonce: '"She ___ never ___ to Asia."', choices: ['has / been', 'had / been', 'have / been', 'was / been'], answer: 0, explication: '✅ "has / been" — "Never" + expérience + 3ème pers. sing.', regle: '📌 "Never" + expérience → présent parfait.' },
              { id: 'pp1-q6', enonce: '"___ you ___ your homework yet?"', choices: ['Did / finish', 'Have / finished', 'Do / finish', 'Had / finished'], answer: 1, explication: '✅ "Have / finished" — "Yet" + question → présent parfait.', regle: '📌 "Yet" dans une question → présent parfait.' },
              { id: 'pp1-q7', enonce: '"The company ___ three offices this year."', choices: ['opens', 'opened', 'has opened', 'had opened'], answer: 2, explication: '✅ "has opened" — "This year" (période en cours) + résultat.', regle: '📌 "This year" (en cours) + résultat → présent parfait.' },
              { id: 'pp1-q8', enonce: '"I ___ (not/read) the instructions yet."', choices: ["don't read", "didn't read", "haven't read", "hadn't read"], answer: 2, explication: '✅ "haven\'t read" — "Yet" dans négation → présent parfait.', regle: '📌 "Yet" dans négation → haven\'t/hasn\'t + V-pp.' },
              { id: 'pp1-q9', enonce: '"This is the best film I ___ ever ___."', choices: ['saw', 'have / seen', 'had / seen', 'see'], answer: 1, explication: '✅ "have / seen" — Superlatif + "ever" → présent parfait.', regle: '📌 "The best/worst... I have ever + V-pp" = structure classique.' },
              { id: 'pp1-q10', enonce: '"She ___ the project." (Résultat visible, terminé)', choices: ['finishes', 'finished', 'has finished', 'will finish'], answer: 2, explication: '✅ "has finished" — Résultat présent → présent parfait.', regle: '📌 Résultat présent → présent parfait.' },
            ],
          },
          {
            id: 'parfait-exo2',
            titre: 'Exercice 2 — Présent parfait vs Passé simple',
            instructions: 'Choisissez entre présent parfait et passé simple.',
            questions: [
              { id: 'pp2-q1', enonce: '"She ___ to Rome last summer."', choices: ['has gone', 'went', 'goes', 'had gone'], answer: 1, explication: '✅ "went" — "last summer" = moment précis → passé simple.', regle: '📌 "Last summer/week/year" → passé simple.' },
              { id: 'pp2-q2', enonce: '"I ___ three coffees today." (journée non terminée)', choices: ['drink', 'drank', 'have drunk', 'had drunk'], answer: 2, explication: '✅ "have drunk" — "Today" (période en cours) → présent parfait.', regle: '📌 "Today" (non terminé) → présent parfait.' },
              { id: 'pp2-q3', enonce: '"When ___ she ___ the company?" (date précise)', choices: ['has / joined', 'did / join', 'does / join', 'had / joined'], answer: 1, explication: '✅ "did / join" — Question sur un moment précis → passé simple.', regle: '📌 Question sur date précise → passé simple.' },
              { id: 'pp2-q4', enonce: '"He ___ already ___ the presentation twice this week."', choices: ['gave', 'has / given', 'have / given', 'had / given'], answer: 1, explication: '✅ "has / given" — "Already... this week" (en cours) → présent parfait.', regle: '📌 "This week" (en cours) + "already" → présent parfait.' },
              { id: 'pp2-q5', enonce: '"___ you enjoy the conference?" (terminée hier)', choices: ['Have', 'Do', 'Did', 'Had'], answer: 2, explication: '✅ "Did" — Événement terminé → passé simple.', regle: '📌 Événement terminé → passé simple.' },
              { id: 'pp2-q6', enonce: '"I ___ this novel before — it\'s very good."', choices: ['read', 'have read', 'was reading', 'had read'], answer: 1, explication: '✅ "have read" — Expérience sans moment précis ("before") → présent parfait.', regle: '📌 "Before" sans moment précis → présent parfait.' },
              { id: 'pp2-q7', enonce: '"She ___ the project at 5pm yesterday."', choices: ['finishes', 'has finished', 'finished', 'had finished'], answer: 2, explication: '✅ "finished" — "at 5pm yesterday" = moment précis → passé simple.', regle: '📌 Heure précise dans le passé → passé simple.' },
              { id: 'pp2-q8', enonce: '"I\'m exhausted — I ___ so much today!"', choices: ['work', 'worked', 'have worked', 'was working'], answer: 2, explication: '✅ "have worked" — "Today" (non terminé) + état présent résultant.', regle: '📌 "Today" non terminé + état actuel → présent parfait.' },
              { id: 'pp2-q9', enonce: '"Who ___ the photocopier?" (Elle est cassée, on ne sait pas quand)', choices: ['breaks', 'broke', 'has broken', 'had broken'], answer: 2, explication: '✅ "has broken" — Résultat visible, pas de moment précis.', regle: '📌 Résultat visible, pas de moment précis → présent parfait.' },
              { id: 'pp2-q10', enonce: '"She ___ in this city her whole life."', choices: ['lives', 'lived', 'has lived', 'was living'], answer: 2, explication: '✅ "has lived" — Action commencée dans le passé, toujours vraie.', regle: '📌 Action qui continue jusqu\'au présent → présent parfait.' },
            ],
          },
          {
            id: 'parfait-exo3',
            titre: 'Exercice 3 — Passé parfait',
            instructions: 'Choisissez la forme correcte du passé parfait.',
            questions: [
              { id: 'pp3-q1', enonce: '"When I arrived, she ___ already ___."', choices: ['already left', 'has already left', 'had already left', 'was already leaving'], answer: 2, explication: '✅ "had already left" — Action AVANT mon arrivée → passé parfait.', regle: '📌 Passé parfait = action avant une autre action passée.' },
              { id: 'pp3-q2', enonce: '"He couldn\'t enter because he ___ his badge at home."', choices: ['left', 'leaves', 'had left', 'has left'], answer: 2, explication: '✅ "had left" — L\'oubli explique pourquoi il ne peut pas entrer.', regle: '📌 Cause dans le passé → passé parfait. Conséquence → passé simple.' },
              { id: 'pp3-q3', enonce: '"Before she joined the team, she ___ for two other companies."', choices: ['works', 'worked', 'has worked', 'had worked'], answer: 3, explication: '✅ "had worked" — Avant "before she joined" → passé parfait.', regle: '📌 "Before + passé simple" → passé parfait pour l\'action antérieure.' },
              { id: 'pp3-q4', enonce: '"By the time the ambulance arrived, he ___ consciousness."', choices: ['loses', 'lost', 'had lost', 'has lost'], answer: 2, explication: '✅ "had lost" — Action avant l\'arrivée de l\'ambulance.', regle: '📌 "By the time [passé simple]" → passé parfait.' },
              { id: 'pp3-q5', enonce: '"She told me she ___ the report earlier that morning."', choices: ['sends', 'sent', 'had sent', 'has sent'], answer: 2, explication: '✅ "had sent" — Discours indirect au passé → passé parfait.', regle: '📌 Discours indirect passé : "she said/told she had + V-pp."' },
              { id: 'pp3-q6', enonce: '"I was certain I ___ my keys in the car."', choices: ['leave', 'left', 'had left', 'have left'], answer: 2, explication: '✅ "had left" — Action antérieure à la certitude (passé).', regle: '📌 Passé parfait pour action avant un autre moment passé.' },
              { id: 'pp3-q7', enonce: '"After they ___ the deal, they celebrated."', choices: ['close', 'closed', 'had closed', 'have closed'], answer: 2, explication: '✅ "had closed" — Action antérieure à la célébration.', regle: '📌 "After + passé parfait, passé simple" est la structure préférée.' },
              { id: 'pp3-q8', enonce: '"They ___ never ___ such a difficult project before."', choices: ['have / seen', 'had / seen', 'did / see', 'were / seeing'], answer: 1, explication: '✅ "had / seen" — Expérience jusqu\'à un moment passé → passé parfait.', regle: '📌 "Never before" dans contexte passé → passé parfait.' },
              { id: 'pp3-q9', enonce: '"She realised she ___ the wrong address."', choices: ['gives', 'gave', 'had given', 'has given'], answer: 2, explication: '✅ "had given" — L\'erreur a eu lieu avant qu\'elle s\'en rende compte.', regle: '📌 "She realised" → l\'erreur = passé parfait.' },
              { id: 'pp3-q10', enonce: '"The team ___ already ___ when the manager arrived."', choices: ['had / left', 'has / left', 'was / leaving', 'left'], answer: 0, explication: '✅ "had / left" — Déjà partis avant l\'arrivée du manager.', regle: '📌 "Already + passé parfait" pour action accomplie avant un moment passé.' },
            ],
          },
          {
            id: 'parfait-exo4',
            titre: 'Exercice 4 — Futur parfait',
            instructions: 'Choisissez la forme correcte du futur parfait.',
            questions: [
              { id: 'pp4-q1', enonce: '"By next Friday, she ___ the project."', choices: ['finishes', 'will finish', 'will have finished', 'has finished'], answer: 2, explication: '✅ "will have finished" — "By next Friday" = limite future → action terminée.', regle: '📌 "By [moment futur]" → futur parfait.' },
              { id: 'pp4-q2', enonce: '"By the time you read this, I ___ already ___."', choices: ['already left', 'have already left', 'will have already left', 'had already left'], answer: 2, explication: '✅ "will have already left" — "By the time + présent simple" → futur parfait.', regle: '📌 "By the time + présent simple" → futur parfait.' },
              { id: 'pp4-q3', enonce: '"In 2030, she ___ for this company for 20 years."', choices: ['works', 'will work', 'will have worked', 'has worked'], answer: 2, explication: '✅ "will have worked" — Durée accomplie jusqu\'à 2030.', regle: '📌 Durée jusqu\'à un point futur → futur parfait.' },
              { id: 'pp4-q4', enonce: '"The construction ___ by the end of the year."', choices: ['finishes', 'finished', 'will have finished', 'has finished'], answer: 2, explication: '✅ "will have finished" — "By the end of the year" = limite future.', regle: '📌 "By the end of [période future]" → futur parfait.' },
              { id: 'pp4-q5', enonce: '"Before she retires, she ___ over 500 clients."', choices: ['served', 'serves', 'will have served', 'has served'], answer: 2, explication: '✅ "will have served" — Accompli avant la retraite (futur).', regle: '📌 "Before [futur]" → futur parfait dans la principale.' },
              { id: 'pp4-q6', enonce: '"___ she ___ the review by Monday?"', choices: ['Has / finished', 'Will / have finished', 'Did / finish', 'Does / finish'], answer: 1, explication: '✅ "Will / have finished" — Question futur parfait.', regle: '📌 Question futur parfait : Will + sujet + have + V-pp ?' },
              { id: 'pp4-q7', enonce: '"They ___ the summit before nightfall."', choices: ['reach', 'reached', 'will have reached', 'are reaching'], answer: 2, explication: '✅ "will have reached" — Accompli avant la nuit.', regle: '📌 Accompli avant une limite future → futur parfait.' },
              { id: 'pp4-q8', enonce: '"By next month, I ___ this course."', choices: ['complete', 'completed', 'will have completed', 'have completed'], answer: 2, explication: '✅ "will have completed" — "By next month" → futur parfait.', regle: '📌 "By next [période]" → futur parfait.' },
              { id: 'pp4-q9', enonce: '"She ___ (not/finish) the analysis by tomorrow morning."', choices: ["won't finish", "hasn't finished", "won't have finished", "didn't finish"], answer: 2, explication: '✅ "won\'t have finished" — Négatif futur parfait.', regle: '📌 Négatif futur parfait : won\'t have + V-pp.' },
              { id: 'pp4-q10', enonce: '"By the time the guests arrive, we ___ all the preparations."', choices: ['make', 'made', 'will have made', 'have made'], answer: 2, explication: '✅ "will have made" — Préparatifs terminés avant l\'arrivée.', regle: '📌 "By the time [présent]" → futur parfait.' },
            ],
          },
          {
            id: 'parfait-exo5',
            titre: 'Exercice 5 — Les 3 temps parfaits en contexte',
            instructions: 'Choisissez le bon temps parfait.',
            questions: [
              { id: 'pp5-q1', enonce: '"I ___ this city three times." (expérience)', choices: ['visited', 'have visited', 'had visited', 'will have visited'], answer: 1, explication: '✅ "have visited" — Expérience sans moment précis → présent parfait.', regle: '📌 Expérience de vie → présent parfait.' },
              { id: 'pp5-q2', enonce: '"When the police arrived, the thief ___."', choices: ['escaped', 'escapes', 'had escaped', 'has escaped'], answer: 2, explication: '✅ "had escaped" — Parti AVANT l\'arrivée → passé parfait.', regle: '📌 Action antérieure dans le passé → passé parfait.' },
              { id: 'pp5-q3', enonce: '"By her 30th birthday, she ___ CEO."', choices: ['becomes', 'became', 'will have become', 'has become'], answer: 2, explication: '✅ "will have become" — Avant ses 30 ans (futur) → futur parfait.', regle: '📌 "By [moment futur]" → futur parfait.' },
              { id: 'pp5-q4', enonce: '"He ___ (never/try) Thai food." (maintenant)', choices: ['never tried', 'has never tried', 'had never tried', 'will never try'], answer: 1, explication: '✅ "has never tried" — Expérience jusqu\'au présent.', regle: '📌 "Never" + expérience actuelle → présent parfait.' },
              { id: 'pp5-q5', enonce: '"It\'s the first time I ___ such a difficult question."', choices: ['face', 'faced', 'have faced', 'had faced'], answer: 2, explication: '✅ "have faced" — "It\'s the first time + présent parfait" = structure fixe.', regle: '📌 "It\'s the first time + have/has + V-pp" = structure fixe.' },
              { id: 'pp5-q6', enonce: '"Before she could say anything, he ___ already ___."', choices: ['has / left', 'had / left', 'is / leaving', 'was / leaving'], answer: 1, explication: '✅ "had / left" — Avant "before she could" → passé parfait.', regle: '📌 "Before [passé]" → passé parfait pour l\'action antérieure.' },
              { id: 'pp5-q7', enonce: '"By 2035, renewable energy ___ coal as the main source."', choices: ['replaces', 'replaced', 'will have replaced', 'has replaced'], answer: 2, explication: '✅ "will have replaced" — Avant 2035 (futur) → futur parfait.', regle: '📌 "By [année future]" → futur parfait.' },
              { id: 'pp5-q8', enonce: '"She ___ for this company for ten years when she was promoted."', choices: ['worked', 'had worked', 'has worked', 'was working'], answer: 1, explication: '✅ "had worked" — 10 ans AVANT la promotion → passé parfait.', regle: '📌 Durée accomplie avant un moment passé → passé parfait.' },
              { id: 'pp5-q9', enonce: '"This is the most interesting book I ___ ever ___."', choices: ['read', 'have / read', 'had / read', 'will have / read'], answer: 1, explication: '✅ "have / read" — Superlatif + "ever" → présent parfait.', regle: '📌 "The most/best/worst... ever" → présent parfait.' },
              { id: 'pp5-q10', enonce: '"___ you ever ___ to Japan?" (expérience)', choices: ['Did / go', 'Have / been', 'Did / been', 'Have / went'], answer: 1, explication: '✅ "Have / been" — "Have you ever been to [lieu]?" = formule standard.', regle: '📌 "Have you ever been to...?" = formule standard pour l\'expérience.' },
            ],
          },
        ],
      },
// ══════════════════════════════════════════════════════════════════════
// 4. PARFAITS PROGRESSIFS
// ══════════════════════════════════════════════════════════════════════
      {
        id: 'parfait-progressif',
        label: '④ Parfait Progressif',
        lecon: [
          {
            id: 'conj-parfaits-prog',
            titre: 'Les temps PARFAITS PROGRESSIFS',
            contenu: `Combinent parfait (lien entre deux moments) et progressif (durée, continuité). Formation : HAVE/HAS/HAD BEEN + V-ING.`,
            tableaux: [
              {
                titre: '3 temps parfaits progressifs',
                colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
                lignes: [
                  ['Présent parfait progressif', 'have/has been + V-ing', 'Durée depuis le passé jusqu\'au présent / traces visibles', 'I have been working here for 5 years.'],
                  ['Passé parfait progressif', 'had been + V-ing', 'Durée AVANT un moment précis du passé', 'She had been waiting for 2h when he arrived.'],
                  ['Futur parfait progressif', 'will have been + V-ing', 'Durée jusqu\'à un moment précis du futur', 'By June, I will have been learning English for 3 years.'],
                ],
              },
            ],
            astuce: `💡 Parfait vs Parfait progressif :
• "I have read the report." → Résultat : c\'est terminé
• "I have been reading the report." → Durée : j\'y ai passé du temps
 
Mots-clés : for, since, all day/morning/week, how long.
⚠️ Stative verbs → jamais progressif : "I have been knowing him" ❌ → "I have known him" ✅`,
          },
        ],
        exercices: [
          {
            id: 'parfprog-exo1',
            titre: 'Exercice 1 — Présent parfait progressif',
            instructions: 'Choisissez la forme correcte du présent parfait progressif.',
            questions: [
              { id: 'ppp1-q1', enonce: '"I ___ (wait) for you for half an hour!"', choices: ['waited', 'was waiting', 'have been waiting', 'had been waiting'], answer: 2, explication: '✅ "have been waiting" — Durée (half an hour) + continue → présent parfait progressif.', regle: '📌 Durée depuis le passé → have/has been + V-ing.' },
              { id: 'ppp1-q2', enonce: '"She looks tired — she ___ all day."', choices: ['worked', 'has worked', 'has been working', 'was working'], answer: 2, explication: '✅ "has been working" — Traces (fatigue) d\'activité continue → présent parfait progressif.', regle: '📌 Traces d\'activité prolongée → présent parfait progressif.' },
              { id: 'ppp1-q3', enonce: '"How long ___ you ___ English?"', choices: ['do / learn', 'have / learnt', 'have / been learning', 'did / learn'], answer: 2, explication: '✅ "have / been learning" — "How long" + action en cours → présent parfait progressif.', regle: '📌 "How long" + action en cours → présent parfait progressif.' },
              { id: 'ppp1-q4', enonce: '"It ___ (rain) all morning — the streets are flooded."', choices: ['rained', 'has rained', 'has been raining', 'was raining'], answer: 2, explication: '✅ "has been raining" — Durée (all morning) + résultat visible.', regle: '📌 Durée + résultat visible → présent parfait progressif.' },
              { id: 'ppp1-q5', enonce: '"She ___ for this promotion for two years."', choices: ['worked', 'works', 'has been working', 'had been working'], answer: 2, explication: '✅ "has been working" — Action continue depuis 2 ans, toujours en cours.', regle: '📌 "For [durée]" + toujours en cours → présent parfait progressif.' },
              { id: 'ppp1-q6', enonce: '"Why are your clothes dirty? — I ___ (fix) my bike."', choices: ['fixed', 'have fixed', 'have been fixing', 'was fixing'], answer: 2, explication: '✅ "have been fixing" — Vêtements sales = trace d\'activité récente prolongée.', regle: '📌 Trace visible d\'activité récente → présent parfait progressif.' },
              { id: 'ppp1-q7', enonce: '"They ___ (argue) since this morning — it\'s exhausting."', choices: ['argued', 'have argued', 'have been arguing', 'were arguing'], answer: 2, explication: '✅ "have been arguing" — "Since this morning" + état actuel.', regle: '📌 "Since [point du passé]" + toujours en cours → présent parfait progressif.' },
              { id: 'ppp1-q8', enonce: '"I ___ (study) this chapter all morning and I still don\'t understand."', choices: ['studied', 'have studied', 'have been studying', 'was studying'], answer: 2, explication: '✅ "have been studying" — "All morning" + processus continu.', regle: '📌 "All morning/day" + processus continu → présent parfait progressif.' },
              { id: 'ppp1-q9', enonce: '"He ___ (know) her since 2015." (relation durable)', choices: ['has been knowing', 'knew', 'knows', 'has known'], answer: 3, explication: '✅ "has known" — "Know" = stative → jamais progressif. Durée + stative → présent parfait simple.', regle: '📌 Stative verb + durée → présent parfait simple.' },
              { id: 'ppp1-q10', enonce: '"The network ___ (slow down) recently — IT is investigating."', choices: ['slowed down', 'has slowed down', 'has been slowing down', 'was slowing down'], answer: 2, explication: '✅ "has been slowing down" — Tendance continue récente (recently).', regle: '📌 "Recently" + tendance continue → présent parfait progressif.' },
            ],
          },
          {
            id: 'parfprog-exo2',
            titre: 'Exercice 2 — Passé parfait progressif',
            instructions: 'Choisissez la forme correcte du passé parfait progressif.',
            questions: [
              { id: 'ppp2-q1', enonce: '"She ___ (wait) for an hour when the doctor finally called."', choices: ['waited', 'was waiting', 'had been waiting', 'has been waiting'], answer: 2, explication: '✅ "had been waiting" — Durée AVANT le moment passé.', regle: '📌 Durée avant un moment du passé → had been + V-ing.' },
              { id: 'ppp2-q2', enonce: '"He was exhausted — he ___ (drive) for 12 hours."', choices: ['drove', 'had driven', 'had been driving', 'was driving'], answer: 2, explication: '✅ "had been driving" — Traces (épuisement) d\'activité longue AVANT.', regle: '📌 Traces d\'activité prolongée dans le passé → passé parfait progressif.' },
              { id: 'ppp2-q3', enonce: '"Before she got the promotion, she ___ (work) extra hours for months."', choices: ['works', 'worked', 'had been working', 'was working'], answer: 2, explication: '✅ "had been working" — Durée avant la promotion.', regle: '📌 "Before + passé simple" → passé parfait progressif pour la durée antérieure.' },
              { id: 'ppp2-q4', enonce: '"The project ___ (run over budget) for months before management intervened."', choices: ['ran', 'has been running', 'had been running', 'was running'], answer: 2, explication: '✅ "had been running" — Durée continue avant l\'intervention.', regle: '📌 Durée continue avant un événement passé → passé parfait progressif.' },
              { id: 'ppp2-q5', enonce: '"When they found a solution, they ___ (struggle) for weeks."', choices: ['struggled', 'were struggling', 'had been struggling', 'have been struggling'], answer: 2, explication: '✅ "had been struggling" — Durée (weeks) avant la solution.', regle: '📌 "When [passé simple]" → passé parfait progressif pour la durée antérieure.' },
              { id: 'ppp2-q6', enonce: '"She ___ (study) all night before she realised it was the wrong exam."', choices: ['studied', 'was studying', 'had been studying', 'has been studying'], answer: 2, explication: '✅ "had been studying" — Activité prolongée AVANT la réalisation.', regle: '📌 Activité prolongée avant une découverte → passé parfait progressif.' },
              { id: 'ppp2-q7', enonce: '"The teams ___ (negotiate) for two weeks when the deal collapsed."', choices: ['negotiate', 'negotiated', 'had been negotiating', 'were negotiating'], answer: 2, explication: '✅ "had been negotiating" — Durée (two weeks) avant l\'effondrement.', regle: '📌 Durée avant un événement passé → passé parfait progressif.' },
              { id: 'ppp2-q8', enonce: '"He was drenched because he ___ (run) in the rain."', choices: ['ran', 'had run', 'had been running', 'was running'], answer: 2, explication: '✅ "had been running" — Traces (trempé) d\'activité passée.', regle: '📌 Traces d\'activité passée prolongée → passé parfait progressif.' },
              { id: 'ppp2-q9', enonce: '"How long ___ they ___ before the merger was announced?"', choices: ['did / talk', 'were / talking', 'had / been talking', 'have / been talking'], answer: 2, explication: '✅ "had / been talking" — "How long" + durée avant événement passé.', regle: '📌 "How long had they been...?" = durée avant un moment passé.' },
              { id: 'ppp2-q10', enonce: '"By the time rescue arrived, survivors ___ (wait) for 48 hours."', choices: ['waited', 'were waiting', 'had been waiting', 'have been waiting'], answer: 2, explication: '✅ "had been waiting" — Durée (48h) AVANT l\'arrivée des secours.', regle: '📌 "By the time + passé simple" → passé parfait progressif pour la durée.' },
            ],
          },
          {
            id: 'parfprog-exo3',
            titre: 'Exercice 3 — Futur parfait progressif',
            instructions: 'Choisissez la forme correcte du futur parfait progressif.',
            questions: [
              { id: 'ppp3-q1', enonce: '"By June, I ___ (study) English for three years."', choices: ['study', 'will study', 'will have studied', 'will have been studying'], answer: 3, explication: '✅ "will have been studying" — Durée (3 ans) jusqu\'à June.', regle: '📌 Durée jusqu\'à un moment futur → will have been + V-ing.' },
              { id: 'ppp3-q2', enonce: '"Next month, they ___ (work) on this project for a year."', choices: ['work', 'will work', 'will have worked', 'will have been working'], answer: 3, explication: '✅ "will have been working" — Durée (a year) jusqu\'à next month.', regle: '📌 "Next [période]" + durée → futur parfait progressif.' },
              { id: 'ppp3-q3', enonce: '"By 2030, she ___ (teach) for 25 years."', choices: ['teaches', 'will teach', 'will have taught', 'will have been teaching'], answer: 3, explication: '✅ "will have been teaching" — Durée continue jusqu\'à un moment futur.', regle: '📌 Durée continue jusqu\'à un point futur → futur parfait progressif.' },
              { id: 'ppp3-q4', enonce: 'Comparer — juste l\'accomplissement : "By Friday, she ___ the report."', choices: ['will finish', 'will have finished', 'will have been finishing', 'will be finishing'], answer: 1, explication: '✅ "will have finished" — Accomplissement simple → futur parfait simple (pas progressif).', regle: '📌 Accomplissement simple → futur parfait. Durée → futur parfait progressif.' },
              { id: 'ppp3-q5', enonce: '"When she retires, she ___ (help) students for over 30 years."', choices: ['helps', 'will help', 'will have helped', 'will have been helping'], answer: 3, explication: '✅ "will have been helping" — Durée continue jusqu\'à la retraite.', regle: '📌 Durée continue jusqu\'à un événement futur → futur parfait progressif.' },
              { id: 'ppp3-q6', enonce: '"By the time you read this, I ___ (travel) for 24 hours."', choices: ['travel', 'will travel', 'will have travelled', 'will have been travelling'], answer: 3, explication: '✅ "will have been travelling" — Durée (24h) jusqu\'à la lecture.', regle: '📌 "By the time + présent" + durée → futur parfait progressif.' },
              { id: 'ppp3-q7', enonce: '"Next year at this time, they ___ (renovate) for two years."', choices: ['renovate', 'will renovate', 'will have renovated', 'will have been renovating'], answer: 3, explication: '✅ "will have been renovating" — Durée (two years) jusqu\'à l\'année prochaine.', regle: '📌 Durée + point futur → futur parfait progressif.' },
              { id: 'ppp3-q8', enonce: '⚠️ Laquelle est FAUSSE ? "By next month, ___"', choices: ['she will have finished the project.', 'they will have been negotiating for six months.', 'I will have been knowing him for ten years.', 'we will have been working together for a decade.'], answer: 2, explication: '✅ "will have been knowing" est FAUX. "Know" = stative → "I will have known him for ten years."', regle: '📌 Stative + durée future → futur parfait simple.' },
              { id: 'ppp3-q9', enonce: '"In 2040, renewable energy ___ (power) cities for 20 years."', choices: ['powers', 'will power', 'will have powered', 'will have been powering'], answer: 3, explication: '✅ "will have been powering" — Durée continue (20 ans) jusqu\'à 2040.', regle: '📌 Durée continue jusqu\'à un moment futur → futur parfait progressif.' },
              { id: 'ppp3-q10', enonce: '"By the end of the marathon, the runners ___ (run) for over 4 hours."', choices: ['run', 'will run', 'will have run', 'will have been running'], answer: 3, explication: '✅ "will have been running" — Durée (4h) vécue jusqu\'à la fin → futur parfait progressif.', regle: '📌 Durée vécue jusqu\'à un point futur → futur parfait progressif.' },
            ],
          },
          {
            id: 'parfprog-exo4',
            titre: 'Exercice 4 — Parfait vs Parfait Progressif : résultat ou durée ?',
            instructions: 'Choisissez entre parfait simple et parfait progressif.',
            questions: [
              { id: 'ppp4-q1', enonce: '"She ___ three reports today." (quantité)', choices: ['has been writing', 'has written', 'was writing', 'had written'], answer: 1, explication: '✅ "has written" — Quantité précise = résultat → parfait simple.', regle: '📌 Quantité/nombre → parfait simple.' },
              { id: 'ppp4-q2', enonce: '"She ___ all day." (durée, processus)', choices: ['has written', 'has been writing', 'wrote', 'was writing'], answer: 1, explication: '✅ "has been writing" — "All day" = durée → parfait progressif.', regle: '📌 "All day/morning" = durée → parfait progressif.' },
              { id: 'ppp4-q3', enonce: '"I ___ the letter." (c\'est terminé, résultat)', choices: ['have been writing', 'have written', 'was writing', 'had written'], answer: 1, explication: '✅ "have written" — Résultat : la lettre est écrite → parfait simple.', regle: '📌 Résultat terminé → parfait simple.' },
              { id: 'ppp4-q4', enonce: '"How many pages ___ you ___ so far?" (bilan)', choices: ['have / been writing', 'have / written', 'did / write', 'were / writing'], answer: 1, explication: '✅ "have / written" — "How many" = quantité → parfait simple.', regle: '📌 "How many" → parfait simple. "How long" → parfait progressif.' },
              { id: 'ppp4-q5', enonce: '"How long ___ you ___ on this?" (durée)', choices: ['have / worked', 'have / been working', 'did / work', 'are / working'], answer: 1, explication: '✅ "have / been working" — "How long" = durée → parfait progressif.', regle: '📌 "How long" + en cours → présent parfait progressif.' },
              { id: 'ppp4-q6', enonce: '"He ___ (know) her for years." (stative)', choices: ['has been knowing', 'has known', 'is knowing', 'knew'], answer: 1, explication: '✅ "has known" — "Know" = stative → parfait simple.', regle: '📌 Stative verb + durée → parfait simple.' },
              { id: 'ppp4-q7', enonce: '"I\'m tired. I ___ (run) for two hours."', choices: ['ran', 'have run', 'have been running', 'was running'], answer: 2, explication: '✅ "have been running" — Fatigue = trace d\'activité prolongée.', regle: '📌 Trace d\'activité prolongée → présent parfait progressif.' },
              { id: 'ppp4-q8', enonce: '"She ___ (finish) the book." (résultat)', choices: ['has been finishing', 'has finished', 'was finishing', 'is finishing'], answer: 1, explication: '✅ "has finished" — "Finish" = verbe de résultat → parfait simple.', regle: '📌 Verbes de résultat (finish, arrive, open...) → parfait simple.' },
              { id: 'ppp4-q9', enonce: '"The team ___ (work) on the bug for hours before they found a fix."', choices: ['worked', 'had worked', 'had been working', 'were working'], answer: 2, explication: '✅ "had been working" — Durée (hours) avant la solution → passé parfait progressif.', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'ppp4-q10', enonce: '"By 2035, solar panels ___ (generate) power for two decades."', choices: ['generated', 'will generate', 'will have generated', 'will have been generating'], answer: 3, explication: '✅ "will have been generating" — Durée (two decades) jusqu\'à 2035.', regle: '📌 Durée + point futur → futur parfait progressif.' },
            ],
          },
          {
            id: 'parfprog-exo5',
            titre: 'Exercice 5 — Tous les parfaits progressifs en contexte',
            instructions: 'Choisissez le bon temps parfait progressif.',
            questions: [
              { id: 'ppp5-q1', enonce: '"She ___ (wait) for the results since Monday."', choices: ['waits', 'waited', 'has been waiting', 'had been waiting'], answer: 2, explication: '✅ "has been waiting" — "Since Monday" + continue jusqu\'au présent.', regle: '📌 "Since [point passé]" + continue → présent parfait progressif.' },
              { id: 'ppp5-q2', enonce: '"He was out of breath — he ___ (sprint) to catch the train."', choices: ['sprinted', 'had sprinted', 'had been sprinting', 'was sprinting'], answer: 2, explication: '✅ "had been sprinting" — Traces (essoufflement) d\'activité passée.', regle: '📌 Traces d\'effort passé → passé parfait progressif.' },
              { id: 'ppp5-q3', enonce: '"By summer, I ___ (save) money for a year."', choices: ['save', 'will save', 'will have saved', 'will have been saving'], answer: 3, explication: '✅ "will have been saving" — Durée (a year) jusqu\'à l\'été.', regle: '📌 Durée jusqu\'à moment futur → futur parfait progressif.' },
              { id: 'ppp5-q4', enonce: '"Before the system crashed, engineers ___ (troubleshoot) for hours."', choices: ['troubleshoot', 'troubleshot', 'had been troubleshooting', 'were troubleshooting'], answer: 2, explication: '✅ "had been troubleshooting" — Durée avant la panne.', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'ppp5-q5', enonce: '"Your eyes are red. ___ you ___ (cry)?"', choices: ['Did / cry', 'Have / cried', 'Have / been crying', 'Were / crying'], answer: 2, explication: '✅ "Have / been crying" — Yeux rouges = trace → présent parfait progressif.', regle: '📌 Traces visibles → présent parfait progressif.' },
              { id: 'ppp5-q6', enonce: '"Next year, this factory ___ (produce) cars for 50 years."', choices: ['produces', 'will produce', 'will have produced', 'will have been producing'], answer: 3, explication: '✅ "will have been producing" — Durée (50 ans) jusqu\'à l\'an prochain.', regle: '📌 Durée continue jusqu\'à point futur → futur parfait progressif.' },
              { id: 'ppp5-q7', enonce: '"They ___ (negotiate) for months when the deal fell through."', choices: ['negotiated', 'were negotiating', 'had been negotiating', 'have been negotiating'], answer: 2, explication: '✅ "had been negotiating" — Durée (months) avant échec (passé).', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'ppp5-q8', enonce: '"I ___ (study) for hours — I need a break."', choices: ['studied', 'have studied', 'have been studying', 'was studying'], answer: 2, explication: '✅ "have been studying" — Durée + besoin présent.', regle: '📌 Durée + état présent résultant → présent parfait progressif.' },
              { id: 'ppp5-q9', enonce: '"By the time he turns 40, he ___ (run) marathons for 15 years."', choices: ['runs', 'will run', 'will have run', 'will have been running'], answer: 3, explication: '✅ "will have been running" — Durée (15 ans) jusqu\'à ses 40 ans.', regle: '📌 "By the time + présent" + durée → futur parfait progressif.' },
              { id: 'ppp5-q10', enonce: '"She was pale — she ___ (not/sleep) properly for weeks."', choices: ["didn't sleep", "hasn't been sleeping", "hadn't been sleeping", "wasn't sleeping"], answer: 2, explication: '✅ "hadn\'t been sleeping" — Durée (weeks) de manque de sommeil AVANT l\'observation.', regle: '📌 Négatif passé parfait progressif : hadn\'t been + V-ing.' },
            ],
          },
        ],
      },
 
      // ══════════════════════════════════════════════════════════════════════
      // 5. DIFF : Simple vs Progressif
      // ══════════════════════════════════════════════════════════════════════
      {
        id: 'diff-simple-prog',
        label: '⚖️ Simple vs Progressif',
        lecon: [
          {
            id: 'diff-sp-lecon',
            titre: 'Quand choisir Simple ou Progressif ?',
            contenu: `SIMPLE = faits, habitudes, vérités permanentes. PROGRESSIF = action en cours, durée, situation temporaire.`,
            tableaux: [
              {
                titre: 'Comparatif clé',
                colonnes: ['Critère', 'SIMPLE', 'PROGRESSIF'],
                lignes: [
                  ['Nature', 'Fait, habitude, vérité permanente', 'Action en cours à un moment précis'],
                  ['Temporaire?', 'Non (permanent/habituel)', 'Oui (temporaire ou en cours)'],
                  ['Interruption', '—', '"Was doing X when Y happened"'],
                  ['Simultanéité', 'Deux faits (while)', '"While + deux progressifs" simultanés'],
                  ['Stative verbs', 'Toujours simple', 'Jamais'],
                  ['Marqueurs', 'every day, always, yesterday, last week', 'now, at the moment, at 5pm yesterday, this week'],
                ],
              },
            ],
            astuce: `⚠️ Pièges classiques :
• "She is knowing" → ❌ → "She knows" ✅ (stative)
• "I am working here since 2018" → ❌ → "I have been working here since 2018" ✅
• "What do you do right now?" → ❌ → "What are you doing right now?" ✅`,
          },
        ],
        exercices: [
          {
            id: 'diff-sp-exo1',
            titre: 'Exercice 1 — Présent simple vs présent progressif',
            instructions: 'Choisissez entre présent simple et présent progressif.',
            questions: [
              { id: 'dsp1-q1', enonce: '"She ___ to work every day." vs "She ___ from home this week."', choices: ['walks / works', 'is walking / is working', 'walks / is working', 'is walking / works'], answer: 2, explication: '✅ "walks" (habitude) / "is working" (situation temporaire cette semaine).', regle: '📌 Habitude → simple. Situation temporaire → progressif.' },
              { id: 'dsp1-q2', enonce: '"Water ___ at 100°C." vs "Look — the water ___!"', choices: ['boils / is boiling', 'is boiling / boils', 'boils / boils', 'is boiling / is boiling'], answer: 0, explication: '✅ "boils" (vérité) / "is boiling" ("Look!" = en cours).', regle: '📌 "Look!" → progressif. Vérité générale → simple.' },
              { id: 'dsp1-q3', enonce: '"She ___ (think) you\'re right." vs "She ___ (think) about the offer."', choices: ['thinks / is thinking', 'is thinking / thinks', 'thinks / thinks', 'is thinking / is thinking'], answer: 0, explication: '✅ "thinks" (opinion = stative) / "is thinking" (réfléchir activement = action).', regle: '📌 "Think" = opinion → simple. "Think" = réfléchir activement → progressif.' },
              { id: 'dsp1-q4', enonce: '"I usually ___ coffee but today I ___ tea."', choices: ['drink / am drinking', 'am drinking / drink', 'drink / drink', 'am drinking / am drinking'], answer: 0, explication: '✅ "drink" (habitude) / "am drinking" (exception d\'aujourd\'hui = temporaire).', regle: '📌 Habitude → simple. Exception temporaire aujourd\'hui → progressif.' },
              { id: 'dsp1-q5', enonce: '"The train ___ at 8 every morning." vs "Hurry! The train ___!"', choices: ['leaves / is leaving', 'is leaving / leaves', 'leaves / leaves', 'is leaving / is leaving'], answer: 0, explication: '✅ "leaves" (horaire fixe) / "is leaving" (en train de partir, urgence).', regle: '📌 Horaire régulier → simple. Action en cours maintenant → progressif.' },
              { id: 'dsp1-q6', enonce: '"He ___ the company." (=possède) vs "He ___ the company." (=dirige activement)', choices: ['owns / is running', 'is owning / runs', 'owns / runs', 'is owning / is running'], answer: 0, explication: '✅ "owns" (posséder = stative) / "is running" (diriger = action en cours).', regle: '📌 "Own" (posséder) = stative → simple. "Run" (diriger) → progressif possible.' },
              { id: 'dsp1-q7', enonce: '"I ___ what you mean." vs "I ___ (reconsider) my decision."', choices: ['understand / am reconsidering', 'am understanding / reconsider', 'understand / reconsider', 'am understanding / am reconsidering'], answer: 0, explication: '✅ "understand" (stative) / "am reconsidering" (action délibérée en cours).', regle: '📌 "Understand" = stative → simple. Actions délibérées → progressif.' },
              { id: 'dsp1-q8', enonce: '"The company ___ 500 employees." vs "The company ___ rapidly."', choices: ['employs / is growing', 'is employing / grows', 'employs / grows', 'is employing / is growing'], answer: 0, explication: '✅ "employs" (fait permanent) / "is growing" (tendance temporaire en cours).', regle: '📌 Fait permanent → simple. Tendance temporaire → progressif.' },
              { id: 'dsp1-q9', enonce: '"She ___ (not/work) this week — she\'s on sick leave."', choices: ["doesn't work", "isn't working", "didn't work", "wasn't working"], answer: 1, explication: '✅ "isn\'t working" — Situation temporaire actuelle → présent progressif négatif.', regle: '📌 Situation temporaire actuelle → présent progressif.' },
              { id: 'dsp1-q10', enonce: '"I ___ what you mean." vs "I ___ you\'re right, but..."', choices: ['understand / think', 'am understanding / am thinking', 'understand / am thinking', 'am understanding / think'], answer: 0, explication: '✅ "understand" (stative) / "think" (opinion = stative). Les deux sont des stative verbs.', regle: '📌 "Understand" et "think" (=opinion) sont tous les deux statives → présent simple.' },
            ],
          },
          {
            id: 'diff-sp-exo2',
            titre: 'Exercice 2 — Passé simple vs passé progressif',
            instructions: 'Choisissez entre passé simple et passé progressif.',
            questions: [
              { id: 'dsp2-q1', enonce: '"I ___ a shower when the phone rang."', choices: ['had', 'was having', 'have had', 'am having'], answer: 1, explication: '✅ "was having" — Action en cours interrompue par le téléphone.', regle: '📌 "Was doing X when Y happened" = action interrompue.' },
              { id: 'dsp2-q2', enonce: '"She ___ her keys and ___ home." (séquence rapide)', choices: ['grabbed / left', 'was grabbing / was leaving', 'grabs / leaves', 'had grabbed / left'], answer: 0, explication: '✅ "grabbed / left" — Séquence d\'actions passées terminées → passés simples.', regle: '📌 Actions successives passées → passé simple pour chacune.' },
              { id: 'dsp2-q3', enonce: '"While she ___ the email, he ___ the presentation."', choices: ['wrote / prepared', 'was writing / was preparing', 'wrote / was preparing', 'was writing / prepared'], answer: 1, explication: '✅ "was writing / was preparing" — Deux actions simultanées avec "while".', regle: '📌 "While" + simultanéité passée → les deux au passé progressif.' },
              { id: 'dsp2-q4', enonce: '"When I ___ (arrive), she ___ (cry)."', choices: ['arrived / cried', 'arrived / was crying', 'was arriving / cried', 'was arriving / was crying'], answer: 1, explication: '✅ "arrived / was crying" — Événement soudain + action de fond.', regle: '📌 Événement soudain → passé simple. Action de fond → passé progressif.' },
              { id: 'dsp2-q5', enonce: '"He ___ the report every Monday." (habitude passée)', choices: ['submitted', 'was submitting', 'submit', 'has submitted'], answer: 0, explication: '✅ "submitted" — Habitude passée régulière → passé simple.', regle: '📌 Habitude passée → passé simple.' },
              { id: 'dsp2-q6', enonce: '"At 3pm yesterday, they ___ in a conference call."', choices: ['were', 'are', 'had', 'be'], answer: 0, explication: '✅ "were" — "At 3pm yesterday" = moment précis, état en cours → passé progressif de "be".', regle: '📌 "At [heure] yesterday" → passé progressif.' },
              { id: 'dsp2-q7', enonce: '"She ___ the contract and ___ it immediately." (séquence)', choices: ['signed / sent', 'was signing / was sending', 'signs / sends', 'had signed / sent'], answer: 0, explication: '✅ "signed / sent" — Actions rapides successives → passés simples.', regle: '📌 Actions successives rapides → passé simple.' },
              { id: 'dsp2-q8', enonce: '"What ___ you ___ at midnight?" (hier)', choices: ['did / do', 'were / doing', 'do / do', 'are / doing'], answer: 1, explication: '✅ "were / doing" — "At midnight" = moment précis passé, activité en cours.', regle: '📌 Question sur activité en cours à un moment du passé → passé progressif.' },
              { id: 'dsp2-q9', enonce: '"I ___ (read) while she ___ (cook) dinner."', choices: ['read / cooked', 'was reading / was cooking', 'was reading / cooked', 'read / was cooking'], answer: 1, explication: '✅ "was reading / was cooking" — "While" + deux activités simultanées.', regle: '📌 "While" + simultanéité → les deux au passé progressif.' },
              { id: 'dsp2-q10', enonce: '"The storm suddenly ___ while we ___ in the park."', choices: ['starts / walked', 'started / were walking', 'was starting / were walking', 'started / walked'], answer: 1, explication: '✅ "started / were walking" — Événement soudain + activité de fond.', regle: '📌 Événement soudain → passé simple. Activité de fond → passé progressif.' },
            ],
          },
          {
            id: 'diff-sp-exo3',
            titre: 'Exercice 3 — Futur simple vs futur progressif',
            instructions: 'Choisissez entre futur simple et futur progressif.',
            questions: [
              { id: 'dsp3-q1', enonce: '"This time next week, I ___ on the beach in Bali."', choices: ['sit', 'will sit', 'will be sitting', 'am sitting'], answer: 2, explication: '✅ "will be sitting" — "This time next week" = action en cours à un moment précis.', regle: '📌 "This time next [période]" → futur progressif.' },
              { id: 'dsp3-q2', enonce: '"I ___ you tomorrow — that\'s my promise."', choices: ['call', 'called', 'will call', 'will be calling'], answer: 2, explication: '✅ "will call" — Promesse → futur simple.', regle: '📌 Promesse → futur simple (will).' },
              { id: 'dsp3-q3', enonce: '"At 3pm tomorrow, she ___ in the boardroom."', choices: ['presents', 'presented', 'will present', 'will be presenting'], answer: 3, explication: '✅ "will be presenting" — "At 3pm tomorrow" = action en cours à un moment précis.', regle: '📌 "At [heure] tomorrow" → futur progressif.' },
              { id: 'dsp3-q4', enonce: '"I\'m sure the results ___ positive."', choices: ['are', 'were', 'will be', 'will be being'], answer: 2, explication: '✅ "will be" — Prédiction → futur simple. "Be" + prédiction → will be.', regle: '📌 Prédiction avec "I\'m sure" → futur simple.' },
              { id: 'dsp3-q5', enonce: '"Don\'t call me after 8pm — I ___ the kids to bed."', choices: ['put', 'will put', 'will be putting', 'am putting'], answer: 2, explication: '✅ "will be putting" — Action en cours à un moment précis du futur.', regle: '📌 Action en cours à un moment futur → futur progressif.' },
              { id: 'dsp3-q6', enonce: '"I ___ probably need your help later."', choices: ['need', 'needed', 'will need', 'will be needing'], answer: 2, explication: '✅ "will need" — Prédiction + "need" = stative → pas de progressif.', regle: '📌 "Need" = stative → jamais progressif. Prédiction → will.' },
              { id: 'dsp3-q7', enonce: '"She ___ in Paris next month for a conference." (activité de fond)', choices: ['stays', 'stayed', 'will stay', 'will be staying'], answer: 3, explication: '✅ "will be staying" — Activité continue pendant le mois prochain → futur progressif.', regle: '📌 Activité continue sur période future → futur progressif.' },
              { id: 'dsp3-q8', enonce: '"If she ___ harder, she ___ pass the exam."', choices: ['studies / will', 'will study / will', 'studies / would', 'is studying / will'], answer: 0, explication: '✅ "studies / will" — Conditionnel réel : if + présent simple → will + V base.', regle: '📌 If + présent simple → will + V base.' },
              { id: 'dsp3-q9', enonce: '"They ___ the new offices all of next week." (activité)', choices: ['test', 'tested', 'will test', 'will be testing'], answer: 3, explication: '✅ "will be testing" — Activité continue toute la semaine prochaine → futur progressif.', regle: '📌 Activité continue sur durée future → futur progressif.' },
              { id: 'dsp3-q10', enonce: '"The company ___ its 10th anniversary next year." (événement)', choices: ['celebrates', 'celebrated', 'will celebrate', 'will be celebrating'], answer: 2, explication: '✅ "will celebrate" — Événement ponctuel futur → futur simple.', regle: '📌 Événement ponctuel → futur simple. Activité en cours → futur progressif.' },
            ],
          },
          {
            id: 'diff-sp-exo4',
            titre: 'Exercice 4 — Cas mixtes et pièges',
            instructions: 'Exercices mêlant plusieurs temps et situations.',
            questions: [
              { id: 'dsp4-q1', enonce: '"She ___ (work) here since 2018." (toujours en cours)', choices: ['works', 'worked', 'is working', 'has been working'], answer: 3, explication: '✅ "has been working" — "Since" + durée jusqu\'au présent → présent parfait progressif.', regle: '📌 "Since" + durée continue → présent parfait progressif (pas présent simple).' },
              { id: 'dsp4-q2', enonce: '"By the time she ___ (arrive), I ___ (finish)."', choices: ['arrives / will finish', 'will arrive / will finish', 'arrives / will have finished', 'arrived / finished'], answer: 2, explication: '✅ "arrives / will have finished" — Subordonnée temporelle : présent simple. Principale : futur parfait.', regle: '📌 "By the time + présent simple" → futur parfait dans la principale.' },
              { id: 'dsp4-q3', enonce: '"Don\'t disturb me — I ___ (think) about it." vs "I ___ (think) we should leave."', choices: ['am thinking / think', 'think / am thinking', 'am thinking / am thinking', 'think / think'], answer: 0, explication: '✅ "am thinking" (réflexion active) / "think" (opinion = stative).', regle: '📌 "Think" actif → progressif. "Think" = opinion → simple.' },
              { id: 'dsp4-q4', enonce: '"She ___ (not/speak) to anyone since the meeting."', choices: ["didn't speak", "doesn't speak", "hasn't spoken", "isn't speaking"], answer: 2, explication: '✅ "hasn\'t spoken" — "Since" + état continu → présent parfait.', regle: '📌 "Since" + état qui continue → présent parfait.' },
              { id: 'dsp4-q5', enonce: '"He ___ (read) for an hour when his phone died."', choices: ['read', 'was reading', 'had been reading', 'has been reading'], answer: 2, explication: '✅ "had been reading" — Durée AVANT un événement passé → passé parfait progressif.', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'dsp4-q6', enonce: '"I ___ (work) every day — that\'s normal." vs "I ___ (work) a lot this week because of the deadline."', choices: ['work / am working', 'am working / work', 'work / work', 'am working / am working'], answer: 0, explication: '✅ "work" (habitude normale) / "am working" (plus intense que d\'habitude = temporaire).', regle: '📌 Habitude → simple. Plus intense que d\'habitude, temporaire → progressif.' },
              { id: 'dsp4-q7', enonce: '"When I called her, she said she ___ (leave) in five minutes."', choices: ['leaves', 'left', 'was leaving', 'had left'], answer: 2, explication: '✅ "was leaving" — Discours indirect, futur proche dans le passé → passé progressif.', regle: '📌 Futur proche dans le discours indirect passé → passé progressif.' },
              { id: 'dsp4-q8', enonce: '"She usually ___ (take) the bus but today she ___ (drive)."', choices: ['takes / is driving', 'is taking / drives', 'takes / drives', 'is taking / is driving'], answer: 0, explication: '✅ "takes" (habitude) / "is driving" (exception d\'aujourd\'hui).', regle: '📌 Habitude → simple. Exception du jour → progressif.' },
              { id: 'dsp4-q9', enonce: '"I ___ (know) her for ten years but I ___ (not/know) she was married."', choices: ["have known / didn't know", "knew / don't know", "know / didn't know", "have known / don't know"], answer: 0, explication: '✅ "have known" (durée jusqu\'au présent) / "didn\'t know" (ignorance passée, découverte récente).', regle: '📌 "Know" (durée jusqu\'au présent) → présent parfait. "Didn\'t know" → passé simple.' },
              { id: 'dsp4-q10', enonce: '"At this time next year, I ___ (sit) on a beach in Thailand."', choices: ['sit', 'will sit', 'will be sitting', 'am sitting'], answer: 2, explication: '✅ "will be sitting" — "At this time next year" → futur progressif.', regle: '📌 "At this time next [période]" → futur progressif.' },
            ],
          },
          {
            id: 'diff-sp-exo5',
            titre: 'Exercice 5 — Contexte TOEIC : phrases authentiques',
            instructions: 'Phrases de style Part 5 TOEIC. Choisissez la forme verbale correcte.',
            questions: [
              { id: 'dsp5-q1', enonce: '"The annual report ___ every March by the finance team."', choices: ['publishes', 'is published', 'is publishing', 'published'], answer: 1, explication: '✅ "is published" — Routine + voix passive → présent simple passif.', regle: '📌 Routine/habitude au passif → is/are + V-pp.' },
              { id: 'dsp5-q2', enonce: '"Sales ___ steadily since the new product launch."', choices: ['increase', 'increased', 'are increasing', 'have been increasing'], answer: 3, explication: '✅ "have been increasing" — "Since" + tendance continue → présent parfait progressif.', regle: '📌 "Since" + tendance continue → présent parfait progressif.' },
              { id: 'dsp5-q3', enonce: '"By the time the CEO ___ the room, the presentation had started."', choices: ['entered', 'enters', 'has entered', 'was entering'], answer: 0, explication: '✅ "entered" — "By the time + passé simple" + passé parfait → passé simple ici.', regle: '📌 "By the time + passé simple, had + V-pp."' },
              { id: 'dsp5-q4', enonce: '"Please don\'t disturb Ms. Chen — she ___ an important call."', choices: ['takes', 'took', 'is taking', 'was taking'], answer: 2, explication: '✅ "is taking" — Action en cours maintenant → présent progressif.', regle: '📌 Action en cours maintenant → présent progressif.' },
              { id: 'dsp5-q5', enonce: '"The client ___ the building when the fire alarm went off."', choices: ['enters', 'entered', 'was entering', 'has entered'], answer: 2, explication: '✅ "was entering" — En train d\'entrer (action de fond) quand l\'alarme a sonné.', regle: '📌 Action de fond interrompue → passé progressif.' },
              { id: 'dsp5-q6', enonce: '"This time next month, the team ___ the new software."', choices: ['tests', 'tested', 'will test', 'will be testing'], answer: 3, explication: '✅ "will be testing" — "This time next month" → futur progressif.', regle: '📌 "This time next [période]" → futur progressif.' },
              { id: 'dsp5-q7', enonce: '"She ___ over 200 clients since joining the firm."', choices: ['serves', 'served', 'has served', 'was serving'], answer: 2, explication: '✅ "has served" — Bilan (over 200 clients) depuis qu\'elle a rejoint → présent parfait.', regle: '📌 Bilan depuis le passé jusqu\'au présent → présent parfait.' },
              { id: 'dsp5-q8', enonce: '"Mr. Kim ___ the company in 2010 after years of working for a competitor."', choices: ['joins', 'joined', 'has joined', 'was joining'], answer: 1, explication: '✅ "joined" — "In 2010" = date précise → passé simple.', regle: '📌 Date précise dans le passé → passé simple.' },
              { id: 'dsp5-q9', enonce: '"The marketing department ___ on three campaigns simultaneously right now."', choices: ['works', 'worked', 'is working', 'has worked'], answer: 2, explication: '✅ "is working" — "Right now" = en cours → présent progressif.', regle: '📌 "Right now" → présent progressif.' },
              { id: 'dsp5-q10', enonce: '"By the end of Q4, the project ___ over budget for six consecutive months."', choices: ['ran', 'has run', 'will have run', 'will be running'], answer: 2, explication: '✅ "will have run" — Bilan accompli avant fin Q4 → futur parfait.', regle: '📌 "By the end of [période future]" → futur parfait.' },
            ],
          },
        ],
      },
 
      // ══════════════════════════════════════════════════════════════════════
      // 6. DIFF : Parfait vs Parfait Progressif
      // ══════════════════════════════════════════════════════════════════════
      {
        id: 'diff-parfait-prog',
        label: '⚖️ Parfait vs Parfait Progressif',
        lecon: [
          {
            id: 'diff-pp-lecon',
            titre: 'Quand choisir Parfait ou Parfait Progressif ?',
            contenu: `PARFAIT = résultat, accomplissement, quantité. PARFAIT PROGRESSIF = durée, processus continu, traces visibles.`,
            tableaux: [
              {
                titre: 'Comparatif clé',
                colonnes: ['Critère', 'PARFAIT (have + V-pp)', 'PARFAIT PROGRESSIF (have been + V-ing)'],
                lignes: [
                  ['Insistance', 'Résultat, accomplissement', 'Durée, processus continu'],
                  ['Action', 'Souvent terminée', 'Peut être encore en cours'],
                  ['Quantité', '"3 reports" → parfait simple', '— (pas de quantité précise)'],
                  ['Traces', '"She has baked a cake."', '"She has been baking." (mains pleines de farine)'],
                  ['How many?', 'Parfait simple', '—'],
                  ['How long?', '—', 'Parfait progressif'],
                  ['Stative verbs', 'Toujours simple', 'Jamais progressif'],
                ],
              },
            ],
            astuce: `💡 Test : "Est-ce que je veux parler du résultat/accomplissement ?" → parfait simple. "Est-ce que je veux parler de la durée ?" → parfait progressif.
⚠️ "She has been finishing." → FAUX. "Finish" = résultat → "She has finished." ✅`,
          },
        ],
        exercices: [
          {
            id: 'diff-pp-exo1',
            titre: 'Exercice 1 — Résultat vs Durée : présent',
            instructions: 'Choisissez entre présent parfait et présent parfait progressif.',
            questions: [
              { id: 'dpp1-q1', enonce: '"She ___ the report." (c\'est terminé, résultat)', choices: ['has been writing', 'has written', 'was writing', 'had been writing'], answer: 1, explication: '✅ "has written" — Résultat : le rapport est écrit → parfait simple.', regle: '📌 Résultat terminé → parfait simple.' },
              { id: 'dpp1-q2', enonce: '"She ___ all morning." (processus)', choices: ['has written', 'has been writing', 'wrote', 'was writing'], answer: 1, explication: '✅ "has been writing" — "All morning" = durée → parfait progressif.', regle: '📌 "All morning/day/week" = durée → parfait progressif.' },
              { id: 'dpp1-q3', enonce: '"Why are your hands dirty? — I ___ (fix) my car."', choices: ['fixed', 'have fixed', 'have been fixing', 'was fixing'], answer: 2, explication: '✅ "have been fixing" — Mains sales = trace d\'activité prolongée récente.', regle: '📌 Traces d\'activité récente → parfait progressif.' },
              { id: 'dpp1-q4', enonce: '"She ___ three reports today." (quantité)', choices: ['has been writing', 'has written', 'writes', 'was writing'], answer: 1, explication: '✅ "has written" — Quantité (3 reports) → parfait simple.', regle: '📌 Quantité précise → parfait simple.' },
              { id: 'dpp1-q5', enonce: '"I\'m exhausted. I ___ (run) for two hours."', choices: ['ran', 'have run', 'have been running', 'was running'], answer: 2, explication: '✅ "have been running" — Fatigue = résultat d\'activité prolongée.', regle: '📌 Trace visible d\'activité prolongée → parfait progressif.' },
              { id: 'dpp1-q6', enonce: '"How long ___ you ___ for this company?" (durée)', choices: ['have / worked', 'have / been working', 'did / work', 'are / working'], answer: 1, explication: '✅ "have / been working" — "How long" = durée → parfait progressif.', regle: '📌 "How long" → présent parfait progressif.' },
              { id: 'dpp1-q7', enonce: '"How many books ___ you ___ this year?" (quantité)', choices: ['have / been reading', 'have / read', 'did / read', 'are / reading'], answer: 1, explication: '✅ "have / read" — "How many" = quantité → parfait simple.', regle: '📌 "How many" → parfait simple.' },
              { id: 'dpp1-q8', enonce: '"He ___ (know) her since 2010."', choices: ['has been knowing', 'has known', 'knew', 'knows'], answer: 1, explication: '✅ "has known" — "Know" = stative → jamais progressif.', regle: '📌 Stative verb + durée → parfait simple.' },
              { id: 'dpp1-q9', enonce: '"The children ___ all afternoon. They\'re very dirty."', choices: ['played', 'have played', 'have been playing', 'were playing'], answer: 2, explication: '✅ "have been playing" — "All afternoon" + traces → parfait progressif.', regle: '📌 Durée + traces → parfait progressif.' },
              { id: 'dpp1-q10', enonce: '"I ___ (finish) the project!" (annonce)', choices: ['have been finishing', 'have finished', 'am finishing', 'was finishing'], answer: 1, explication: '✅ "have finished" — Annonce d\'accomplissement → parfait simple. "Finish" = résultat.', regle: '📌 Verbe de résultat (finish, arrive, complete...) → parfait simple.' },
            ],
          },
          {
            id: 'diff-pp-exo2',
            titre: 'Exercice 2 — Passé : had + V-pp vs had been + V-ing',
            instructions: 'Choisissez entre passé parfait et passé parfait progressif.',
            questions: [
              { id: 'dpp2-q1', enonce: '"When the guests arrived, she ___ three cakes." (quantité accomplie)', choices: ['had been baking', 'had baked', 'baked', 'was baking'], answer: 1, explication: '✅ "had baked" — Quantité (3 cakes) accomplie avant → passé parfait simple.', regle: '📌 Quantité accomplie avant moment passé → passé parfait simple.' },
              { id: 'dpp2-q2', enonce: '"She was exhausted — she ___ all day." (durée)', choices: ['worked', 'had worked', 'had been working', 'was working'], answer: 2, explication: '✅ "had been working" — Durée (all day) avant son état → passé parfait progressif.', regle: '📌 Durée avant moment passé → passé parfait progressif.' },
              { id: 'dpp2-q3', enonce: '"His eyes were red because he ___ (cry) for hours."', choices: ['cried', 'had cried', 'had been crying', 'was crying'], answer: 2, explication: '✅ "had been crying" — Traces (yeux rouges) + durée → passé parfait progressif.', regle: '📌 Traces + durée → passé parfait progressif.' },
              { id: 'dpp2-q4', enonce: '"She found out she ___ for the wrong company for six months."', choices: ['worked', 'had worked', 'had been working', 'was working'], answer: 2, explication: '✅ "had been working" — Durée (six months) d\'activité continue avant la découverte.', regle: '📌 Durée continue avant découverte → passé parfait progressif.' },
              { id: 'dpp2-q5', enonce: '"By the time they found shelter, they ___ in the rain for two hours."', choices: ['walked', 'had walked', 'had been walking', 'were walking'], answer: 2, explication: '✅ "had been walking" — Durée (two hours) avant de trouver un abri.', regle: '📌 Durée avant "by the time [passé]" → passé parfait progressif.' },
              { id: 'dpp2-q6', enonce: '"When police arrived, the suspect ___." (résultat, déjà parti)', choices: ['escaped', 'had escaped', 'had been escaping', 'was escaping'], answer: 1, explication: '✅ "had escaped" — Résultat accompli avant l\'arrivée → passé parfait simple.', regle: '📌 Résultat accompli avant moment passé → passé parfait simple.' },
              { id: 'dpp2-q7', enonce: '"The floor was wet — it ___ (rain) all morning."', choices: ['rained', 'had rained', 'had been raining', 'was raining'], answer: 2, explication: '✅ "had been raining" — Durée (all morning) + trace (sol mouillé).', regle: '📌 Durée + traces au passé → passé parfait progressif.' },
              { id: 'dpp2-q8', enonce: '"She was nervous because she ___ (never/present) in front of such an audience."', choices: ['never presented', 'had never presented', 'had never been presenting', 'never presents'], answer: 1, explication: '✅ "had never presented" — "Never" + expérience jusqu\'à ce moment passé → passé parfait simple.', regle: '📌 "Never" + expérience avant moment passé → passé parfait simple.' },
              { id: 'dpp2-q9', enonce: '"How long ___ they ___ before the deal closed?"', choices: ['did / negotiate', 'were / negotiating', 'had / been negotiating', 'have / been negotiating'], answer: 2, explication: '✅ "had / been negotiating" — "How long" + durée avant événement passé.', regle: '📌 "How long had they been...?" = durée avant moment passé.' },
              { id: 'dpp2-q10', enonce: '"He couldn\'t enter the meeting because he ___ his badge."', choices: ['lost', 'had lost', 'had been losing', 'was losing'], answer: 1, explication: '✅ "had lost" — Résultat accompli (perte du badge) avant l\'impossibilité → passé parfait simple.', regle: '📌 Résultat avant conséquence passée → passé parfait simple.' },
            ],
          },
          {
            id: 'diff-pp-exo3',
            titre: 'Exercice 3 — Futur : will have vs will have been',
            instructions: 'Choisissez entre futur parfait simple et futur parfait progressif.',
            questions: [
              { id: 'dpp3-q1', enonce: '"By Friday, she ___ the report." (accompli)', choices: ['will finish', 'will have finished', 'will be finishing', 'will have been finishing'], answer: 1, explication: '✅ "will have finished" — Accomplissement avant vendredi → futur parfait simple.', regle: '📌 Accomplissement avant point futur → futur parfait simple.' },
              { id: 'dpp3-q2', enonce: '"By Friday, she ___ (work) on it for a week." (durée)', choices: ['will work', 'will have worked', 'will have been working', 'will be working'], answer: 2, explication: '✅ "will have been working" — Durée (a week) jusqu\'à vendredi.', regle: '📌 Durée jusqu\'à point futur → futur parfait progressif.' },
              { id: 'dpp3-q3', enonce: '"By next year, they ___ two new offices." (nombre)', choices: ['open', 'will open', 'will have opened', 'will have been opening'], answer: 2, explication: '✅ "will have opened" — Nombre (2) + accompli avant → futur parfait simple.', regle: '📌 Quantité accomplie → futur parfait simple.' },
              { id: 'dpp3-q4', enonce: '"By next year, she ___ (teach) for 30 years." (durée)', choices: ['teaches', 'will teach', 'will have taught', 'will have been teaching'], answer: 3, explication: '✅ "will have been teaching" — Durée (30 ans) jusqu\'à l\'an prochain.', regle: '📌 Durée + point futur → futur parfait progressif.' },
              { id: 'dpp3-q5', enonce: 'Laquelle est INCORRECTE ?', choices: ['By Monday, she will have finished the analysis.', 'By 2035, he will have been working here for 20 years.', 'By next week, I will have been completing the course.', 'By tonight, they will have signed the contract.'], answer: 2, explication: '✅ "will have been completing" est FAUX. "Complete" = résultat → "I will have completed the course."', regle: '📌 Verbes de résultat (complete, finish, open...) → futur parfait simple.' },
              { id: 'dpp3-q6', enonce: '"In 2040, renewables ___ (provide) clean energy for 20 years."', choices: ['provide', 'will provide', 'will have provided', 'will have been providing'], answer: 3, explication: '✅ "will have been providing" — Durée continue (20 ans) jusqu\'à 2040.', regle: '📌 Durée continue jusqu\'à point futur → futur parfait progressif.' },
              { id: 'dpp3-q7', enonce: '"He ___ (know) her for 20 years by the time they retire."', choices: ['will know', 'will have known', 'will have been knowing', 'will be knowing'], answer: 1, explication: '✅ "will have known" — "Know" = stative → jamais progressif. Durée + stative → futur parfait simple.', regle: '📌 Stative verb + durée → futur parfait simple.' },
              { id: 'dpp3-q8', enonce: '"How many clients ___ they ___ by end of quarter?"', choices: ['will / serve', 'will / have served', 'will / have been serving', 'will / be serving'], answer: 1, explication: '✅ "will / have served" — "How many" = quantité → futur parfait simple.', regle: '📌 "How many" futur → futur parfait simple.' },
              { id: 'dpp3-q9', enonce: '"How long ___ she ___ on this by December?"', choices: ['will / work', 'will / have worked', 'will / have been working', 'will / be working'], answer: 2, explication: '✅ "will / have been working" — "How long" → futur parfait progressif.', regle: '📌 "How long" + point futur → futur parfait progressif.' },
              { id: 'dpp3-q10', enonce: '"By the time she retires, she ___ over 10,000 students." (nombre)', choices: ['teaches', 'will teach', 'will have taught', 'will have been teaching'], answer: 2, explication: '✅ "will have taught" — Quantité (10,000) accomplie → futur parfait simple.', regle: '📌 Quantité accomplie avant point futur → futur parfait simple.' },
            ],
          },
          {
            id: 'diff-pp-exo4',
            titre: 'Exercice 4 — Contexte mixte : choisir le bon parfait',
            instructions: 'Phrases plus complexes mélangeant les 6 temps parfaits.',
            questions: [
              { id: 'dpp4-q1', enonce: '"The CEO announced that profits ___ by 20% that year."', choices: ['increase', 'increased', 'had increased', 'have increased'], answer: 2, explication: '✅ "had increased" — Discours indirect + résultat avant le passé → passé parfait simple.', regle: '📌 Discours indirect passé + résultat → passé parfait simple.' },
              { id: 'dpp4-q2', enonce: '"She ___ (negotiate) all afternoon when she finally got an agreement."', choices: ['negotiated', 'was negotiating', 'had been negotiating', 'has been negotiating'], answer: 2, explication: '✅ "had been negotiating" — Durée (all afternoon) avant l\'accord (passé).', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'dpp4-q3', enonce: '"By the time the audit starts, we ___ all records."', choices: ['review', 'have reviewed', 'will have reviewed', 'will have been reviewing'], answer: 2, explication: '✅ "will have reviewed" — Travail accompli avant l\'audit (futur) → futur parfait simple.', regle: '📌 Travail accompli avant point futur → futur parfait simple.' },
              { id: 'dpp4-q4', enonce: '"I ___ (try) to reach you for days — please call back!"', choices: ['tried', 'have tried', 'have been trying', 'was trying'], answer: 2, explication: '✅ "have been trying" — Durée (for days) + frustration actuelle → présent parfait progressif.', regle: '📌 Durée + état actuel → présent parfait progressif.' },
              { id: 'dpp4-q5', enonce: '"She ___ 15 countries before she turned 30." (quantité, passé)', choices: ['visits', 'has visited', 'had visited', 'was visiting'], answer: 2, explication: '✅ "had visited" — Quantité accomplie avant ses 30 ans → passé parfait simple.', regle: '📌 Quantité accomplie avant moment passé → passé parfait simple.' },
              { id: 'dpp4-q6', enonce: '"Next decade, this company ___ (exist) for a century."', choices: ['exists', 'will exist', 'will have existed', 'will have been existing'], answer: 2, explication: '✅ "will have existed" — "Exist" = stative-like → parfait simple. Durée jusqu\'à point futur.', regle: '📌 Stative verbs + durée future → futur parfait simple.' },
              { id: 'dpp4-q7', enonce: '"She looks like she ___ (cry) — her eyes are red and puffy."', choices: ['cried', 'has cried', 'has been crying', 'was crying'], answer: 2, explication: '✅ "has been crying" — Traces visibles (yeux rouges) d\'activité récente prolongée.', regle: '📌 Traces d\'activité récente prolongée → présent parfait progressif.' },
              { id: 'dpp4-q8', enonce: '"___ you ___ (sleep) well recently?" (habitude/pattern récent)', choices: ['Did / sleep', 'Have / slept', 'Have / been sleeping', 'Were / sleeping'], answer: 2, explication: '✅ "Have / been sleeping" — "Recently" + pattern/habitude récente → parfait progressif.', regle: '📌 "Recently" + pattern continu → présent parfait progressif.' },
              { id: 'dpp4-q9', enonce: '"The company ___ (lose) money for three consecutive years before the turnaround."', choices: ['lost', 'had lost', 'had been losing', 'was losing'], answer: 2, explication: '✅ "had been losing" — Durée (3 years) continue avant le redressement (passé).', regle: '📌 Durée continue avant événement passé → passé parfait progressif.' },
              { id: 'dpp4-q10', enonce: '"By Q4, the marketing team ___ 50 campaigns this year." (bilan futur)', choices: ['launched', 'will launch', 'will have launched', 'will have been launching'], answer: 2, explication: '✅ "will have launched" — Quantité (50 campaigns) accomplie avant fin Q4.', regle: '📌 Quantité accomplie avant point futur → futur parfait simple.' },
            ],
          },
          {
            id: 'diff-pp-exo5',
            titre: 'Exercice 5 — Les 6 parfaits : récapitulatif',
            instructions: 'Exercice final couvrant tous les temps parfaits et leur distinction.',
            questions: [
              { id: 'dpp5-q1', enonce: '"I ___ this song before — what\'s it called?"', choices: ['heard', 'have heard', 'had heard', 'will have heard'], answer: 1, explication: '✅ "have heard" — Expérience sans moment précis → présent parfait simple.', regle: '📌 Expérience sans moment précis → présent parfait simple.' },
              { id: 'dpp5-q2', enonce: '"She ___ (paint) for six hours straight — the mural is almost done."', choices: ['painted', 'has painted', 'has been painting', 'was painting'], answer: 2, explication: '✅ "has been painting" — Durée (six hours) + en cours ou venant de se terminer.', regle: '📌 Durée + activité récente → présent parfait progressif.' },
              { id: 'dpp5-q3', enonce: '"By the time we arrived, he ___ the whole cake." (résultat)', choices: ['ate', 'had eaten', 'had been eating', 'was eating'], answer: 1, explication: '✅ "had eaten" — Résultat (gâteau fini) avant notre arrivée → passé parfait simple.', regle: '📌 Résultat avant moment passé → passé parfait simple.' },
              { id: 'dpp5-q4', enonce: '"Before the solution was found, engineers ___ (test) different approaches for months."', choices: ['tested', 'had tested', 'had been testing', 'were testing'], answer: 2, explication: '✅ "had been testing" — Durée (months) avant la solution → passé parfait progressif.', regle: '📌 Durée avant événement passé → passé parfait progressif.' },
              { id: 'dpp5-q5', enonce: '"By the deadline, she ___ the full analysis." (accomplissement)', choices: ['completes', 'will complete', 'will have completed', 'will have been completing'], answer: 2, explication: '✅ "will have completed" — Accomplissement avant deadline (futur) → futur parfait simple.', regle: '📌 Accomplissement avant point futur → futur parfait simple.' },
              { id: 'dpp5-q6', enonce: '"By her retirement, she ___ (work) at this hospital for 40 years." (durée)', choices: ['works', 'will work', 'will have worked', 'will have been working'], answer: 3, explication: '✅ "will have been working" — Durée (40 ans) jusqu\'à la retraite.', regle: '📌 Durée jusqu\'à point futur → futur parfait progressif.' },
              { id: 'dpp5-q7', enonce: '"The press release ___ already ___ before the CEO announced it publicly."', choices: ['has / leaked', 'had / leaked', 'had / been leaking', 'was / leaking'], answer: 1, explication: '✅ "had / leaked" — Résultat accompli avant l\'annonce (passé).', regle: '📌 Résultat accompli avant événement passé → passé parfait simple.' },
              { id: 'dpp5-q8', enonce: '"She ___ (live) in five different countries by the time she was 30."', choices: ['lived', 'has lived', 'had lived', 'had been living'], answer: 2, explication: '✅ "had lived" — Bilan (5 pays) accompli avant ses 30 ans → passé parfait simple.', regle: '📌 Bilan accompli avant moment passé → passé parfait simple.' },
              { id: 'dpp5-q9', enonce: '"I can\'t believe how long I ___ (wait) for this moment!"', choices: ['waited', 'have waited', 'have been waiting', 'was waiting'], answer: 2, explication: '✅ "have been waiting" — Durée de l\'attente jusqu\'à maintenant → présent parfait progressif.', regle: '📌 Durée jusqu\'au présent → présent parfait progressif.' },
              { id: 'dpp5-q10', enonce: '"By 2040, this organisation ___ (help) communities for over 50 years." (durée, futur)', choices: ['helps', 'will help', 'will have helped', 'will have been helping'], answer: 3, explication: '✅ "will have been helping" — Durée continue (50+ ans) jusqu\'à 2040 → futur parfait progressif.', regle: '📌 Durée continue jusqu\'à point futur → futur parfait progressif.' },
            ],
          },
        ],
      },
 
      // ══════════════════════════════════════════════════════════════════════
      // 7. PIÈGES TYPIQUES
      // ══════════════════════════════════════════════════════════════════════
      {
        id: 'pieges',
        label: '⚠️ Pièges typiques',
        lecon: [
          {
            id: 'pieges-lecon',
            titre: 'Les pièges les plus fréquents au TOEIC',
            contenu: `Ces erreurs reviennent constamment. Identifie-les pour éviter des points perdus.`,
            tableaux: [
              {
                titre: 'Pièges classiques',
                colonnes: ['❌ Erreur fréquente', '✅ Correction', 'Raison'],
                lignes: [
                  ['"I have seen him yesterday."', '"I saw him yesterday."', '"Yesterday" = moment précis → passé simple.'],
                  ['"She doesn\'t knows."', '"She doesn\'t know."', 'doesn\'t + V BASE (pas de -s).'],
                  ['"I am working here since 2019."', '"I have been working here since 2019."', '"Since" + durée jusqu\'au présent → présent parfait.'],
                  ['"When she will arrive, call me."', '"When she arrives, call me."', 'Subordonnée temporelle → présent simple.'],
                  ['"She is knowing."', '"She knows."', '"Know" = stative → jamais progressif.'],
                  ['"She has been finishing."', '"She has finished."', '"Finish" = résultat → parfait simple.'],
                  ['"I was working here since 2019."', '"I have been working here since 2019."', 'Action qui CONTINUE → présent parfait.'],
                  ['"By the time she arrives, he will leave."', '"...he will have left."', '"By the time" → futur parfait.'],
                ],
              },
            ],
            astuce: `💡 5 réflexes face à un choix de temps :
1. Marqueur temporel ? (yesterday, since, already, when...)
2. Action terminée ou en cours ?
3. Lien avec un autre moment ?
4. Verbe stative ? → jamais progressif
5. Résultat ou durée/processus ?`,
          },
        ],
        exercices: [
          {
            id: 'pieges-exo1',
            titre: 'Exercice 1 — Identifier et corriger les erreurs',
            instructions: 'Trouvez et corrigez l\'erreur dans chaque phrase.',
            questions: [
              { id: 'pie1-q1', enonce: '"She has visited her parents yesterday."', choices: ['"has visited" → "visited"', '"visited" → "has visited"', '"yesterday" → "since yesterday"', 'La phrase est correcte.'], answer: 0, explication: '✅ "visited" — "Yesterday" = moment précis → passé simple.', regle: '📌 "Yesterday" → passé simple. Jamais présent parfait.' },
              { id: 'pie1-q2', enonce: '"When the manager will arrive, please notify everyone."', choices: ['"will arrive" → "arrives"', '"notify" → "will notify"', '"please" → "kindly"', 'La phrase est correcte.'], answer: 0, explication: '✅ "arrives" — "When" = conjonction temporelle → présent simple.', regle: '📌 "When/if/as soon as/until" → présent simple pour le futur.' },
              { id: 'pie1-q3', enonce: '"He doesn\'t understands the instructions."', choices: ['"doesn\'t" → "don\'t"', '"understands" → "understand"', '"the" → "some"', 'La phrase est correcte.'], answer: 1, explication: '✅ "understand" — Avec doesn\'t, le verbe reste à la BASE.', regle: '📌 Doesn\'t + V BASE (jamais V + s).' },
              { id: 'pie1-q4', enonce: '"I am living here since 2020."', choices: ['"am living" → "live"', '"am living" → "have been living"', '"since" → "for"', 'La phrase est correcte.'], answer: 1, explication: '✅ "have been living" — "Since" + durée jusqu\'au présent → présent parfait progressif.', regle: '📌 "Since" + durée continue → présent parfait progressif.' },
              { id: 'pie1-q5', enonce: '"She is knowing the answer."', choices: ['"is knowing" → "knows"', '"knowing" → "known"', '"is" → "has"', 'La phrase est correcte.'], answer: 0, explication: '✅ "knows" — "Know" = stative → jamais progressif.', regle: '📌 Stative verbs → jamais progressif.' },
              { id: 'pie1-q6', enonce: '"By the time she arrives, he will leave."', choices: ['"arrives" → "will arrive"', '"will leave" → "will have left"', '"she" → "her"', 'La phrase est correcte.'], answer: 1, explication: '✅ "will have left" — "By the time" + futur → futur parfait.', regle: '📌 "By the time + présent simple" → futur parfait dans la principale.' },
              { id: 'pie1-q7', enonce: '"I have met him last year at the conference."', choices: ['"have met" → "met"', '"met" → "have met"', '"at" → "in"', 'La phrase est correcte.'], answer: 0, explication: '✅ "met" — "Last year" = moment précis → passé simple.', regle: '📌 "Last year" → passé simple.' },
              { id: 'pie1-q8', enonce: '"She has been finishing the project last week."', choices: ['"has been finishing" → "finished"', '"last week" → "this week"', '"the" → "a"', 'La phrase est correcte.'], answer: 0, explication: '✅ "finished" — "Last week" → passé simple. "Finish" = résultat → pas de progressif.', regle: '📌 "Last week" → passé simple. "Finish" = résultat → pas de progressif.' },
              { id: 'pie1-q9', enonce: '"We don\'t saw the presentation yet."', choices: ['"don\'t saw" → "didn\'t see"', '"don\'t saw" → "haven\'t seen"', '"yet" → "already"', 'La phrase est correcte.'], answer: 1, explication: '✅ "haven\'t seen" — "Yet" dans négation → présent parfait.', regle: '📌 "Yet" dans négation → haven\'t/hasn\'t + V-pp.' },
              { id: 'pie1-q10', enonce: '"She was working here since last April."', choices: ['"was working" → "has been working"', '"since" → "for"', '"working" → "worked"', 'La phrase est correcte.'], answer: 0, explication: '✅ "has been working" — Action qui CONTINUE jusqu\'au présent → présent parfait progressif.', regle: '📌 Action depuis le passé qui CONTINUE → présent parfait progressif.' },
            ],
          },
          {
            id: 'pieges-exo2',
            titre: 'Exercice 2 — Pièges avancés',
            instructions: 'Exercices sur les pièges les plus subtils.',
            questions: [
              { id: 'pie2-q1', enonce: '"She ___ for this company for ten years." (elle y travaille encore)', choices: ['works', 'worked', 'is working', 'has been working'], answer: 3, explication: '✅ "has been working" — Durée + toujours en cours → présent parfait progressif.', regle: '📌 Durée depuis le passé, toujours en cours → présent parfait progressif.' },
              { id: 'pie2-q2', enonce: 'Après "if" dans une condition réelle → ?', choices: ['If she will come, I tell her.', 'If she comes, I will tell her.', 'If she came, I will tell her.', 'If she will come, I will tell her.'], answer: 1, explication: '✅ "If she comes, I will tell her." — If + présent simple → will + V base.', regle: '📌 Conditionnel réel : If + présent simple, will + V base.' },
              { id: 'pie2-q3', enonce: '"I ___ (not/see) this film yet."', choices: ["didn't see", "don't see", "haven't seen", "wasn't seeing"], answer: 2, explication: '✅ "haven\'t seen" — "Yet" + négation → présent parfait.', regle: '📌 "Yet" dans une négation → présent parfait.' },
              { id: 'pie2-q4', enonce: '"The company ___ a new CEO two years ___."', choices: ['has appointed / ago', 'appointed / ago', 'appointed / since', 'has appointed / since'], answer: 1, explication: '✅ "appointed / ago" — "Two years ago" = passé précis → passé simple. "Ago" → jamais présent parfait.', regle: '📌 "Ago" → passé simple.' },
              { id: 'pie2-q5', enonce: '"She ___ (believe) in working hard." (conviction)', choices: ['is believing', 'believes', 'believed', 'has been believing'], answer: 1, explication: '✅ "believes" — "Believe" = stative → présent simple.', regle: '📌 "Believe" = stative → simple.' },
              { id: 'pie2-q6', enonce: '"As soon as she ___ (finish), let me know."', choices: ['will finish', 'finishes', 'finished', 'is finishing'], answer: 1, explication: '✅ "finishes" — "As soon as" = subordonnée temporelle → présent simple pour le futur.', regle: '📌 "As soon as/when/until/before/after" → présent simple pour le futur.' },
              { id: 'pie2-q7', enonce: '"___ you ever ___ to Japan?" (expérience)', choices: ['Did / go', 'Have / been', 'Did / been', 'Have / went'], answer: 1, explication: '✅ "Have / been" — "Have you ever been to...?" = formule standard.', regle: '📌 "Have you ever been to [lieu]?" = formule standard pour l\'expérience.' },
              { id: 'pie2-q8', enonce: '"I ___ (live) in Tokyo. It was great." (passé, fini)', choices: ['live', 'lived', 'have lived', 'was living'], answer: 1, explication: '✅ "lived" — Période passée et terminée ("it was great") → passé simple.', regle: '📌 Expérience passée terminée → passé simple.' },
              { id: 'pie2-q9', enonce: '"She ___ (want) to become a doctor since she was 8."', choices: ['wants', 'wanted', 'has wanted', 'has been wanting'], answer: 2, explication: '✅ "has wanted" — "Since she was 8" + désir continu. "Want" = stative → parfait simple.', regle: '📌 Stative verb + "since" + continue → présent parfait simple.' },
              { id: 'pie2-q10', enonce: '"By the time you ___ (read) this, I ___ (already/leave)."', choices: ['read / already left', 'will read / already leave', 'read / will have already left', 'will have read / left'], answer: 2, explication: '✅ "read / will have already left" — Subordonnée temporelle : présent simple. Principale : futur parfait.', regle: '📌 "By the time + présent simple" → futur parfait dans la principale.' },
            ],
          },
        ],
      },
    ],
 
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
