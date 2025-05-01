import stylesCard from "@components/card/card.module.css";
import styles from "./question.module.css";

export function Question({ question }) {
    return (
        <figure className={`${stylesCard.questionBox} ${styles.questionBox}`}>
            <img
                className={styles.pic}
                src={question.image}
                width={question.imageWidth}
                height={question.imageHeight}
                alt={question.imageAlt}
            />
            <figcaption className={`${stylesCard.subtitle} ${styles.subtitle || ''}`}>{question.question}</figcaption>
        </figure>
    );
}
