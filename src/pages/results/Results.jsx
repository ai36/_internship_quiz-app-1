import { Button } from "@components/button/Button";
import resultImage from "@img/result.svg";
import stylesCard from "@components/card/card.module.css";
import styles from "./results.module.css";
import { useEffect } from "react";
import { getResultMessage } from "@utils/resultMessage";

export function Results({ results, onWelcome }) {
    const resultText = getResultMessage(results, styles);

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
                        <img className={styles.pic} width="196" height="196" src={resultImage} alt="Ваш..." />
                    </div>
                    <div className={`${stylesCard.titleBox} ${styles.titleBox}`}>
                        <h2 className={`${stylesCard.title} ${styles.title}`}>Результат</h2>
                        <p className={`${stylesCard.subtitle} ${styles.subtitle || ''}`} dangerouslySetInnerHTML={{ __html: resultText }}></p>
                    </div>
                    <div>
                        <Button text="Попробовать еще" onWelcome={onWelcome} disabled={false} />
                    </div>
                </div>
            </section>
        </main>
    );
}
