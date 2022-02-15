import styles from './LiveVideo.module.scss';

export default function LiveVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundStripe}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.leftTextsWrapper}>
          <h3 className={styles.titleText}>
            랜선 라이브 <br></br>북클래스
          </h3>
          <p className={styles.descriptionText}>
            친구들과 함께<br></br>
            그림 그리기 , 퀴즈풀기.
            <br></br>
            선생님과 대화하며 경험해요!
          </p>
        </div>
        <div className={styles.MediaContentWrapper}>
          <img className={styles.tabletImg} src="./images/tablet.png" />
        </div>
      </div>
    </div>
  );
}
