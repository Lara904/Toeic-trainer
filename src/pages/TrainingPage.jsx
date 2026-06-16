import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListeningPlayer from '../components/ListeningPlayer';
import QuestionCard from '../components/QuestionCard';
import ResultsSummary from '../components/ResultsSummary';
import { PART_LABELS } from '../data/drillsIndex';
import { loadTrainingById } from '../data/trainingIndex';
import useProgress from '../hooks/useProgress';
import styles from './TrainingPage.module.css';

const renderPassage = (text) => {
  const parts = text.split(/(\{\{\d+\}\})/g);
  return parts.map((part, i) => {
    const m = part.match(/^\{\{(\d+)\}\}$/);
    return m
      ? <strong key={i} className={styles.blankMarker}>({m[1]})</strong>
      : <span key={i}>{part}</span>;
  });
};

const getItemQuestions = (item) => {
  if (Array.isArray(item.questions) && item.questions.length > 0) return item.questions;
  if (Array.isArray(item.choices)) {
    return [{
      id:          item.id,
      sentence:    item.sentence    || undefined,
      prompt:      item.prompt      || undefined,
      blank:       item.blank       || undefined,
      choices:     item.choices,
      answer:      item.answer,
      explanation: item.explanation,
    }];
  }
  return [];
};

const countCorrect = (item, answers) =>
  getItemQuestions(item).filter((q) => answers[q.id] === q.answer).length;

const TrainingItem = ({ item, part, answers, submitted, onSelect }) => {
  const questions      = getItemQuestions(item);
  const hideChoiceText = part <= 4;

  return (
    <div className={styles.item}>
      {item.image && (
        <img className={styles.itemImage}
          src={item.image.src} alt={item.image.alt}
          width="400" height="300" loading="lazy"
        />
      )}
      {item.audioText && (
        <div className={styles.audioWrap}>
          <ListeningPlayer text={item.audioText} />
        </div>
      )}
      {item.passage && (
        <div className={styles.passage}>
          <pre className={styles.passageText}>{renderPassage(item.passage)}</pre>
        </div>
      )}
      {item.passages && (
        <div className={styles.multiPassages}>
          {item.passages.map((doc) => (
            <div key={doc.label} className={styles.passage}>
              <h3 className={styles.passageLabel}>{doc.label}</h3>
              <pre className={styles.passageText}>{renderPassage(doc.text)}</pre>
            </div>
          ))}
        </div>
      )}
      <div className={styles.questions}>
        {questions.map((q, qi) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={qi}
            selected={answers[q.id]}
            onSelect={(ci) => onSelect(q.id, ci)}
            submitted={submitted}
            hideChoiceText={hideChoiceText}
            fallbackPrompt={q.blank ? `Mot ou groupe de mots pour le repère (${q.blank})` : undefined}
          />
        ))}
      </div>
    </div>
  );
};

const TrainingPage = () => {
  const { id }     = useParams();
  const navigate   = useNavigate();
  const { saveTraining } = useProgress();

  const [exercise,  setExercise]  = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [answers,   setAnswers]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saved,     setSaved]     = useState(false);

  useEffect(() => {
    setLoading(true);
    setAnswers({});
    setSubmitted(false);
    setSaved(false);
    loadTrainingById(id).then((data) => { setExercise(data); setLoading(false); });
  }, [id]);

  const handleSelect = useCallback((qId, ci) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: ci }));
  }, [submitted]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  // Sauvegarde une seule fois après la validation
  useEffect(() => {
    if (!submitted || !exercise || saved) return;
    const items    = exercise.items || [];
    const totalQ   = items.reduce((s, it) => s + getItemQuestions(it).length, 0);
    const correctQ = items.reduce((s, it) => s + countCorrect(it, answers), 0);
    saveTraining(exercise.id, exercise.title, exercise.part, exercise.skill, correctQ, totalQ);
    setSaved(true);
  }, [submitted, exercise, answers, saved, saveTraining]);

  if (loading) return <div className={styles.loading}>Chargement de l'exercice…</div>;

  if (!exercise) return (
    <section>
      <h1>Exercice introuvable</h1>
      <button type="button" onClick={() => navigate('/')}>Retour</button>
    </section>
  );

  const items    = exercise.items || [];
  const totalQ   = items.reduce((s, it) => s + getItemQuestions(it).length, 0);
  const correctQ = items.reduce((s, it) => s + countCorrect(it, answers), 0);

  return (
    <section>
      <p className={styles.partLabel}>{PART_LABELS[exercise.part]}</p>
      <h1>{exercise.title}</h1>
      <p className={styles.instructions}>{exercise.instructions}</p>

      {items.map((item, idx) => (
        <div key={item.id} className={styles.itemWrap}>
          <p className={styles.itemNum}>{idx + 1} / {items.length}</p>
          <TrainingItem
            item={item}
            part={exercise.part}
            answers={answers}
            submitted={submitted}
            onSelect={handleSelect}
          />
        </div>
      ))}

      {!submitted ? (
        <button type="button" className={styles.submit} onClick={handleSubmit}>
          Valider toutes mes réponses
        </button>
      ) : (
        <ResultsSummary
          correct={correctQ}
          total={totalQ}
          onRetry={() => { setAnswers({}); setSubmitted(false); setSaved(false); }}
        />
      )}
    </section>
  );
};

export default TrainingPage;