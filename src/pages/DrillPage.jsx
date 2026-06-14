import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListeningPlayer from '../components/ListeningPlayer';
import QuestionCard from '../components/QuestionCard';
import ResultsSummary from '../components/ResultsSummary';
import { getDrillById, PART_LABELS } from '../data/drillsIndex';
import useProgress from '../hooks/useProgress';
import styles from './DrillPage.module.css';

// Découpe le texte d'une note de service / passage (Part 6) et remplace les
// marqueurs {{1}}, {{2}}, ... par des repères visuels "(1)", "(2)", ...
const renderPassage = (passage) => {
  const parts = passage.split(/(\{\{\d+\}\})/g);
  return parts.map((part, index) => {
    const match = part.match(/^\{\{(\d+)\}\}$/);
    if (match) {
      return (
        <strong key={index} className={styles.blankMarker}>
          ({match[1]})
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const DrillPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const drill = useMemo(() => getDrillById(id), [id]);
  const { recordAttempt } = useProgress();

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!drill) {
    return (
      <section>
        <h1>Exercice introuvable</h1>
        <p>Cet exercice n'existe pas (ou plus).</p>
        <button type="button" onClick={() => navigate('/')}>Retour à la liste</button>
      </section>
    );
  }

  const handleSelect = (questionId, choiceIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correctCount = drill.questions.reduce(
      (count, question) => count + (answers[question.id] === question.answer ? 1 : 0),
      0
    );
    recordAttempt(drill, correctCount);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const correctCount = drill.questions.reduce(
    (count, question) => count + (answers[question.id] === question.answer ? 1 : 0),
    0
  );

  return (
    <section>
      <p className={styles.partLabel}>{PART_LABELS[drill.part]}</p>
      <h1>{drill.title}</h1>
      <p className={styles.instructions}>{drill.instructions}</p>

      {drill.image && (
        <img
          className={styles.image}
          src={drill.image.src}
          alt={drill.image.alt}
          width="400"
          height="300"
          loading="eager"
        />
      )}

      {drill.audioText && (
        <div className={styles.section}>
          <ListeningPlayer text={drill.audioText} />
        </div>
      )}

      {drill.passage && (
        <div className={styles.passage}>
          <pre className={styles.passageText}>{renderPassage(drill.passage)}</pre>
        </div>
      )}

      {drill.passages && (
        <div className={styles.passages}>
          {drill.passages.map((doc) => (
            <div key={doc.label} className={styles.passage}>
              <h2 className={styles.passageLabel}>{doc.label}</h2>
              <pre className={styles.passageText}>{renderPassage(doc.text)}</pre>
            </div>
          ))}
        </div>
      )}

      <div className={styles.questions}>
        {drill.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            selected={answers[question.id]}
            onSelect={(choiceIndex) => handleSelect(question.id, choiceIndex)}
            submitted={submitted}
            fallbackPrompt={
              question.blank
                ? `Choisissez le mot ou groupe de mots pour le repère (${question.blank})`
                : drill.instructions
            }
          />
        ))}
      </div>

      {!submitted ? (
        <button type="button" className={styles.submit} onClick={handleSubmit}>
          Valider mes réponses
        </button>
      ) : (
        <ResultsSummary correct={correctCount} total={drill.questions.length} onRetry={handleRetry} />
      )}
    </section>
  );
};

export default DrillPage;
