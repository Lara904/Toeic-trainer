// Catalogue statique (métadonnées uniquement, pas le contenu des cartes)
export const VOCAB_CATALOG = [
  { id: 'vocab-business',       title: 'Entreprise & RH',              icon: '🏢', count: 20, description: 'Recrutement, contrats, départements' },
  { id: 'vocab-communication',  title: 'Communication & Technologies',  icon: '💬', count: 20, description: 'E-mails, réunions, outils numériques' },
  { id: 'vocab-finance',        title: 'Finance & Budget',              icon: '💰', count: 20, description: 'Comptabilité, investissements, facturation' },
  { id: 'vocab-transport',      title: 'Transport & Voyages',           icon: '✈️', count: 20, description: 'Déplacements professionnels, logistique' },
  { id: 'vocab-health',         title: 'Santé & Divertissement',        icon: '🏥', count: 20, description: 'Médecine, assurance, loisirs' },
  { id: 'vocab-irregulars',     title: 'Verbes irréguliers',            icon: '📖', count: 30, description: 'Les 30 verbes les plus fréquents au TOEIC' },
];

const VOCAB_PATHS = {
  'vocab-business':      () => import('./business.json'),
  'vocab-communication': () => import('./communication.json'),
  'vocab-finance':       () => import('./finance.json'),
  'vocab-transport':     () => import('./transport.json'),
  'vocab-health':        () => import('./health.json'),
  'vocab-irregulars':    () => import('./irregulars.json'),
};

export const loadDeckById = (id) => {
  const loader = VOCAB_PATHS[id];
  if (!loader) return Promise.resolve(null);
  return loader().then((m) => m.default ?? m);
};

