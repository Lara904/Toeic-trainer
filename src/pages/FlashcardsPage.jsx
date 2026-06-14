import { useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { VOCAB_DECKS, getDeckById } from '../data/vocab/vocabIndex';
import styles from './FlashcardsPage.module.css';

/* ── shuffle ─────────────────────────────────────────────────────────────── */
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

/* ── FlashCard ────────────────────────────────────────────────────────────── */
const FlashCard = ({ card, direction, onCorrect, onIncorrect }) => {
  const [flipped, setFlipped]     = useState(false);
  const [answered, setAnswered]   = useState(false);

  /* direction: 'en→fr' | 'fr→en' */
  const front = direction === 'en→fr' ? card.en : card.fr;
  const back  = direction === 'en→fr' ? card.fr : card.en;

  const handleFlip = () => { if (!answered) setFlipped(true); };

  const handleAnswer = (correct) => {
    setAnswered(true);
    setTimeout(() => { correct ? onCorrect() : onIncorrect(); }, 350);
  };

  return (
    <div className={styles.cardScene}>
      <div
        className={`${styles.cardBody} ${flipped ? styles.flipped : ''} ${answered ? styles.answered : ''}`}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
        aria-label={flipped ? 'Carte retournée' : 'Cliquer pour retourner'}
      >
        {/* face avant */}
        <div className={`${styles.face} ${styles.front}`}>
          <p className={styles.cardWord}>{front}</p>
          <p className={styles.cardHint}>Cliquer pour révéler</p>
        </div>

        {/* face arrière */}
        <div className={`${styles.face} ${styles.back}`}>
          <p className={styles.cardWord}>{back}</p>
          {card.example && (
            <p className={styles.cardExample}><em>{card.example}</em></p>
          )}
          {!answered && (
            <div className={styles.answerBtns}>
              <button
                type="button"
                className={styles.btnCorrect}
                onClick={(e) => { e.stopPropagation(); handleAnswer(true); }}
              >
                ✅ Je savais
              </button>
              <button
                type="button"
                className={styles.btnIncorrect}
                onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}
              >
                ❌ À revoir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── SessionResults ────────────────────────────────────────────────────────── */
const SessionResults = ({ correct, total, missed, onRestart, onRetryMissed, onExit }) => {
  const pct = Math.round((correct / total) * 100);
  return (
    <div className={styles.results}>
      <p className={styles.resultScore}>{correct} / {total}</p>
      <p className={styles.resultPct}>{pct}% de bonnes réponses</p>
      <p className={styles.resultMsg}>
        {pct === 100 ? '🏆 Parfait !' : pct >= 75 ? '👍 Bien joué !' : '💪 Continue !'}
      </p>
      <div className={styles.resultActions}>
        <button type="button" className={styles.btnPrimary} onClick={onRestart}>
          Recommencer ce deck
        </button>
        {missed.length > 0 && (
          <button type="button" className={styles.btnSecondary} onClick={onRetryMissed}>
            Revoir les {missed.length} carte(s) ratée(s)
          </button>
        )}
        <button type="button" className={styles.btnGhost} onClick={onExit}>
          ← Retour aux decks
        </button>
      </div>
    </div>
  );
};

/* ── DeckSession ────────────────────────────────────────────────────────────── */
const DeckSession = ({ deck, direction, onExit }) => {
  const [cards, setCards]       = useState(() => shuffle(deck.cards));
  const [idx, setIdx]           = useState(0);
  const [correct, setCorrect]   = useState(0);
  const [missed, setMissed]     = useState([]);
  const [done, setDone]         = useState(false);

  const advance = useCallback((wasCorrect) => {
    if (!wasCorrect) setMissed((m) => [...m, cards[idx]]);
    if (wasCorrect) setCorrect((c) => c + 1);
    const next = idx + 1;
    if (next >= cards.length) { setDone(true); return; }
    setIdx(next);
  }, [idx, cards]);

  const handleRestart = () => {
    setCards(shuffle(deck.cards));
    setIdx(0); setCorrect(0); setMissed([]); setDone(false);
  };

  const handleRetryMissed = () => {
    setCards(shuffle(missed));
    setIdx(0); setCorrect(0); setMissed([]); setDone(false);
  };

  if (done) {
    return (
      <SessionResults
        correct={correct}
        total={cards.length}
        missed={missed}
        onRestart={handleRestart}
        onRetryMissed={handleRetryMissed}
        onExit={onExit}
      />
    );
  }

  const progress = Math.round(((idx) / cards.length) * 100);

  return (
    <div className={styles.session}>
      <div className={styles.sessionHeader}>
        <span className={styles.sessionProgress}>
          {idx + 1} / {cards.length}
        </span>
        <span className={styles.sessionDir}>{direction}</span>
        <button type="button" className={styles.exitBtn} onClick={onExit}>✕</button>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <FlashCard
        key={`${idx}-${cards[idx].en}`}
        card={cards[idx]}
        direction={direction}
        onCorrect={() => advance(true)}
        onIncorrect={() => advance(false)}
      />
    </div>
  );
};

/* ── FlashcardsPage ─────────────────────────────────────────────────────────── */
const FlashcardsPage = () => {
  const { deckId }  = useParams();
  const navigate    = useNavigate();
  const deck        = getDeckById(deckId);

  const [direction, setDirection] = useState(null); // null = pas encore choisi

  /* liste des decks */
  if (!deckId) {
    return (
      <section>
        <h1 className={styles.pageTitle}>Flashcards Vocabulaire</h1>
        <p className={styles.pageDesc}>
          Retourne chaque carte et évalue toi-même si tu connaissais le mot.
          Les cartes que tu rates reviennent jusqu'à ce que tu les maîtrises.
        </p>
        <div className={styles.deckGrid}>
          {VOCAB_DECKS.map((d) => (
            <Link key={d.id} to={`/flashcards/${d.id}`} className={styles.deckCard}>
              <span className={styles.deckIcon}>{d.icon}</span>
              <span className={styles.deckTitle}>{d.title}</span>
              <span className={styles.deckCount}>{d.cards.length} cartes</span>
              <span className={styles.deckDesc}>{d.description}</span>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (!deck) {
    return (
      <section>
        <p>Deck introuvable.</p>
        <Link to="/flashcards">← Retour</Link>
      </section>
    );
  }

  /* choix du sens */
  if (!direction) {
    return (
      <section className={styles.directionPicker}>
        <button className={styles.backLink} type="button" onClick={() => navigate('/flashcards')}>
          ← Retour aux decks
        </button>
        <span className={styles.deckIcon2}>{deck.icon}</span>
        <h2>{deck.title}</h2>
        <p>{deck.cards.length} cartes · {deck.description}</p>
        <p className={styles.pickLabel}>Dans quel sens veux-tu t'entraîner ?</p>
        <div className={styles.dirBtns}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => setDirection('en→fr')}
          >
            🇬🇧 Anglais → 🇫🇷 Français
          </button>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => setDirection('fr→en')}
          >
            🇫🇷 Français → 🇬🇧 Anglais
          </button>
        </div>
      </section>
    );
  }

  return (
    <DeckSession
      deck={deck}
      direction={direction}
      onExit={() => { setDirection(null); navigate('/flashcards'); }}
    />
  );
};

export default FlashcardsPage;
