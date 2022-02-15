import { useState, useEffect } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './Introduction.module.scss';

const message = `실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,\n친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.`;

export default function Introduction({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <div className={!isAnimation ? styles.container : styles.textTransition} ref={wRef}>
      <img className={!isAnimation ? styles.logo : styles.logoTransform} src="/images/logo.png" alt="회사 로고" />
      <h2 className={!isAnimation ? styles.title : styles.titleTransform}>땅콩스쿨이란?</h2>
      <div className={!isAnimation ? styles.message: styles.messageTransform}>{message}</div>
    </div>
  );
}
