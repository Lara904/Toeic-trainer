import { Link } from 'react-router-dom';
import { PART_LABELS } from '../data/drillsIndex';
import { VOCAB_CATALOG } from '../data/vocab/vocabIndex';
import useProgress from '../hooks/useProgress';
import styles from './Stats.module.css';

const fmt = (iso) => new Date(iso).toLocaleString('fr-FR', {
  day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit',
});

const ScoreBar = ({ correct, total, color = 'var(--color-primary)' }) => {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  return (
    <div className={styles.barWrap}>
      <div className={styles.bar}>
        <div className={styles.barFill} style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className={styles.barLabel}>{correct}/{total} — {pct}%</span>
    </div>
  );
};

const Stats = () => {
  const {
    trainingHistory,
    testBlancHistory,
    flashcardsData,
    trainingStatsByPart,
    resetAll,
  } = useProgress();

  const partStats      = trainingStatsByPart();
  const hasTraining    = trainingHistory.length > 0;
  const hasTestBlanc   = testBlancHistory.length > 0;
  const hasFlashcards  = Object.keys(flashcardsData).length > 0;
  const hasAnything    = hasTraining || hasTestBlanc || hasFlashcards;

  return (
    <section>
      <h1>Ma progression</h1>

      {!hasAnything && (
        <p className={styles.empty}>
          Aucune donnée pour l'instant. Lance un exercice, un test blanc ou une session de flashcards !
        </p>
      )}

      {/* ── Test Blanc ──────────────────────────────────────────────────── */}
      {hasTestBlanc && (
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>🎯 Tests Blancs</h2>

          {/* Dernier résultat mis en avant */}
          {(() => {
            const last = testBlancHistory.at(-1);
            const pct  = Math.round((last.correct / last.total) * 100);
            return (
              <div className={styles.testBlancCard}>
                <div className={styles.testBlancScore}>
                  <span className={styles.bigScore}>{last.correct}/{last.total}</span>
                  <span className={styles.bigPct}>{pct}%</span>
                </div>
                <p className={styles.testBlancDate}>Dernier test : {fmt(last.date)}</p>
                {last.byPart && (
                  <div className={styles.byPart}>
                    {Object.entries(last.byPart)
                      .sort(([a], [b]) => Number(a) - Number(b))
                      .map(([part, { correct, total }]) => (
                        <div key={part} className={styles.byPartRow}>
                          <span className={styles.byPartLabel}>{PART_LABELS[part]}</span>
                          <ScoreBar correct={correct} total={total} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })()}

          {/* Historique si plusieurs tests */}
          {testBlancHistory.length > 1 && (
            <>
              <h3 className={styles.subTitle}>Historique des tests</h3>
              <ul className={styles.historyList}>
                {[...testBlancHistory].reverse().map((t, i) => (
                  <li key={i} className={styles.historyItem}>
                    <span className={styles.histScore}>
                      {t.correct}/{t.total} ({Math.round((t.correct / t.total) * 100)}%)
                    </span>
                    <span className={styles.histDate}>{fmt(t.date)}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* ── Exercices d'entraînement ─────────────────────────────────────── */}
      {hasTraining && (
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>📚 Exercices d'entraînement</h2>

          <div className={styles.partGrid}>
            {Object.keys(partStats)
              .sort((a, b) => Number(a) - Number(b))
              .map((part) => {
                const { attempts, correct, total } = partStats[part];
                const pct = Math.round((correct / total) * 100);
                return (
                  <div key={part} className={styles.partCard}>
                    <p className={styles.partCardTitle}>{PART_LABELS[part]}</p>
                    <p className={styles.partPct}>{pct}%</p>
                    <ScoreBar correct={correct} total={total} />
                    <p className={styles.partAttempts}>{attempts} tentative{attempts > 1 ? 's' : ''}</p>
                  </div>
                );
              })}
          </div>

          <h3 className={styles.subTitle}>Historique des exercices</h3>
          <ul className={styles.historyList}>
            {[...trainingHistory].reverse().slice(0, 20).map((e, i) => (
              <li key={i} className={styles.historyItem}>
                <span className={styles.histTitle}>{e.title}</span>
                <span className={styles.histScore}>
                  {e.correct}/{e.total} ({Math.round((e.correct / e.total) * 100)}%)
                </span>
                <span className={styles.histDate}>{fmt(e.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Flashcards ───────────────────────────────────────────────────── */}
      {hasFlashcards && (
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>🃏 Flashcards</h2>
          <div className={styles.vocabGrid}>
            {VOCAB_CATALOG.map((d) => {
              const progress = flashcardsData[d.id];
              if (!progress) return null;
              const mastered = progress.mastered?.length ?? 0;
              const pct      = Math.round((mastered / d.count) * 100);
              return (
                <div key={d.id} className={styles.vocabCard}>
                  <span className={styles.vocabIcon}>{d.icon}</span>
                  <p className={styles.vocabTitle}>{d.title}</p>
                  <ScoreBar correct={mastered} total={d.count} color="var(--color-success)" />
                  <p className={styles.vocabSub}>
                    {mastered === d.count
                      ? '✅ Deck maîtrisé !'
                      : `${d.count - mastered} carte${d.count - mastered > 1 ? 's' : ''} restante${d.count - mastered > 1 ? 's' : ''}`}
                  </p>
                  {progress.lastDate && (
                    <p className={styles.vocabDate}>Dernière session : {fmt(progress.lastDate)}</p>
                  )}
                  <Link to={`/flashcards/${d.id}`} className={styles.vocabLink}>
                    Continuer →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Reset ───────────────────────────────────────────────────────── */}
      {hasAnything && (
        <div className={styles.resetWrap}>
          <button
            type="button" className={styles.resetBtn}
            onClick={() => { if (window.confirm('Supprimer toute ta progression ? Cette action est irréversible.')) resetAll(); }}
          >
            Réinitialiser toute ma progression
          </button>
        </div>
      )}
    </section>
  );
};

export default Stats;

