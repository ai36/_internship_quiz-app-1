import styles from "./radioButton.module.css";

export function RadioButton({ answer, onOptionChange, isAnswered, checked }) {
    return (
        <label className={styles.item}>
            <input
                className={styles.radio}
                tabIndex={0}
                type="radio"
                name="answers"
                onChange={() => onOptionChange(answer)}
                disabled={isAnswered}
                checked={checked}
            />
            <span>{answer}</span>
        </label>
    );
}