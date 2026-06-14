import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListeningPlayer from '../components/ListeningPlayer';
import QuestionCard from '../components/QuestionCard';
import { getDrillById, PART_LABELS } from '../data/drillsIndex';
import { TEST_BLANC } from '../data/trainingIndex';
import styles from './TestBlancPage.module.css';

// ── helpers ────────────────────────────────────────────────────────────────
const renderPassage = (text) => {
  const parts = text.split(/(\{\{\d+\}\})/g);
  return parts.map((part, i) => {
    const m = part.match(/^\{\{(\d+)\}\}$/);
    return m
      ? <strong key={i} className={styles.blankMarker}>({m[1]})</strong>
      : <span key={i}>{part}</span>;
  });
};

// Retourne les questions d'un drill (flat) quel que soit son format
const getDrillQuestions = (drill) => drill.questions || [];

// ── mini-rendu d'un drill dans le test blanc ───────────────────────────────
const DrillBlock = ({ drill, answers, submitted, onSelect }) => {
  const questions = getDrillQuestions(drill);
  return (
    <div className={styles.drillBlock}>
      {drill.image && (
        <img
          className={styles.drillImage}
          src={drill.image.src}
          alt={drill.image.alt}
          width="400" height="300"
          loading="lazy"
        />
      )}
      {drill.audioText && (
        <div className={styles.audioWrap}>
          <ListeningPlayer text={drill.audioText} />
        </div>
      )}
      {drill.passage && (
        <div className={styles.passage}>
          <pre className={styles.passageText}>{renderPassage(drill.passage)}</pre>
        </div>
      )}
      {drill.passages && (
        <div className={styles.multiPassages}>
          {drill.passages.map((doc) => (
            <div key={doc.label} className={styles.passage}>
              <h4 className={styles.passageLabel}>{doc.label}</h4>
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
            fallbackPrompt={
              q.blank
                ? `Mot ou groupe de mots pour le repère (${q.blank})`
                : drill.instructions
            }
          />
        ))}
      </div>
    </div>
  );
};

// ── page ──────────────────────────────────────────────────────────────────
const TestBlancPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted]   = useState(false);

  // Charge tous les drills référencés dans test-blanc.json
  const sections = useMemo(() => {
    return TEST_BLANC.sections.map((section) => ({
      ...section,
      parts: section.parts.map((part) => ({
        ...part,
        drills: part.drillIds.map((id) => getDrillById(id)).filter(Boolean),
      })),
    }));
  }, []);

  const allDrills = useMemo(
    () => sections.flatMap((s) => s.parts.flatMap((p) => p.drills)),
    [sections]
  );

  const allQuestions = useMemo(
    () => allDrills.flatMap((d) => getDrillQuestions(d)),
    [allDrills]
  );

  const totalQ   = allQuestions.length;
  const correctQ = allQuestions.filter((q) => answers[q.id] === q.answer).length;

  const handleSelect = useCallback((qId, ci) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: ci }));
  }, [submitted]);

  const answeredCount = Object.keys(answers).length;
  const percentage    = submitted ? Math.round((correctQ / totalQ) * 100) : 0;

  // ── écran d'accueil ─────────────────────────────────────────────────────
  if (!started) {
    return (
      <section className={styles.intro}>
        <h1>🎯 Test Blanc TOEIC®</h1>
        <p>{TEST_BLANC.description}</p>
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statNum}>{totalQ}</span>
            <span className={styles.statLabel}>questions</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>8</span>
            <span className={styles.statLabel}>parties</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>~2h</span>
            <span className={styles.statLabel}>durée estimée</span>
          </div>
        </div>
        <button type="button" className={styles.startBtn} onClick={() => setStarted(true)}>
          Commencer le test
        </button>
        <button type="button" className={styles.backBtn} onClick={() => navigate('/')}>
          ← Retour
        </button>
      </section>
    );
  }

  // ── barre de progression sticky ─────────────────────────────────────────
  const progressPct = Math.round((answeredCount / totalQ) * 100);

  return (
    <section>
      {/* sticky header */}
      <div className={styles.stickyHeader}>
        <span className={styles.stickyTitle}>Test Blanc TOEIC®</span>
        {!submitted ? (
          <span className={styles.stickyProgress}>
            {answeredCount} / {totalQ} répondues
          </span>
        ) : (
          <span className={styles.stickyScore}>
            Score : {correctQ}/{totalQ} ({percentage}%)
          </span>
        )}
      </div>
      {!submitted && (
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      )}

      <h1 className={styles.pageTitle}>Test Blanc TOEIC®</h1>

      {/* sections Listening / Reading */}
      {sections.map((section) => (
        <div key={section.label} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.label}</h2>

          {section.parts.map((part) => (
            <div key={part.part} className={styles.partGroup}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p className={styles.partInstructions}>{part.instructions}</p>

              {part.drills.map((drill) => (
                <div key={drill.id} className={styles.drillWrap}>
                  <DrillBlock
                    drill={drill}
                    answers={answers}
                    submitted={submitted}
                    onSelect={handleSelect}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* ── actions ── */}
      {!submitted ? (
        <div className={styles.actionBar}>
          <p className={styles.actionHint}>
            {answeredCount < totalQ
              ? `${totalQ - answeredCount} question(s) sans réponse`
              : 'Toutes les questions sont remplies — prêt à valider !'}
          </p>
          <button type="button" className={styles.submitBtn} onClick={() => setSubmitted(true)}>
            Terminer le test et voir mes résultats
          </button>
        </div>
      ) : (
        <div className={styles.results}>
          <div className={styles.resultsBox}>
            <p className={styles.resultsScore}>{correctQ} / {totalQ}</p>
            <p className={styles.resultsPct}>{percentage}%</p>
            <p className={styles.resultsLabel}>
              {percentage >= 785 / 990 * 100
                ? '🏆 Excellent score !'
                : percentage >= 60
                ? '👍 Bon travail, continue !'
                : '💪 Continue à t\'entraîner !'}
            </p>
            <div className={styles.resultsActions}>
              <button
                type="button"
                className={styles.retryBtn}
                onClick={() => { setAnswers({}); setSubmitted(false); window.scrollTo(0, 0); }}
              >
                Recommencer le test
              </button>
              <button type="button" className={styles.backBtn2} onClick={() => navigate('/')}>
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestBlancPage;
