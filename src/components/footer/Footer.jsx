import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                Проект выполнен в рамках стажировки <a className={styles.link} href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a>
            </p>
        </footer>
    );
}
