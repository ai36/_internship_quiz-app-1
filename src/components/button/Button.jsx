import { Icon, Loading } from "@components";
import styles from "./button.module.css";

export function Button({ text, onQuiz, onWelcome, currentQuestion, disabled = true, isLoading = false }) {
  const handleClick = () => {
    if (onQuiz) {
      onQuiz(currentQuestion);
    } else if (onWelcome) {
      onWelcome();
    }
  };

  return (
    <div className={styles.buttonBox}>
      <button className={styles.button} disabled={disabled} type="button" onClick={handleClick} aria-describedby="button-descriptor">
        {!isLoading ? text : <Loading />}
      </button>
      <span className={styles.text} id="button-descriptor">
        или нажми{" "}
        <b>
          Enter <Icon name="enter" />
        </b>
      </span>
    </div>
  );
}
