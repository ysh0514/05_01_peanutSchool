import React, { useState, useEffect } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './DownloadNow.module.scss';

export default function DownloadNow({ wRef, wInView }: InViewProps) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [speechBubble, setSpeechBubble] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
      setIsClick(true);
      setTimeout(() => {
        setSpeechBubble(true);
      }, 700);
    } else {
      setIsAnimation(false);
      setIsClick(false);
      setSpeechBubble(false);
    }
  }, [wInView]);

  return (
    <>
      <section className={styles.downloadContainer} ref={wRef}>
        <h1 className={!isAnimation ? styles.title : styles.titleTransform}>지금 다운로드 받으세요!</h1>
        <div className={styles.couponWrapper}>
          <img className={styles.coupon} src="/images/coupon.png" alt="쿠폰" />
          <img
            className={styles.couponText}
            src="/images/coupon_text.png"
            alt="책을 보는 새로운 방법, 지금 가입하시면 매주 8권의 동화책을 보실 수 있어요"
          />
          <img
            className={
              speechBubble ? styles.speechBubbleOn : styles.speechBubbleOff
            }
            src="/images/speech_bubble.png"
            alt="회원가입에 걸리는 시간 단 3초"
          />
          <img
            className={isClick ? styles.appDownloadOn : styles.appDownloadOff}
            src="/images/app_download.png"
            alt="앱 다운로드 하기"
          />
        </div>
      </section>
    </>
  );
}
