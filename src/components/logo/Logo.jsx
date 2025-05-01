import logo from "@img/logo.svg";
import styles from "./logo.module.css";

export function Logo() {
    return (
        <a className={styles.link} href="/" id="logotype">
            <img className={styles.pic} src={logo} width="178" height="48" alt="Логотип Quiz app" />
        </a>
    );
}
