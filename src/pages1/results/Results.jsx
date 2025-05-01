import { Button } from "@components/button/Button";
import resultImage from "@img/result.svg";
import stylesCard from "@components/card/card.module.css";
import styles from "./results.module.css";
import { useEffect } from "react";
import { getPluralized } from "@utils/pluralized";

export function Results({ results, onWelcome }) {
    const { wrong, success } = results;
    let resultText = <>Результат не определен</>;

    if (success === 0 && wrong !== 0)
        resultText = (
            <>
                <span className={styles.subtitle}>Ты не ответил ни на один вопрос. Попробуй еще!</span>
            </>
        );
    if (wrong === 0 && success !== 0)
        resultText = (
            <>
                <span className={styles.subtitle}>Ты&nbsp;ответил правильно на&nbsp;все&nbsp;вопросы. Так&nbsp;держать!</span>
            </>
        );
    if (wrong !== 0 && success !== 0)
        resultText = (
            <>
                Ты&nbsp;ответил правильно на&nbsp;<span className={styles.success}>{success}</span>&nbsp;{getPluralized(success, "question")} и&nbsp;сделал{" "}
                <span className={styles.wrong}>{wrong}</span>
                &nbsp;{getPluralized(wrong, "fall")}.
            </>
        );

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && document.activeElement.id !== "logotype") {
                onWelcome();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onWelcome]);

    return (
        <main>
            <h1 className="visually-hidden">Ознакомьтесь с вашим результатом</h1>
            <section>
                <div className={`${stylesCard.card} ${styles.card}`}>
                    <div className={styles.topImage}>
                        <img className={styles.pic} width="196" height="208" src={resultImage} alt="Ваш..." />
                    </div>
                    <div className={`${stylesCard.titleBox} ${styles.titleBox}`}>
                        <h2 className={`${stylesCard.title} ${styles.title}`}>Результат</h2>
                        <span className={`${stylesCard.subtitle} ${styles.subtitle || ''}`}>{resultText}</span>
                    </div>
                    <div>
                        <Button text="Попробовать еще" onWelcome={onWelcome} disabled={false} />
                    </div>
                </div>
            </section>
        </main>
    );
}
