import { PART_LABELS } from '../data/drillsIndex';
import useProgress from '../hooks/useProgress';
import styles from './Stats.module.css';

const Stats = () => {
  const { history, getStatsByPart, resetHistory } = useProgress();
  const statsByPart = getStatsByPart();

  return (
    <section>
      <h1>Ma progression</h1>

      {history.length === 0 ? (
        <p>Tu n'as encore fait aucun exercice. Va dans "Exercices" pour commencer !</p>
      ) : (
        <>
          <div className={styles.grid}>
            {Object.keys(statsByPart)
              .sort((a, b) => Number(a) - Number(b))
              .map((part) => {
                const stat = statsByPart[part];
                const percentage = Math.round((stat.correct / stat.total) * 100);
                return (
                  <article key={part} className={styles.card}>
                    <h2>{PART_LABELS[part]}</h2>
                    <p className={styles.percentage}>{percentage}%</p>
                    <p className={styles.detail}>
                      {stat.correct} / {stat.total} bonnes réponses — {stat.attempts} tentative
                      {stat.attempts > 1 ? 's' : ''}
                    </p>
                  </article>
                );
              })}
          </div>

          <h2 className={styles.historyTitle}>Historique</h2>
          <ul className={styles.history}>
            {history
              .slice()
              .reverse()
              .map((entry, index) => (
                <li key={index} className={styles.historyItem}>
                  <span>{entry.title}</span>
                  <span>
                    {entry.correct}/{entry.total}
                  </span>
                  <span className={styles.date}>
                    {new Date(entry.date).toLocaleString('fr-FR')}
                  </span>
                </li>
              ))}
          </ul>

          <button type="button" className={styles.reset} onClick={resetHistory}>
            Réinitialiser ma progression
          </button>
        </>
      )}
    </section>
  );
};

export default Stats;
