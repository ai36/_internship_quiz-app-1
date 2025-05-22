import styles from "./loading.module.css";

export const Loading = () => {

  return (
    <svg className={styles.loadingBox} width="96" height="24" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className={styles.loadingCircle1} cx="18" cy="12" r="7" fill="#F1F1EF" />
      <circle className={styles.loadingCircle2} cx="48" cy="12" r="7" fill="#F1F1EF" />
      <circle className={styles.loadingCircle3} cx="78" cy="12" r="7" fill="#F1F1EF" />
    </svg>
  );
};
