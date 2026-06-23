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
    lecon: [
      {
        id: 'conj-simples',
        titre: '① Les temps SIMPLES',
        contenu: `Les temps simples expriment des faits bruts, des habitudes ou des vérités générales. Ils se forment sans auxiliaire "be".`,
        tableaux: [
          {
            titre: '3 temps simples',
            colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
            lignes: [
              ['Présent simple', 'Sujet + V (+ s)', 'Habitude, vérité générale, routine', 'I play tennis every Sunday.'],
              ['Passé simple', 'Sujet + V-ed / V irrégulier', 'Action terminée dans le passé', 'Yesterday, she called me.'],
              ['Futur simple', 'Sujet + will + V', 'Prédiction, décision spontanée', 'I will help you tomorrow.'],
            ],
          },
        ],
        astuce: `💡 Marqueurs temporels clés :
• Présent simple → every day / always / never / usually
• Passé simple → yesterday / last week / in 2020 / ago
• Futur simple → tomorrow / next week / soon / in the future`,
      },
      {
        id: 'conj-progressifs',
        titre: '② Les temps PROGRESSIFS (continus)',
        contenu: `Les temps progressifs décrivent une action EN TRAIN DE SE DÉROULER à un moment précis. Ils se forment avec BE + verbe en -ING.`,
        tableaux: [
          {
            titre: '3 temps progressifs',
            colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
            lignes: [
              ['Présent progressif', 'am/is/are + V-ing', 'Action en cours maintenant', 'I am working right now.'],
              ['Passé progressif', 'was/were + V-ing', 'Action en cours à un moment du passé', 'She was sleeping when I arrived.'],
              ['Futur progressif', 'will be + V-ing', 'Action en cours à un moment futur', 'I will be travelling this time tomorrow.'],
            ],
          },
        ],
        astuce: `💡 Différence clé :
• "I played piano yesterday." → Action terminée (passé simple)
• "I was playing piano when she called." → Action interrompue (passé progressif)
⚠️ Certains verbes ne s'utilisent PAS au progressif : know, like, love, want, believe, understand.`,
      },
      {
        id: 'conj-parfaits',
        titre: '③ Les temps PARFAITS',
        contenu: `Les temps parfaits créent un LIEN entre deux moments. Ils se forment avec HAVE/HAS/HAD + participe passé. C'est souvent le point le plus difficile !`,
        tableaux: [
          {
            titre: '3 temps parfaits',
            colonnes: ['Temps', 'Formation', 'Usage principal', 'Exemple'],
            lignes: [
              ['Présent parfait', 'have/has + V-pp', 'Expérience de vie / résultat actuel / durée jusqu\'à maintenant', 'I have visited Paris three times.'],
              ['Passé parfait', 'had + V-pp', 'Action terminée AVANT une autre action passée', 'When I arrived, she had already left.'],
              ['Futur parfait', 'will have + V-pp', 'Action terminée AVANT un moment futur', 'By 2030, I will have graduated.'],
            ],
          },
        ],
        astuce: `💡 La règle d'or du présent parfait vs passé simple :
• ❌ "I have seen this film yesterday." → FAUX ! "Yesterday" indique un moment précis du passé.
• ✅ "I saw this film yesterday." → Passé simple (moment précis)
• ✅ "I have seen this film before." → Présent parfait (expérience, pas de moment précis)

Marqueurs du présent parfait : already, yet, just, ever, never, since, for, recently.`,
      },
      {
        id: 'conj-parfaits-prog',
        titre: '④ Les temps PARFAITS PROGRESSIFS',
        contenu: `Ces temps combinent la durée (progressif) et le lien avec un autre moment (parfait). Ils insistent sur la DURÉE d'une action.`,
        tableaux: [
          {
            titre: '3 temps parfaits progressifs',
            colonnes: ['Temps', 'Formation', 'Usage', 'Exemple'],
            lignes: [
              ['Présent parfait progressif', 'have/has been + V-ing', 'Action commencée dans le passé, qui continue OU vient de se terminer', 'I have been working here for 5 years.'],
              ['Passé parfait progressif', 'had been + V-ing', 'Action en cours AVANT un moment du passé', 'She had been waiting for 2 hours when he arrived.'],
              ['Futur parfait progressif', 'will have been + V-ing', 'Durée d\'une action jusqu\'à un moment futur', 'By June, I will have been learning English for 3 years.'],
            ],
          },
        ],
        astuce: `💡 Présent parfait vs Présent parfait progressif :
• "I have read this book." → Je l'ai lu (l'action est terminée, le résultat compte)
• "I have been reading this book all day." → Je l'ai lu pendant longtemps (la durée compte)

Mots-clés : for (pendant), since (depuis), all day/week/year, how long.`,
      },
    ],
    questions: [
      {
        id: 'conj-q1',
        enonce: 'Choisissez le bon temps : "When I ___ (arrive) at the office, the meeting ___ (already / start)."',
        choices: [
          'arrived / already started',
          'arrived / had already started',
          'have arrived / already started',
          'was arriving / already started',
        ],
        answer: 1,
        explication: '✅ Correct : "When I arrived, the meeting had already started." Le passé simple (arrived) décrit l\'arrivée. Le passé parfait (had started) montre que la réunion a commencé AVANT l\'arrivée. Deux actions passées → la plus ancienne = passé parfait.',
        regle: '📌 Règle : Quand deux actions passées sont mentionnées ensemble, la plus ancienne prend le passé parfait (had + V-pp) et la plus récente prend le passé simple.',
      },
      {
        id: 'conj-q2',
        enonce: '"I ___ (work) in this company for 10 years."  -  Choisissez le bon temps.',
        choices: [
          'worked',
          'was working',
          'have been working',
          'had worked',
        ],
        answer: 2,
        explication: '✅ Correct : "I have been working in this company for 10 years." L\'action a commencé dans le passé et CONTINUE encore. On utilise le présent parfait progressif + "for" pour exprimer la durée.',
        regle: '📌 Règle : Pour une action qui a commencé dans le passé et continue jusqu\'au présent, on utilise have/has been + V-ing (présent parfait progressif). Marqueur clé : "for" (durée) ou "since" (point de départ).',
      },
      {
        id: 'conj-q3',
        enonce: 'Lequel de ces marqueurs temporels NE PEUT PAS accompagner le présent parfait ?',
        choices: [
          'already',
          'yesterday',
          'just',
          'yet',
        ],
        answer: 1,
        explication: '✅ Correct : "Yesterday" ne peut PAS accompagner le présent parfait. "Yesterday" désigne un moment précis et terminé du passé → il faut le passé simple. Ex : "I saw him yesterday." (PAS "I have seen him yesterday.")',
        regle: '📌 Règle : Le présent parfait (have/has + pp) n\'est JAMAIS utilisé avec des marqueurs de temps passé précis (yesterday, last week, in 2020, ago, at 3pm...). Ces marqueurs exigent le passé simple.',
      },
      {
        id: 'conj-q4',
        enonce: '"Look! The floor is wet. Someone ___ (spill) the coffee."',
        choices: [
          'spilled',
          'was spilling',
          'has spilled',
          'had spilled',
        ],
        answer: 2,
        explication: '✅ Correct : "Someone has spilled the coffee." Le résultat (le sol mouillé) est visible MAINTENANT. Le présent parfait est utilisé pour une action passée dont le résultat est présent et visible.',
        regle: '📌 Règle : Le présent parfait (have/has + pp) s\'utilise quand une action passée a un RÉSULTAT VISIBLE dans le présent. Aucun moment précis n\'est donné, on constate l\'effet maintenant.',
      },
      {
        id: 'conj-q5',
        enonce: '"By the time you arrive, I ___ (cook) dinner."',
        choices: [
          'will cook',
          'will have cooked',
          'will be cooking',
          'cooked',
        ],
        answer: 1,
        explication: '✅ Correct : "I will have cooked dinner." L\'expression "By the time" + futur indique que l\'action sera terminée AVANT un moment futur → futur parfait (will have + pp).',
        regle: '📌 Règle : Le futur parfait (will have + pp) exprime une action qui sera TERMINÉE avant un moment précis du futur. Marqueurs clés : "by the time", "by [date]", "before [event]".',
      },
      {
        id: 'conj-q6',
        enonce: 'Quelle phrase décrit correctement une action interrompue dans le passé ?',
        choices: [
          'I read when she called.',
          'I was reading when she called.',
          'I have read when she called.',
          'I had read when she called.',
        ],
        answer: 1,
        explication: '✅ Correct : "I was reading when she called." Le passé progressif (was/were + V-ing) décrit une action en cours qui a été interrompue par une autre action (passé simple : "she called").',
        regle: '📌 Règle : Passé progressif + "when" + passé simple = action longue interrompue par une action courte. Structure classique : "I was doing X when Y happened."',
      },
    ],
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
