import { useEffect, useState } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from "./AnyTime.module.scss";

export default function AnyTime({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <section className={styles.anyTimeContainer} ref={wRef}>
      <div className={!isAnimation ?  styles.anyTimeWrapper : styles.textTransition}>
        <h1 className={!isAnimation ? styles.title : styles.titleTransform}>
          실시간 방송 형태로 제공되는 
          <br /> 
          신개념 책 읽기
        </h1>
        <p className={!isAnimation ? styles.text : styles.textTransform}>
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
