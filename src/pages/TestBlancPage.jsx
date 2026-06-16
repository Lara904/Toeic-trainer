import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListeningPlayer from '../components/ListeningPlayer';
import QuestionCard from '../components/QuestionCard';
import { PART_LABELS, loadDrillsByIds } from '../data/drillsIndex';
import { loadTestBlanc } from '../data/trainingIndex';
import useProgress from '../hooks/useProgress';
import styles from './TestBlancPage.module.css';

const renderPassage = (text) => {
  const parts = text.split(/(\{\{\d+\}\})/g);
  return parts.map((p, i) => {
    const m = p.match(/^\{\{(\d+)\}\}$/);
    return m ? <strong key={i} className={styles.blankMarker}>({m[1]})</strong> : <span key={i}>{p}</span>;
  });
};

const getDrillQuestions = (drill) => drill.questions || [];

const DrillBlock = ({ drill, answers, submitted, onSelect }) => {
  const questions      = getDrillQuestions(drill);
  const hideChoiceText = drill.part <= 4;
  return (
    <div className={styles.drillBlock}>
      {drill.image && <img className={styles.drillImage} src={drill.image.src} alt={drill.image.alt} width="400" height="300" loading="lazy" />}
      {drill.audioText && <div className={styles.audioWrap}><ListeningPlayer text={drill.audioText} /></div>}
      {drill.passage && <div className={styles.passage}><pre className={styles.passageText}>{renderPassage(drill.passage)}</pre></div>}
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
          <QuestionCard key={q.id} question={q} index={qi}
            selected={answers[q.id]} onSelect={(ci) => onSelect(q.id, ci)}
            submitted={submitted} hideChoiceText={hideChoiceText}
            fallbackPrompt={q.blank ? `Repère (${q.blank})` : drill.instructions}
          />
        ))}
      </div>
    </div>
  );
};

const TestBlancPage = () => {
  const navigate = useNavigate();
  const { saveTestBlanc } = useProgress();

  const [started,   setStarted]   = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [sections,  setSections]  = useState([]);
  const [answers,   setAnswers]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saved,     setSaved]     = useState(false);

  const handleStart = async () => {
    setLoading(true);
    const tb = await loadTestBlanc();
    const loaded = await Promise.all(
      tb.sections.map(async (section) => ({
        ...section,
        parts: await Promise.all(
          section.parts.map(async (part) => ({
            ...part,
            drills: await loadDrillsByIds(part.drillIds),
          }))
        ),
      }))
    );
    setSections(loaded);
    setLoading(false);
    setStarted(true);
  };

  const allDrills    = sections.flatMap((s) => s.parts.flatMap((p) => p.drills));
  const allQuestions = allDrills.flatMap(getDrillQuestions);
  const totalQ       = allQuestions.length;
  const correctQ     = allQuestions.filter((q) => answers[q.id] === q.answer).length;
  const answeredCount = Object.keys(answers).length;
  const percentage   = submitted && totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;

  const handleSelect = useCallback((qId, ci) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: ci }));
  }, [submitted]);

  // Sauvegarde unique après validation
  useEffect(() => {
    if (!submitted || saved || totalQ === 0) return;

    // Score par partie
    const byPart = {};
    sections.forEach((section) => {
      section.parts.forEach((part) => {
        const partNum = part.part;
        const qs = part.drills.flatMap(getDrillQuestions);
        const c  = qs.filter((q) => answers[q.id] === q.answer).length;
        byPart[partNum] = { correct: c, total: qs.length };
      });
    });

    saveTestBlanc(correctQ, totalQ, byPart);
    setSaved(true);
  }, [submitted, saved, totalQ, correctQ, sections, answers, saveTestBlanc]);

  // Écran d'accueil
  if (!started) return (
    <section className={styles.intro}>
      <h1>🎯 Test Blanc TOEIC®</h1>
      <p>Simulation complète : 200 questions · 8 parties · conditions officielles (~2h)</p>
      <div className={styles.stats}>
        <div className={styles.statBox}><span className={styles.statNum}>200</span><span className={styles.statLabel}>questions</span></div>
        <div className={styles.statBox}><span className={styles.statNum}>8</span><span className={styles.statLabel}>parties</span></div>
        <div className={styles.statBox}><span className={styles.statNum}>~2h</span><span className={styles.statLabel}>durée</span></div>
      </div>
      {loading
        ? <p className={styles.loadingMsg}>Chargement des questions…</p>
        : <button type="button" className={styles.startBtn} onClick={handleStart}>Commencer le test</button>
      }
      <button type="button" className={styles.backBtn} onClick={() => navigate('/')}>← Retour</button>
    </section>
  );

  const progressPct = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;

  return (
    <section>
      <div className={styles.stickyHeader}>
        <span className={styles.stickyTitle}>Test Blanc TOEIC®</span>
        {!submitted
          ? <span className={styles.stickyProgress}>{answeredCount} / {totalQ} répondues</span>
          : <span className={styles.stickyScore}>Score : {correctQ}/{totalQ} ({percentage}%)</span>
        }
      </div>
      {!submitted && (
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      )}

      <h1 className={styles.pageTitle}>Test Blanc TOEIC®</h1>

      {sections.map((section) => (
        <div key={section.label} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.label}</h2>
          {section.parts.map((part) => (
            <div key={part.part} className={styles.partGroup}>
              <h3 className={styles.partTitle}>{PART_LABELS[part.part]}</h3>
              <p className={styles.partInstructions}>{part.instructions}</p>
              {part.drills.map((drill) => (
                <div key={drill.id} className={styles.drillWrap}>
                  <DrillBlock drill={drill} answers={answers} submitted={submitted} onSelect={handleSelect} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <div className={styles.actionBar}>
          <p className={styles.actionHint}>
            {answeredCount < totalQ ? `${totalQ - answeredCount} question(s) sans réponse` : 'Tout est rempli — prêt à valider !'}
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
              {percentage >= 80 ? '🏆 Excellent !' : percentage >= 60 ? '👍 Bon travail !' : '💪 Continue !'}
            </p>
            <p className={styles.savedNote}>✅ Résultat sauvegardé dans vos stats.</p>
            <div className={styles.resultsActions}>
              <button type="button" className={styles.retryBtn}
                onClick={() => { setAnswers({}); setSubmitted(false); setSaved(false); window.scrollTo(0, 0); }}>
                Recommencer
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
