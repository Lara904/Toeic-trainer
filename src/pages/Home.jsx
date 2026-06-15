import { Link } from 'react-router-dom';
import { PART_LABELS } from '../data/drillsIndex';
import { TRAINING_CATALOG } from '../data/trainingIndex';
import { VOCAB_CATALOG } from '../data/vocab/vocabIndex';
import styles from './Home.module.css';

const Home = () => (
  <section>
    <div className={styles.hero}>
      <h1>TOEIC Trainer</h1>
      <p className={styles.heroSub}>Entraîne-toi partie par partie, révise le vocabulaire, ou lance un test blanc complet.</p>
    </div>

    {/* Test Blanc */}
    <div className={styles.testBlanc}>
      <div className={styles.testBlancInner}>
        <div>
          <h2 className={styles.testBlancTitle}>Test Blanc TOEIC</h2>
          <p className={styles.testBlancDesc}>200 questions · 8 parties · conditions officielles</p>
        </div>
        <Link to="/test-blanc" className={styles.testBlancBtn}>Commencer →</Link>
      </div>
    </div>

    {/* Flashcards */}
    <h2 className={styles.sectionHeading}>Vocabulaire & Flashcards</h2>
    <div className={styles.vocabRow}>
      {VOCAB_CATALOG.map((d) => (
        <Link key={d.id} to={`/flashcards/${d.id}`} className={styles.vocabChip}>
          <span>{d.title}</span>
          <span className={styles.vocabCount}>{d.count}</span>
        </Link>
      ))}
    </div>

    {/* Exercices d'entraînement */}
    <h2 className={styles.sectionHeading}>Exercices d'entraînement</h2>
    {Object.keys(TRAINING_CATALOG)
      .sort((a, b) => Number(a) - Number(b))
      .map((part) => (
        <div key={part} className={styles.partGroup}>
          <h3 className={styles.partTitle}>
            {PART_LABELS[part]}
          </h3>
          <div className={styles.grid}>
            {TRAINING_CATALOG[part].map((ex) => (
              <Link key={ex.id} to={`/training/${ex.id}`} className={styles.card}>
                <span className={styles.cardTitle}>{ex.title}</span>
                <span className={styles.cardMeta}>
                  {ex.items} exercice{ex.items > 1 ? 's' : ''}
                  {' · '}
                  {ex.skill === 'listening' ? '🎧 Listening' : '📖 Reading'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
  </section>
);

export default Home;

