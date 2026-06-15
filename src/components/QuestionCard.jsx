import styles from './QuestionCard.module.css';

const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

/**
 * Affiche une question à choix multiples.
 *
 * Props :
 *   hideChoiceText  — si true, n'affiche que la lettre (A B C D), pas le texte.
 *                     Utilisé pour la Part 1 (photos) : dans le vrai TOEIC,
 *                     on entend les propositions, on ne les lit pas.
 *                     Après validation, le texte est toujours révélé pour
 *                     permettre de comprendre l'explication.
 */
const QuestionCard = ({
  question,
  index,
  selected,
  onSelect,
  submitted,
  hideChoiceText = false,
  fallbackPrompt,
}) => {
  const promptText = question.prompt || question.sentence || fallbackPrompt;
  const isCorrect  = submitted && selected === question.answer;
  const isAnswered = selected !== undefined && selected !== null;

  return (
    <fieldset className={styles.card}>
      <legend className={styles.legend}>
        Question {index + 1}
        {promptText ? ` — ${promptText}` : ''}
      </legend>

      <div className={styles.choices}>
        {question.choices.map((choice, ci) => {
          const isSelected    = selected === ci;
          const isAnswerChoice = ci === question.answer;
          let stateClass = '';
          if (submitted) {
            if (isAnswerChoice) stateClass = styles.correct;
            else if (isSelected) stateClass = styles.incorrect;
          }

          return (
            <label key={ci} className={`${styles.choice} ${stateClass}`}>
              <input
                type="radio"
                name={question.id}
                value={ci}
                checked={isSelected}
                disabled={submitted}
                onChange={() => onSelect(ci)}
              />
              <span className={styles.choiceLabel}>{CHOICE_LABELS[ci]}</span>
              {/* Texte de la proposition :
                  - caché avant validation si hideChoiceText (Part 1)
                  - toujours visible après validation pour lire l'explication */}
              {(!hideChoiceText || submitted) && (
                <span className={hideChoiceText && submitted ? styles.revealedChoice : undefined}>
                  {choice}
                </span>
              )}
            </label>
          );
        })}
      </div>

      {submitted && (
        <p className={isCorrect ? styles.feedbackOk : styles.feedbackKo} role="status">
          {isCorrect
            ? '✅ Bonne réponse.'
            : isAnswered
            ? `❌ Réponse incorrecte. La bonne réponse était ${CHOICE_LABELS[question.answer]}.`
            : '⚠️ Pas de réponse donnée.'
          }{' '}
          {question.explanation}
        </p>
      )}
    </fieldset>
  );
};

export default QuestionCard;