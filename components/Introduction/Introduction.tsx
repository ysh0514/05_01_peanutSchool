import { useState, useEffect } from 'react';
import { introductionMessage } from '../../constants/constants';
import { InViewProps } from '../../utils/inViewType';
import styles from './Introduction.module.scss';

export default function Introduction({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <div
      className={!isAnimation ? styles.container : styles.textTransition}
      ref={wRef}
    >
      <img
        className={!isAnimation ? styles.logo : styles.logoTransform}
        src="/images/logo.png"
        alt="회사 로고"
      />
      <h2 className={!isAnimation ? styles.title : styles.titleTransform}>
        땅콩스쿨이란?
      </h2>
      <div className={!isAnimation ? styles.message : styles.messageTransform}>
        {introductionMessage}
      </div>
    </div>
  );
}
