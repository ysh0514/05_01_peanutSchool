import React, { useEffect, useRef, useState } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './LiveVideo.module.scss';

export default function LiveVideo({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState(false);
  const vidRef: any = useRef(null);

  const playVideo = () => {
    vidRef.current.play();
  };

  const pauseVideo = () => {
    vidRef.current.pause();
  };

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
      playVideo();
    } else {
      setIsAnimation(false);
      pauseVideo();
    }
  }, [wInView]);

  return (
    <div ref={wRef} className={styles.container}>
      <div className={styles.backgroundStripe}></div>
      <div className={styles.contentWrapper}>
        <div className={!isAnimation ? styles.leftTextsWrapper : styles.textTransition}>
          <h3 className={!isAnimation ? styles.titleText : styles.titleTransform}>
            랜선 라이브 <br></br>북클래스
          </h3>
          <p className={!isAnimation ? styles.descriptionText : styles.descriptionTransform}>
            친구들과 함께<br></br>
            그림 그리기 , 퀴즈풀기.
            <br></br>
            선생님과 대화하며 경험해요!
          </p>
        </div>
        <div className={styles.MediaContentWrapper}>
          <img className={styles.tabletImg} src="./images/tablet.png" />
          <div className={styles.tabletBackground}>
            <video
              className={styles.liveVideo}
              ref={vidRef}
              muted
              autoPlay
              loop
              src="./videos/LiveVideo.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
