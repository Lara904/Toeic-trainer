import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VOCAB_CATALOG, loadDeckById } from '../data/vocab/vocabIndex';
import useProgress from '../hooks/useProgress';
import styles from './FlashcardsPage.module.css';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// ── FlashCard ────────────────────────────────────────────────────────────────
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
              <button type="button" className={styles.btnCorrect}
                onClick={(e) => { e.stopPropagation(); handleAnswer(true); }}>✅ Je savais</button>
              <button type="button" className={styles.btnIncorrect}
                onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}>❌ À revoir</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── SessionResults ────────────────────────────────────────────────────────────
const SessionResults = ({ correct, total, missed, onRestart, onRetryMissed, onExit }) => {
  const pct = Math.round((correct / total) * 100);
  return (
    <div className={styles.results}>
      <p className={styles.resultScore}>{correct} / {total}</p>
      <p className={styles.resultPct}>{pct}%</p>
      <p className={styles.resultMsg}>{pct === 100 ? '🏆 Parfait !' : pct >= 75 ? '👍 Bien joué !' : '💪 Continue !'}</p>
      <p className={styles.savedNote}>✅ Résultat sauvegardé.</p>
      <div className={styles.resultActions}>
        <button type="button" className={styles.btnPrimary} onClick={onRestart}>Recommencer ce deck</button>
        {missed.length > 0 && (
          <button type="button" className={styles.btnSecondary} onClick={onRetryMissed}>
            Revoir les {missed.length} carte(s) ratée(s)
          </button>
        )}
        <button type="button" className={styles.btnGhost} onClick={onExit}>← Retour aux decks</button>
      </div>
    </div>
  );
};

// ── DeckSession ───────────────────────────────────────────────────────────────
const DeckSession = ({ deck, deckId, direction, onExit }) => {
  const { saveFlashcardSession } = useProgress();

  const [cards,   setCards]   = useState(() => shuffle(deck.cards));
  const [idx,     setIdx]     = useState(0);
  const [correct, setCorrect] = useState(0);
  const [missed,  setMissed]  = useState([]);
  const [done,    setDone]    = useState(false);
  const [saved,   setSaved]   = useState(false);

  const advance = useCallback((ok) => {
    const card = cards[idx];
    if (!ok) setMissed((m) => [...m, card]);
    if (ok)  setCorrect((c) => c + 1);
    if (idx + 1 >= cards.length) { setDone(true); return; }
    setIdx((i) => i + 1);
  }, [idx, cards]);

  // Sauvegarde une fois la session terminée
  useEffect(() => {
    if (!done || saved) return;
    const masteredCards = cards.filter((c) => !missed.find((m) => m.en === c.en));
    saveFlashcardSession(deckId, masteredCards, cards.length);
    setSaved(true);
  }, [done, saved, cards, missed, deckId, saveFlashcardSession]);

  const restart = () => {
    setCards(shuffle(deck.cards));
    setIdx(0); setCorrect(0); setMissed([]); setDone(false); setSaved(false);
  };

  const retryMissed = () => {
    setCards(shuffle(missed));
    setIdx(0); setCorrect(0); setMissed([]); setDone(false); setSaved(false);
  };

  if (done) return (
    <SessionResults
      correct={correct} total={cards.length} missed={missed}
      onRestart={restart} onRetryMissed={retryMissed} onExit={onExit}
    />
  );

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
      <FlashCard
        key={`${idx}-${cards[idx].en}`}
        card={cards[idx]} direction={direction}
        onCorrect={() => advance(true)} onIncorrect={() => advance(false)}
      />
    </div>
  );
};

