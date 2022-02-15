import Link from 'next/link';
import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <button className={styles.backButton}>
            <p>back to tab page</p>
          </button>
        </a>
      </Link>
    </div>
  );
}
