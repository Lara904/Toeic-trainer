import styles from './ResultsSummary.module.css';

const ResultsSummary = ({ correct, total, onRetry }) => {
  const percentage = Math.round((correct / total) * 100);

  return (
    <div className={styles.summary} role="status">
      <p className={styles.score}>
        Score : {correct} / {total} ({percentage}%)
      </p>
      <button type="button" className={styles.retry} onClick={onRetry}>
        Recommencer cet exercice
      </button>
    </div>
  );
};

export default ResultsSummary;
