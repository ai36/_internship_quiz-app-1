import { Counter } from "@components/counter/Counter";
import { Button } from "@components/button/Button";
import stylesCard from "@components/card/card.module.css";
import styles from "./welcome.module.css";

import { useState, useEffect } from "react";

export function Welcome({ onQuiz, value, onChange }) {
    const [isInputFocus, setIsInputFocus] = useState(false);
    const [isInputValid, setIsInputValid] = useState(true);

    const handleCounterChange = (newValue, isValid) => {
        onChange(newValue);
        setIsInputValid(isValid);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && onQuiz && !isInputFocus && isInputValid && document.activeElement.id !== "logotype") {
                onQuiz();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onQuiz, isInputFocus, isInputValid]);

    return (
        <main>
            <h1 className="visually-hidden">Добро пожаловать на викторину!</h1>
            <section>
                <div className={`${stylesCard.card} ${styles.card}`}>
                    <div className={stylesCard.titleBox}>
                        <h2 className={stylesCard.title}>Добро пожаловать</h2>
                        <span className={stylesCard.subtitle}>на&nbsp;викторину по&nbsp;странам и&nbsp;столицам!</span>
                    </div>
                    <div className={`${stylesCard.answerBox} ${styles.answerBox}`}>
                        <p className={styles.text}>Выбери количество вопросов:</p>
                        <Counter 
                            value={value} 
                            onChange={handleCounterChange} 
                            onFocus={() => setIsInputFocus(true)} 
                            onBlur={() => setIsInputFocus(false)}
                            onQuiz={onQuiz}
                            isInputValid={isInputValid}
                        />
                    </div>
                    <div>
                        <Button 
                            text="Начать" 
                            onQuiz={isInputValid ? onQuiz : null} 
                            disabled={!isInputValid}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}