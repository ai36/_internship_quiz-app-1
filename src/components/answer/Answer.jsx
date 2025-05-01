import { RadioButton } from "@components/radio-button/RadioButton";
import stylesCard from "@components/card/card.module.css";
import styles from "./answer.module.css";
import { Icon } from "@components/icon/Icon";

export function Answer({ answer, onOptionChange, isAnswered = false, selectedOption }) {
    return (
        <ul className={`${stylesCard.answerBox} ${styles.answerBox}`}>
            {answer.variants.map((item, index) => (
                <li className={`${stylesCard.answerItem || ''} ${styles.answerItem} ${(isAnswered && item === answer.correctAnswer ? styles.correctAnswer : '')}`} key={`${item}-${index}`}>
                    <RadioButton
                        answer={item}
                        onOptionChange={onOptionChange}
                        isAnswered={isAnswered}
                        checked={selectedOption === item}
                    />
                    <div className={styles.success}>
                        <Icon name="success" />
                    </div>
                    <div className={styles.wrong}>
                        <Icon name="wrong" />
                    </div>
                </li>
            ))}
        </ul>
    );
}