// ── FlashcardsPage ────────────────────────────────────────────────────────────
const FlashcardsPage = () => {
  const { deckId }  = useParams();
  const navigate    = useNavigate();
  const { flashcardsData, resetFlashcardDeck } = useProgress();

  const [deck,      setDeck]      = useState(null);
  const [loading,   setLoading]   = useState(false);
  const [direction, setDirection] = useState(null);
  const meta = VOCAB_CATALOG.find((d) => d.id === deckId);

  useEffect(() => {
    if (!deckId) return;
    setLoading(true);
    setDirection(null);
    loadDeckById(deckId).then((d) => { setDeck(d); setLoading(false); });
  }, [deckId]);

  // ── Liste des decks ──────────────────────────────────────────────────────
  if (!deckId) return (
    <section>
      <h1 className={styles.pageTitle}>Flashcards Vocabulaire</h1>
      <p className={styles.pageDesc}>
        Retourne chaque carte et évalue si tu connaissais le mot.
        Les cartes maîtrisées sont mémorisées entre les sessions.
      </p>
      <div className={styles.deckGrid}>
        {VOCAB_CATALOG.map((d) => {
          const progress = flashcardsData[d.id];
          const masteredCount = progress?.mastered?.length ?? 0;
          const pct = Math.round((masteredCount / d.count) * 100);
          return (
            <Link key={d.id} to={`/flashcards/${d.id}`} className={styles.deckCard}>
              <span className={styles.deckIcon}>{d.icon}</span>
              <span className={styles.deckTitle}>{d.title}</span>
              <span className={styles.deckCount}>{d.count} cartes</span>
              {masteredCount > 0 && (
                <div className={styles.deckProgressWrap}>
                  <div className={styles.deckProgressBar}>
                    <div className={styles.deckProgressFill} style={{ width: `${pct}%` }} />
                  </div>
                  <span className={styles.deckProgressLabel}>{masteredCount}/{d.count} maîtrisées</span>
                </div>
              )}
              <span className={styles.deckDesc}>{d.description}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
      Chargement du deck…
    </div>
  );
  if (!deck) return <section><p>Deck introuvable.</p><Link to="/flashcards">← Retour</Link></section>;

  const progress = flashcardsData[deckId];
  const masteredSet = new Set(progress?.mastered ?? []);

  // ── Choix du sens ────────────────────────────────────────────────────────
  if (!direction) return (
    <section className={styles.directionPicker}>
      <button className={styles.backLink} type="button" onClick={() => navigate('/flashcards')}>
        ← Retour aux decks
      </button>
      <span className={styles.deckIcon2}>{meta?.icon}</span>
      <h2>{deck.title}</h2>
      <p>{deck.cards.length} cartes · {deck.description}</p>

      {masteredSet.size > 0 && (
        <div className={styles.progressSummary}>
          <span className={styles.progressBadge}>
            ✅ {masteredSet.size} / {deck.cards.length} cartes maîtrisées
          </span>
          <button
            type="button" className={styles.btnGhostSmall}
            onClick={() => { resetFlashcardDeck(deckId); }}
          >
            Remettre à zéro
          </button>
        </div>
      )}

      <p className={styles.pickLabel}>Dans quel sens veux-tu t'entraîner ?</p>
      <div className={styles.dirBtns}>
        <button type="button" className={styles.btnPrimary} onClick={() => setDirection('en→fr')}>
          🇬🇧 Anglais → 🇫🇷 Français
        </button>
        <button type="button" className={styles.btnPrimary} onClick={() => setDirection('fr→en')}>
          🇫🇷 Français → 🇬🇧 Anglais
        </button>
        {masteredSet.size > 0 && masteredSet.size < deck.cards.length && (
          <button
            type="button" className={styles.btnSecondary}
            onClick={() => {
              // Charge uniquement les cartes non encore maîtrisées
              const filtered = { ...deck, cards: deck.cards.filter((c) => !masteredSet.has(c.en)) };
              setDeck(filtered);
              setDirection('en→fr');
            }}
          >
            Revoir uniquement les {deck.cards.length - masteredSet.size} cartes non maîtrisées
          </button>
        )}
      </div>
    </section>
  );

  return (
    <DeckSession
      deck={deck}
      deckId={deckId}
      direction={direction}
      onExit={() => { setDirection(null); navigate('/flashcards'); }}
    />
  );
};

export default FlashcardsPage;
