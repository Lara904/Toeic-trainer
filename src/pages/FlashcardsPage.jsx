import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VOCAB_CATALOG, loadDeckById } from '../data/vocab/vocabIndex';
import styles from './FlashcardsPage.module.css';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const FlashCard = ({ card, direction, onCorrect, onIncorrect }) => {
  const [flipped,  setFlipped]  = useState(false);
  const [answered, setAnswered] = useState(false);
  const front = direction === 'en→fr' ? card.en : card.fr;
  const back  = direction === 'en→fr' ? card.fr : card.en;
  const handleFlip = () => { if (!answered) setFlipped(true); };
  const handleAnswer = (ok) => {
    setAnswered(true);
    setTimeout(() => { ok ? onCorrect() : onIncorrect(); }, 350);
  };
  return (
    <div className={styles.cardScene}>
      <div
        className={`${styles.cardBody} ${flipped ? styles.flipped : ''} ${answered ? styles.answered : ''}`}
        onClick={handleFlip} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
        aria-label={flipped ? 'Carte retournée' : 'Cliquer pour révéler'}
      >
        <div className={`${styles.face} ${styles.front}`}>
          <p className={styles.cardWord}>{front}</p>
          <p className={styles.cardHint}>Cliquer pour révéler</p>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <p className={styles.cardWord}>{back}</p>
          {card.example && <p className={styles.cardExample}><em>{card.example}</em></p>}
          {!answered && (
            <div className={styles.answerBtns}>
              <button type="button" className={styles.btnCorrect}   onClick={(e) => { e.stopPropagation(); handleAnswer(true);  }}>✅ Je savais</button>
              <button type="button" className={styles.btnIncorrect} onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}>❌ À revoir</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SessionResults = ({ correct, total, missed, onRestart, onRetryMissed, onExit }) => {
  const pct = Math.round((correct / total) * 100);
  return (
    <div className={styles.results}>
      <p className={styles.resultScore}>{correct} / {total}</p>
      <p className={styles.resultPct}>{pct}%</p>
      <p className={styles.resultMsg}>{pct === 100 ? '🏆 Parfait !' : pct >= 75 ? '👍 Bien joué !' : '💪 Continue !'}</p>
      <div className={styles.resultActions}>
        <button type="button" className={styles.btnPrimary} onClick={onRestart}>Recommencer ce deck</button>
        {missed.length > 0 && <button type="button" className={styles.btnSecondary} onClick={onRetryMissed}>Revoir les {missed.length} carte(s) ratée(s)</button>}
        <button type="button" className={styles.btnGhost} onClick={onExit}>← Retour aux decks</button>
      </div>
    </div>
  );
};

const DeckSession = ({ deck, direction, onExit }) => {
  const [cards,   setCards]   = useState(() => shuffle(deck.cards));
  const [idx,     setIdx]     = useState(0);
  const [correct, setCorrect] = useState(0);
  const [missed,  setMissed]  = useState([]);
  const [done,    setDone]    = useState(false);
  const advance = useCallback((ok) => {
    if (!ok) setMissed((m) => [...m, cards[idx]]);
    if (ok)  setCorrect((c) => c + 1);
    if (idx + 1 >= cards.length) { setDone(true); return; }
    setIdx((i) => i + 1);
  }, [idx, cards]);
  const restart    = () => { setCards(shuffle(deck.cards)); setIdx(0); setCorrect(0); setMissed([]); setDone(false); };
  const retryMissed = () => { setCards(shuffle(missed)); setIdx(0); setCorrect(0); setMissed([]); setDone(false); };
  if (done) return <SessionResults correct={correct} total={cards.length} missed={missed} onRestart={restart} onRetryMissed={retryMissed} onExit={onExit} />;
  return (
    <div className={styles.session}>
      <div className={styles.sessionHeader}>
        <span className={styles.sessionProgress}>{idx + 1} / {cards.length}</span>
        <span className={styles.sessionDir}>{direction}</span>
        <button type="button" className={styles.exitBtn} onClick={onExit}>✕</button>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${Math.round((idx / cards.length) * 100)}%` }} />
      </div>
      <FlashCard key={`${idx}-${cards[idx].en}`} card={cards[idx]} direction={direction} onCorrect={() => advance(true)} onIncorrect={() => advance(false)} />
    </div>
  );
};

const FlashcardsPage = () => {
  const { deckId }  = useParams();
  const navigate    = useNavigate();
  const [deck,      setDeck]      = useState(null);
  const [loading,   setLoading]   = useState(false);
  const [direction, setDirection] = useState(null);
  const meta = VOCAB_CATALOG.find((d) => d.id === deckId);

  useEffect(() => {
    if (!deckId) return;
    setLoading(true);
    loadDeckById(deckId).then((d) => { setDeck(d); setLoading(false); });
  }, [deckId]);

  // Liste des decks
  if (!deckId) return (
    <section>
      <h1 className={styles.pageTitle}>Flashcards Vocabulaire</h1>
      <p className={styles.pageDesc}>Retourne chaque carte et évalue si tu connaissais le mot. Les cartes ratées reviennent jusqu'à maîtrise.</p>
      <div className={styles.deckGrid}>
        {VOCAB_CATALOG.map((d) => (
          <Link key={d.id} to={`/flashcards/${d.id}`} className={styles.deckCard}>
            <span className={styles.deckIcon}>{d.icon}</span>
            <span className={styles.deckTitle}>{d.title}</span>
            <span className={styles.deckCount}>{d.count} cartes</span>
            <span className={styles.deckDesc}>{d.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );

  if (loading) return <div style={{ textAlign:'center', padding:'3rem', color:'var(--color-text-muted)' }}>Chargement du deck…</div>;
  if (!deck)   return <section><p>Deck introuvable.</p><Link to="/flashcards">← Retour</Link></section>;

  if (!direction) return (
    <section className={styles.directionPicker}>
      <button className={styles.backLink} type="button" onClick={() => navigate('/flashcards')}>← Retour aux decks</button>
      <span className={styles.deckIcon2}>{meta?.icon}</span>
      <h2>{deck.title}</h2>
      <p>{deck.cards.length} cartes · {deck.description}</p>
      <p className={styles.pickLabel}>Dans quel sens veux-tu t'entraîner ?</p>
      <div className={styles.dirBtns}>
        <button type="button" className={styles.btnPrimary} onClick={() => setDirection('en→fr')}>🇬🇧 Anglais → 🇫🇷 Français</button>
        <button type="button" className={styles.btnPrimary} onClick={() => setDirection('fr→en')}>🇫🇷 Français → 🇬🇧 Anglais</button>
      </div>
    </section>
  );

  return <DeckSession deck={deck} direction={direction} onExit={() => { setDirection(null); navigate('/flashcards'); }} />;
};

export default FlashcardsPage;
