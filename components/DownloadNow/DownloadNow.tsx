import styles from './DownloadNow.module.scss';

export default function DownloadNow() {
  return (
    <section className={styles.downloadContainer}>
      <h1>지금 다운로드 받으세요!</h1>
      <div className={styles.couponWrapper}>
        <img
          className={styles.coupon}
          src="/images/coupon.png"
          alt="쿠폰"
        />
        <img
          className={styles.couponText}
          src="/images/coupon_text.png"
          alt="책을 보는 새로운 방법, 지금 가입하시면 매주 8권의 동화책을 보실 수 있어요"
        />
        <img 
          className={styles.speechBubble}
          src="/images/speech_bubble.png"
          alt="회원가입에 걸리는 시간 단 3초"
        />
        <img 
          className={styles.appDownload}
          src="/images/app_download.png"
          alt="앱 다운로드 하기"
        />
      </div>
    </section>
  );
}
