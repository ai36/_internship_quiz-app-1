import { RadioButton } from "@components/radio-button/RadioButton";
import stylesCard from "@components/card/card.module.css";
import styles from "./answer.module.css";
import { Icon } from "@components/icon/Icon";

export function Answer({ answer, onOptionChange, isAnswered = false, selectedOption, correctAnswer }) {
  return (
    <ul className={`${stylesCard.answerBox} ${styles.answerBox}`}>
      {answer.variants.map((item, index) => {
        const isSelected = selectedOption === item;
        const isCorrect = item === correctAnswer;
        const showCorrect = isAnswered && isCorrect;
        const showWrong = isAnswered && isSelected && !isCorrect;

        return (
          <li className={`${stylesCard.answerItem || ""} ${styles.answerItem} ${showCorrect ? styles.correctAnswer : ""} ${showWrong ? styles.wrongAnswer : ""}`} key={`${item}-${index}`}>
            <RadioButton answer={item} onOptionChange={onOptionChange} isAnswered={isAnswered} checked={isSelected} accessKey={index + 1} />
            {showCorrect && (
              <div className={styles.success}>
                <Icon name="success" />
              </div>
            )}
            {showWrong && (
              <div className={styles.wrong}>
                <Icon name="wrong" />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
