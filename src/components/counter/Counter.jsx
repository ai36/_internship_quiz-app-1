import { Icon } from "@components/icon/Icon";
import data from "/src/api/mock/quizz_questions.json";
import styles from "./counter.module.css";

import { useState, useEffect } from "react";

const maxCountOfQuestion = data.questions.length;
const limits = {
    min: 1,
    max: maxCountOfQuestion,
    step: 1,
};

const validateInput = (value) => {
    if (value === "") return false;
    if (!/^\d+$/.test(value)) return false;
    const numericValue = parseInt(value, 10);
    return numericValue >= limits.min && numericValue <= limits.max;
};

export function Counter({ value, onChange, onFocus, onBlur, onQuiz, isInputValid }) {
    const [inputValue, setInputValue] = useState(String(value));
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setInputValue(String(value));
        setIsValid(true);
    }, [value]);

    const handleMinus = () => {
        const newValue = Math.max(value - limits.step, limits.min);
        onChange(newValue, true);
    };

    const handlePlus = () => {
        const newValue = Math.min(value + limits.step, limits.max);
        onChange(newValue, true);
    };

    const handleInputChange = (e) => {
        const rawValue = e.target.value;

        if (rawValue === "") {
            setInputValue(rawValue);
            setIsValid(false);
            onChange(value, false);
            return;
        }

        if (!/^\d*$/.test(rawValue)) return;

        const normalizedValue = rawValue.replace(/^0+/, '') || limits.min.toString();
        const numericValue = parseInt(normalizedValue, 10);

        if (numericValue > limits.max) {
            setInputValue(String(limits.max));
            setIsValid(true);
            onChange(limits.max, true);
            return;
        }
        if (numericValue < limits.min) {
            setInputValue(String(limits.min));
            setIsValid(true);
            onChange(limits.min, true);
            return;
        }

        setInputValue(normalizedValue);
        setIsValid(true);
        onChange(numericValue, true);
    };

    const handleInputBlur = (e) => {
        let numericValue = value;
        let inputIsValid = validateInput(inputValue);
        if (!inputIsValid) {
            if (inputValue === "") {
                numericValue = limits.min;
                inputIsValid = true;
                setInputValue(String(numericValue));
            } else {
                numericValue = Math.max(limits.min, Math.min(limits.max, parseInt(inputValue, 10) || limits.min));
                inputIsValid = true;
                setInputValue(String(numericValue));
            }
        } else {
            numericValue = parseInt(inputValue, 10);
        }
        onChange(numericValue, inputIsValid);
        if (onBlur) onBlur(e);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleInputBlur(e);
            if (isInputValid && typeof onQuiz === "function") {
                onQuiz();
            }
        }
    };

    const currentNumericValue = inputValue !== "" ? parseInt(inputValue, 10) : value;

    return (
        <div className={styles.enterNumber}>
            <button
                className={styles.button}
                disabled={currentNumericValue <= limits.min || isNaN(inputValue)}
                type="button"
                aria-label="Сократить количество вопросов"
                onMouseDown={handleMinus}
            >
                <Icon name="minus" />
            </button>
            <input
                className={`${styles.input} ${!isValid ? styles.invalid : ""}`}
                id="questionsCounter"
                type="text"
                value={inputValue}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
            />
            <button
                className={styles.button}
                disabled={currentNumericValue >= limits.max || isNaN(inputValue)}
                type="button"
                aria-label="Добавить дополнительный вопрос"
                onMouseDown={handlePlus}
            >
                <Icon name="plus" />
            </button>
        </div>
    );
}