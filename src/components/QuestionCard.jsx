import styles from './QuestionCard.module.css';

const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

// Affiche une question à choix multiples. Avant validation : simple QCM.
// Après validation (submitted=true) : met en évidence la bonne réponse,
// la réponse choisie si elle est fausse, et affiche l'explication.
const QuestionCard = ({ question, index, selected, onSelect, submitted, fallbackPrompt }) => {
  const promptText = question.prompt || question.sentence || fallbackPrompt;
  const isCorrect = submitted && selected === question.answer;
  const isAnswered = selected !== undefined && selected !== null;

  return (
    <fieldset className={styles.card}>
      <legend className={styles.legend}>
        Question {index + 1}
        {promptText ? ` — ${promptText}` : ''}
      </legend>

      <div className={styles.choices}>
        {question.choices.map((choice, choiceIndex) => {
          const isSelected = selected === choiceIndex;
          const isAnswerChoice = choiceIndex === question.answer;
          let stateClass = '';
          if (submitted) {
            if (isAnswerChoice) stateClass = styles.correct;
            else if (isSelected) stateClass = styles.incorrect;
          }

          return (
            <label key={choice} className={`${styles.choice} ${stateClass}`}>
              <input
                type="radio"
                name={question.id}
                value={choiceIndex}
                checked={isSelected}
                disabled={submitted}
                onChange={() => onSelect(choiceIndex)}
              />
              <span className={styles.choiceLabel}>{CHOICE_LABELS[choiceIndex]}</span>
              <span>{choice}</span>
            </label>
          );
        })}
      </div>

      {submitted && (
        <p className={isCorrect ? styles.feedbackOk : styles.feedbackKo} role="status">
          {isCorrect ? '✅ Bonne réponse.' : isAnswered ? '❌ Réponse incorrecte.' : '⚠️ Pas de réponse donnée.'}{' '}
          {question.explanation}
        </p>
      )}
    </fieldset>
  );
};

export default QuestionCard;
