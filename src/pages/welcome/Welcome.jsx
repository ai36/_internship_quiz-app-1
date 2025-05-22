import { Counter } from "@components/counter/Counter";
import { Button } from "@components/button/Button";
import stylesCard from "@components/card/card.module.css";
import styles from "./welcome.module.css";

import { useState, useEffect } from "react";

export function Welcome({ onQuiz, value, onChange }) {
    const [isInputFocus, setIsInputFocus] = useState(false);
    const [isInputValid, setIsInputValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleCounterChange = (newValue, isValid) => {
        onChange(newValue);
        setIsInputValid(isValid);
    };

    const startQuiz = () => {
        setIsLoading(true);
        setTimeout(() => {
            onQuiz();
        }, 1500);
    }

    const handleQuizStart = () => {
        if (!isInputValid) return;
        startQuiz();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && onQuiz && !isInputFocus && isInputValid && document.activeElement.id !== "logotype") {
                startQuiz();
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
                        <p className={stylesCard.subtitle}>на&nbsp;викторину по&nbsp;странам<br />и&nbsp;столицам!</p>
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
                            isLoading={isLoading}
                        />
                    </div>
                    <div>
                        <Button 
                            text="Начать" 
                            onQuiz={isInputValid ? handleQuizStart : null} 
                            disabled={!isInputValid || isLoading}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}