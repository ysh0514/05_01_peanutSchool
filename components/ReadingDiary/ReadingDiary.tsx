import { useState, useEffect } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './ReadingDiary.module.scss';

export default function ReadingDiary({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <section className={styles.diaryContainer} ref={wRef}>
      <div className={!isAnimation ? styles.diaryWrapper : styles.textTransition}>
        <h1 className={!isAnimation ? styles.title : styles.titleTransform}>
          매일 매일 
          <br />
          알아서 기록하는 독서 일기
        </h1>
        <p className={!isAnimation ? styles.text : styles.textTransform}>
          오늘은 아이가 어떤 책을 읽었는지, 
          어떤 활동에 참여했는지 독서일기를 통해 확인해보세요. 
          <br />
          읽기만 해도 자동으로 기록되고, 공유도 가능해요.
        </p>
      </div>
      <img 
        className={styles.diaryImage} 
        src="/images/diary_image.png" 
        alt="독서 일기 이미지" 
      />
    </section>
  );
}
