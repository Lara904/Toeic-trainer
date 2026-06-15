// ── REGISTRE STATIQUE (aucun JSON chargé au démarrage) ────────────────────
const TRAINING_PATHS = {
  'test-blanc':    () => import('./training/test-blanc.json'),
  'train-p1-001':  () => import('./training/train-p1-001.json'),
  'train-p1-002':  () => import('./training/train-p1-002.json'),
  'train-p1-003':  () => import('./training/train-p1-003.json'),
  'train-p2-001':  () => import('./training/train-p2-001.json'),
  'train-p2-002':  () => import('./training/train-p2-002.json'),
  'train-p2-003':  () => import('./training/train-p2-003.json'),
  'train-p2-004':  () => import('./training/train-p2-004.json'),
  'train-p2-005':  () => import('./training/train-p2-005.json'),
  'train-p3-001':  () => import('./training/train-p3-001.json'),
  'train-p3-002':  () => import('./training/train-p3-002.json'),
  'train-p3-003':  () => import('./training/train-p3-003.json'),
  'train-p4-001':  () => import('./training/train-p4-001.json'),
  'train-p4-002':  () => import('./training/train-p4-002.json'),
  'train-p4-003':  () => import('./training/train-p4-003.json'),
  'train-p4-004':  () => import('./training/train-p4-004.json'),
  'train-p5-001':  () => import('./training/train-p5-001.json'),
  'train-p5-002':  () => import('./training/train-p5-002.json'),
  'train-p5-003':  () => import('./training/train-p5-003.json'),
  'train-p6-001':  () => import('./training/train-p6-001.json'),
  'train-p6-002':  () => import('./training/train-p6-002.json'),
  'train-p6-003':  () => import('./training/train-p6-003.json'),
  'train-p7-001':  () => import('./training/train-p7-001.json'),
  'train-p7-002':  () => import('./training/train-p7-002.json'),
  'train-p7-003':  () => import('./training/train-p7-003.json'),
  'train-p8-001':  () => import('./training/train-p8-001.json'),
  'train-p8-002':  () => import('./training/train-p8-002.json'),
  'train-p8-003':  () => import('./training/train-p8-003.json'),
};

// Catalogue statique pour l'accueil (métadonnées seulement, pas le contenu)
export const TRAINING_CATALOG = {
  1: [
    { id: 'train-p1-001', title: 'Entraînement 1 : scènes de bureau',                    items: 10, skill: 'listening' },
    { id: 'train-p1-002', title: 'Entraînement 2 : transport & lieux professionnels',     items: 10, skill: 'listening' },
    { id: 'train-p1-003', title: 'Entraînement 3 : santé, restauration & vie quotidienne', items: 10, skill: 'listening' },
  ],
  2: [
    { id: 'train-p2-001', title: 'Entraînement 1 : questions What / Where / Who',  items: 10, skill: 'listening' },
    { id: 'train-p2-002', title: 'Entraînement 2 : questions When / How / How long', items: 10, skill: 'listening' },
    { id: 'train-p2-003', title: 'Entraînement 3 : questions oui/non et invitations', items: 10, skill: 'listening' },
    { id: 'train-p2-004', title: 'Entraînement 4 : questions Why / Which + pièges',  items: 10, skill: 'listening' },
    { id: 'train-p2-005', title: 'Entraînement 5 : mix de types de questions',        items: 10, skill: 'listening' },
  ],
  3: [
    { id: 'train-p3-001', title: 'Entraînement 1 : conversations RH & entreprise',            items: 10, skill: 'listening' },
    { id: 'train-p3-002', title: 'Entraînement 2 : conversations finance, tech & transport',  items: 10, skill: 'listening' },
    { id: 'train-p3-003', title: 'Entraînement 3 : conversations divertissement & santé',     items: 10, skill: 'listening' },
  ],
  4: [
    { id: 'train-p4-001', title: 'Entraînement 1 : exposés RH & entreprise',               items: 10, skill: 'listening' },
    { id: 'train-p4-002', title: 'Entraînement 2 : exposés finance & budget',               items: 10, skill: 'listening' },
    { id: 'train-p4-003', title: 'Entraînement 3 : exposés communication & technologies',  items: 10, skill: 'listening' },
    { id: 'train-p4-004', title: 'Entraînement 4 : exposés transport, divertissement & santé', items: 10, skill: 'listening' },
  ],
  5: [
    { id: 'train-p5-001', title: 'Entraînement 1 : temps verbaux & voix passive',   items: 10, skill: 'reading' },
    { id: 'train-p5-002', title: 'Entraînement 2 : prépositions & conjonctions',    items: 10, skill: 'reading' },
    { id: 'train-p5-003', title: 'Entraînement 3 : vocabulaire & structure',         items: 10, skill: 'reading' },
  ],
  6: [
    { id: 'train-p6-001', title: 'Entraînement 1 : e-mails professionnels',      items: 10, skill: 'reading' },
    { id: 'train-p6-002', title: 'Entraînement 2 : notes de service & annonces', items: 10, skill: 'reading' },
    { id: 'train-p6-003', title: 'Entraînement 3 : rapports & documents formels', items: 10, skill: 'reading' },
  ],
  7: [
    { id: 'train-p7-001', title: 'Entraînement 1 : e-mails & annonces',           items: 10, skill: 'reading' },
    { id: 'train-p7-002', title: 'Entraînement 2 : rapports, politiques & contrats', items: 10, skill: 'reading' },
    { id: 'train-p7-003', title: 'Entraînement 3 : publicités, avis & divers',   items: 10, skill: 'reading' },
  ],
  8: [
    { id: 'train-p8-001', title: 'Entraînement 1 : RH & entreprise',            items: 3, skill: 'reading' },
    { id: 'train-p8-002', title: 'Entraînement 2 : finance & transport',         items: 3, skill: 'reading' },
    { id: 'train-p8-003', title: 'Entraînement 3 : communication, santé & divertissement', items: 3, skill: 'reading' },
  ],
};

/** Charge un exercice d'entraînement par son id */
export const loadTrainingById = (id) => {
  const loader = TRAINING_PATHS[id];
  if (!loader) return Promise.resolve(null);
  return loader().then((m) => m.default ?? m);
};

/** Charge le test blanc (structure légère, les drills sont chargés séparément) */
export const loadTestBlanc = () => loadTrainingById('test-blanc');