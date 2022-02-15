import styles from "./AnyTime.module.scss";

export default function AnyTime() {
  return (
    <section className={styles.anyTimeContainer}>
      <div className={styles.anyTimeWrapper}>
        <h1>
          실시간 방송 형태로 제공되는 
          <br /> 
          신개념 책 읽기
        </h1>
        <p>
          방송 중이라면 언제든 접속하세요. 
          <br />
          수강신청, 수업예약 없이 편하게 수업참여가 가능해요.
        </p>
      </div>
      <img 
        className={styles.anyTimeImage} 
        src="/images/anytime_image.png" 
        alt="태블릿 모바일 이미지"
      />
    </section>
  );
}
