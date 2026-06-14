import business    from './business.json';
import communication from './communication.json';
import finance     from './finance.json';
import transport   from './transport.json';
import health      from './health.json';
import irregulars  from './irregulars.json';

export const VOCAB_DECKS = [
  business,
  communication,
  finance,
  transport,
  health,
  irregulars,
];

export const getDeckById = (id) => VOCAB_DECKS.find((d) => d.id === id);
