import { Icon } from "@components/icon/Icon";
import styles from "./button.module.css";

export function Button({ text, onQuiz, onWelcome, currentQuestion, disabled = true }) {
    const handleClick = () => {
        if (onQuiz) {
            onQuiz(currentQuestion);
        } else if (onWelcome) {
            onWelcome();
        }
    };

    return (
        <div className={styles.buttonBox}>
            <button 
                className={styles.button} 
                disabled={disabled} 
                type="button" 
                onClick={handleClick} 
                aria-describedby="button-descriptor"
            >
                {text}
            </button>
            <span className={styles.text} id="button-descriptor">
                или нажми <b>Enter <Icon name="enter" /></b>
            </span>
        </div>
    );
}