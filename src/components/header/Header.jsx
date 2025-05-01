import { Icon } from "@components/icon/Icon";
import { Logo } from "@components/logo/Logo"
import decore from "@img/question.svg"
import styles from "./header.module.css"

export function Header({ page, onClose }) {
    return (
        <header className={styles.header}>
            <Logo />
            {page === "Welcome" ? <img className={styles.decore} src={decore} width="135" height="146" alt="Декор" /> : null}
            {page === "Quiz" ? <button className={styles.close} type="button" aria-label="Прервать викторину" onClick={onClose}><Icon name="close" /></button> : null}
        </header>
    );
}
