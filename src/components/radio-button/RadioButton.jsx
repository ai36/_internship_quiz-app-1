import { useEffect, useRef } from "react";
import styles from "./radioButton.module.css";

export function RadioButton({ answer, onOptionChange, isAnswered, checked, accessKey }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (checked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

  return (
    <label className={styles.item} accessKey={accessKey}>
      <input
        ref={inputRef}
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
