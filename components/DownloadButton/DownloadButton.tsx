import styles from './DownloadButton.module.scss';

export default function DownloadButton() {
  return (
    <button className={styles.buttonWrapper}>
      <img className={styles.peanutImg} src="./images/peanut.png" alt="땅콩" />
      <p className={styles.downloadText}>다운로드</p>
    </button>
  );
}
