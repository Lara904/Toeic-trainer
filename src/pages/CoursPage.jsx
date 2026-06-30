// src/pages/CoursPage.jsx  — VERSION 2 (exercices groupés dans ConjugaisonPanel)
import { useState } from 'react';
import { COURS_DATA } from '../data/coursData';
import styles from './CoursPage.module.css';

// ─── Tableau ────────────────────────────────────────────────────────────────
const DataTable = ({ tableau }) => (
  <div className={styles.tableWrap}>
    {tableau.titre && <p className={styles.tableTitle}>{tableau.titre}</p>}
    <table className={styles.table}>
      <thead><tr>{tableau.colonnes.map((col, i) => <th key={i}>{col}</th>)}</tr></thead>
      <tbody>{tableau.lignes.map((ligne, i) => (
        <tr key={i}>{ligne.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
      ))}</tbody>
    </table>
  </div>
);

// ─── Exemples ───────────────────────────────────────────────────────────────
const ExemplesList = ({ exemples }) => (
  <div className={styles.exemplesList}>
    {exemples.map((ex, i) => (
      <div key={i} className={styles.exempleItem}>
        <div className={styles.exempleLabel}>{ex.fr}</div>
        <pre className={styles.exempleCode}>{ex.en}</pre>
        {ex.note && <p className={styles.exempleNote}>{ex.note}</p>}
      </div>
    ))}
  </div>
);

// ─── Leçon ──────────────────────────────────────────────────────────────────
const LeconSection = ({ lecon }) => (
  <div className={styles.lecon}>
    <h3 className={styles.leconTitre}>{lecon.titre}</h3>
    {lecon.contenu && <p className={styles.leconContenu}>{lecon.contenu}</p>}
    {lecon.tableaux?.map((t, i) => <DataTable key={i} tableau={t} />)}
    {lecon.exemples && <ExemplesList exemples={lecon.exemples} />}
    {lecon.astuce && <div className={styles.astuce}><p>{lecon.astuce}</p></div>}
  </div>
);

// ─── QCM ────────────────────────────────────────────────────────────────────
const QuestionQCM = ({ question, index }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = submitted && selected === question.answer;
  const LABELS = ['A', 'B', 'C', 'D'];

  return (
    <div className={styles.question}>
      <p className={styles.questionEnonce}>
        <span className={styles.questionNum}>Q{index + 1}</span>
        {question.enonce}
      </p>
      <div className={styles.choices}>
        {question.choices.map((choice, ci) => {
          let cls = styles.choice;
          if (submitted) {
            if (ci === question.answer) cls = `${styles.choice} ${styles.choiceCorrect}`;
            else if (ci === selected) cls = `${styles.choice} ${styles.choiceWrong}`;
          } else if (ci === selected) cls = `${styles.choice} ${styles.choiceSelected}`;
          return (
            <label key={ci} className={cls}>
              <input type="radio" name={question.id} value={ci} checked={selected === ci}
                disabled={submitted} onChange={() => setSelected(ci)} />
              <span className={styles.choiceLetter}>{LABELS[ci]}</span>
              <span className={styles.choiceText}>{choice}</span>
            </label>
          );
        })}
      </div>
      {!submitted ? (
        <button className={styles.btnValidate} onClick={() => { if (selected !== null) setSubmitted(true); }} disabled={selected === null}>
          Valider ma réponse
        </button>
      ) : (
        <div className={`${styles.feedback} ${isCorrect ? styles.feedbackOk : styles.feedbackKo}`}>
          <p className={styles.feedbackResult}>
            {isCorrect ? '✅ Bonne réponse !' : `❌ Incorrect — bonne réponse : ${LABELS[question.answer]}.`}
          </p>
          <p className={styles.feedbackExplication}>{question.explication}</p>
          {question.regle && <p className={styles.feedbackRegle}>{question.regle}</p>}
          <button className={styles.btnReset} onClick={() => { setSelected(null); setSubmitted(false); }}>↩ Réessayer</button>
        </div>
      )}
    </div>
  );
};

// ─── Score bar ───────────────────────────────────────────────────────────────
const ScoreBar = ({ correct, total, color }) => {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const msg = pct === 100 ? '🏆 Parfait !' : pct >= 80 ? '👍 Très bien !' : pct >= 60 ? '💪 Continue !' : '📖 Relis le cours.';
  return (
    <div className={styles.scoreBar}>
      <div className={styles.scoreBarHeader}>
        <span className={styles.scoreLabel}>Score : <strong>{correct}/{total}</strong></span>
        <span className={styles.scoreMsg}>{msg}</span>
      </div>
      <div className={styles.scoreTrack}>
        <div className={styles.scoreFill} style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
};

// ─── Exercice groupé (titre + instructions + liste de questions) ─────────────
const ExerciceBlock = ({ exercice, color }) => {
  const [ouvert, setOuvert] = useState(false);
  const nb = exercice.questions.length;
  return (
    <div className={styles.exoBlock}>
      <button
        className={`${styles.exoHeader} ${ouvert ? styles.exoHeaderOuvert : ''}`}
        style={ouvert ? { borderColor: color } : {}}
        onClick={() => setOuvert(!ouvert)}
      >
        <span className={styles.exoTitre}>{exercice.titre}</span>
        <span className={styles.exoMeta}>{nb} question{nb > 1 ? 's' : ''}</span>
        <span className={styles.exoChevron}>{ouvert ? '▲' : '▼'}</span>
      </button>
      {ouvert && (
        <div className={styles.exoBody}>
          {exercice.instructions && (
            <p className={styles.exoInstructions}>{exercice.instructions}</p>
          )}
          {exercice.questions.map((q, i) => (
            <QuestionQCM key={q.id} question={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Panel conjugaison avec sous-onglets ────────────────────────────────────
const ConjugaisonPanel = ({ chapitre }) => {
  const [activeOnglet, setActiveOnglet] = useState(chapitre.sousOnglets[0].id);
  const [tab, setTab] = useState('cours');

  const handleOngletChange = (id) => { setActiveOnglet(id); setTab('cours'); };
  const onglet = chapitre.sousOnglets.find((o) => o.id === activeOnglet);
  if (!onglet) return null;

  const nbExercices = onglet.exercices?.length ?? 0;

  return (
    <div className={styles.conjPanel}>
      {/* Niveau 1 : sous-onglets */}
      <nav className={styles.conjNav} role="tablist">
        {chapitre.sousOnglets.map((o) => (
          <button key={o.id} role="tab" aria-selected={activeOnglet === o.id}
            className={`${styles.conjNavBtn} ${activeOnglet === o.id ? styles.conjNavBtnActive : ''}`}
            style={activeOnglet === o.id ? { borderColor: chapitre.color, color: chapitre.color } : {}}
            onClick={() => handleOngletChange(o.id)}
          >{o.label}</button>
        ))}
      </nav>

      {/* Niveau 2 : Cours | Exercices */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'cours' ? styles.tabActive : ''}`}
          style={tab === 'cours' ? { borderBottomColor: chapitre.color } : {}}
          onClick={() => setTab('cours')}>📚 Cours</button>
        <button className={`${styles.tab} ${tab === 'exercices' ? styles.tabActive : ''}`}
          style={tab === 'exercices' ? { borderBottomColor: chapitre.color } : {}}
          onClick={() => setTab('exercices')}>
          ✏️ Exercices
          {nbExercices > 0 && (
            <span className={styles.tabBadge} style={{ background: chapitre.color }}>{nbExercices}</span>
          )}
        </button>
      </div>

      {/* Cours */}
      {tab === 'cours' && (
        <div className={styles.coursContent}>
          {onglet.lecon?.map((lecon) => <LeconSection key={lecon.id} lecon={lecon} />)}
          {nbExercices > 0 && (
            <button className={styles.btnGoTrain} style={{ background: chapitre.color }}
              onClick={() => setTab('exercices')}>✏️ Passer aux exercices →</button>
          )}
        </div>
      )}

      {/* Exercices */}
      {tab === 'exercices' && (
        <div className={styles.entrainementContent}>
          {nbExercices === 0 ? (
            <p className={styles.emptyMsg}>Pas encore d'exercices pour cet onglet.</p>
          ) : (
            <>
              <p className={styles.exoListIntro}>
                {nbExercices} exercice{nbExercices > 1 ? 's' : ''} disponible{nbExercices > 1 ? 's' : ''} — clique sur un exercice pour le déplier.
              </p>
              {onglet.exercices.map((exo) => (
                <ExerciceBlock key={exo.id} exercice={exo} color={chapitre.color} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Panel standard (tous les autres chapitres) ──────────────────────────────
const ChapitrePanel = ({ chapitre }) => {
  if (chapitre.sousOnglets) return <ConjugaisonPanel chapitre={chapitre} />;

  const [tab, setTab] = useState('cours');
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const correct = chapitre.questions.filter((q) => submitted[q.id] && answers[q.id] === q.answer).length;
  const totalSubmitted = Object.keys(submitted).length;

  return (
    <div className={styles.chapitrePanel}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'cours' ? styles.tabActive : ''}`}
          style={tab === 'cours' ? { borderBottomColor: chapitre.color } : {}} onClick={() => setTab('cours')}>
          📚 Cours
        </button>
        <button className={`${styles.tab} ${tab === 'entrainement' ? styles.tabActive : ''}`}
          style={tab === 'entrainement' ? { borderBottomColor: chapitre.color } : {}} onClick={() => setTab('entrainement')}>
          ✏️ Entraînement
          {totalSubmitted > 0 && <span className={styles.tabBadge} style={{ background: chapitre.color }}>{correct}/{totalSubmitted}</span>}
        </button>
      </div>
      {tab === 'cours' && (
        <div className={styles.coursContent}>
          {chapitre.lecon.map((lecon) => <LeconSection key={lecon.id} lecon={lecon} />)}
          <button className={styles.btnGoTrain} style={{ background: chapitre.color }} onClick={() => setTab('entrainement')}>
            ✏️ Passer aux exercices →
          </button>
        </div>
      )}
      {tab === 'entrainement' && (
        <div className={styles.entrainementContent}>
          {totalSubmitted > 0 && <ScoreBar correct={correct} total={totalSubmitted} color={chapitre.color} />}
          {chapitre.questions.map((q, i) => <QuestionQCM key={q.id} question={q} index={i} />)}
        </div>
      )}
    </div>
  );
};

// ─── Page principale ─────────────────────────────────────────────────────────
const CoursPage = () => {
  const [activeId, setActiveId] = useState(COURS_DATA[0].id);
  const chapitre = COURS_DATA.find((c) => c.id === activeId);

  return (
    <section>
      <div className={styles.hero}>
        <h1>Apprendre</h1>
        <p className={styles.heroSub}>7 chapitres de grammaire essentiels pour le TOEIC — cours détaillés + exercices corrigés</p>
      </div>
      <nav className={styles.chapNav} aria-label="Chapitres">
        {COURS_DATA.map((c) => (
          <button key={c.id}
            className={`${styles.chapBtn} ${activeId === c.id ? styles.chapBtnActive : ''}`}
            style={activeId === c.id ? { borderColor: c.color, color: c.color } : {}}
            onClick={() => setActiveId(c.id)} aria-current={activeId === c.id ? 'true' : undefined}>
            <span className={styles.chapIcon}>{c.icon}</span>
            <span className={styles.chapLabel}>{c.title}</span>
          </button>
        ))}
      </nav>
      {chapitre && (
        <div className={styles.chapitreWrap} key={chapitre.id}>
          <div className={styles.chapitreHeader} style={{ borderLeftColor: chapitre.color }}>
            <span className={styles.chapitreHeaderIcon}>{chapitre.icon}</span>
            <div>
              <h2 className={styles.chapitreTitle} style={{ color: chapitre.color }}>{chapitre.title}</h2>
              <p className={styles.chapitreSubtitle}>
                {chapitre.sousOnglets
                  ? `${chapitre.sousOnglets.length} modules · Cours + Exercices par type de temps`
                  : `${chapitre.lecon.length} leçon${chapitre.lecon.length > 1 ? 's' : ''} · ${chapitre.questions.length} questions d'entraînement`}
              </p>
            </div>
          </div>
          <ChapitrePanel chapitre={chapitre} />
        </div>
      )}
    </section>
  );
};

export default CoursPage;
