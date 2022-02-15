import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <p>back to tab page</p>
      </button>
    </div>
  );
}
