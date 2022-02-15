import { useEffect, useState } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './MainImage.module.scss';

export default function MainImage({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <div className={styles.imageContainer} ref={wRef}>
      <img 
        src='/images/main_image_background.png'
        alt='메인 배경 이미지' 
      />
      <img 
        src='/images/main_image_child.png' 
        alt='메인 배경 이미지' 
      />
      <div className={!isAnimation ? styles.imageText : styles.textTransform}>
        <h1>
          책 읽는 재미, 
          <br/> 
          땅콩스쿨이 
          <br/> 
          만들어줄게요!
        </h1>
        <img 
          className={styles.starImage} 
          src="/images/star.png" 
          alt="별표 이미지" 
        />
        <img 
          className={styles.lineImage} 
          src="/images/line.png" 
          alt="밑줄 이미지" 
        />
      </div>
      <img 
        className={styles.mouseImage} 
        src="/images/mouse.png" 
        alt="마우스 이미지" 
      />
    </div>
  );
}
