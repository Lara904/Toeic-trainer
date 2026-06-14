import { Link } from 'react-router-dom';
import { PART_LABELS } from '../data/drillsIndex';
import styles from './DrillCard.module.css';

const DrillCard = ({ drill, lastAttempt }) => (
  <article className={styles.card}>
    <div className={styles.meta}>
      <span className={styles.partTag}>{PART_LABELS[drill.part]}</span>
      <span className={styles.skillTag}>
        {drill.skill === 'listening' ? 'Listening' : 'Reading'}
      </span>
    </div>
    <h3 className={styles.title}>{drill.title}</h3>
    <p className={styles.questionCount}>
      {drill.questions.length} question{drill.questions.length > 1 ? 's' : ''}
    </p>
    {lastAttempt && (
      <p className={styles.lastScore}>
        Dernier score : {lastAttempt.correct}/{lastAttempt.total}
      </p>
    )}
    <Link className={styles.cta} to={`/drill/${drill.id}`} aria-label={`Faire l'exercice ${drill.title}`}>
      {lastAttempt ? 'Refaire l\u2019exercice' : 'Commencer'}
    </Link>
  </article>
);

export default DrillCard;
