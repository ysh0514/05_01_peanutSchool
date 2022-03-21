import styles from './InfiniteScrollBooks.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { scrollBookImages } from '../../constants/constants';
import { InViewProps } from '../../utils/inViewType';

export default function InfiniteScrollBooks({ wRef, wInView }: InViewProps) {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    if (wInView) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [wInView]);

  return (
    <div className={styles.container} ref={wRef}>
      <div className={styles.contentContainer}>
        <div
          className={
            !isScroll ? styles.topTextWrapper : styles.topTextTransition
          }
        >
          <h3 className={!isScroll ? styles.titleText : styles.titleTransform}>
            입학 전 1000권 읽기!<br></br>
            땅콩스쿨로 도전해보세요.
          </h3>
          <p
            className={
              !isScroll ? styles.descriptionText : styles.descriptionTransform
            }
          >
            매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.<br></br>
            독서를 통해 배움의 즐거움을 알아가 보세요.
          </p>
        </div>
        <div className={styles.slider}>
          <div
            className={
              isScroll === false ? styles.nonSlideBox : styles.slideBox
            }
          >
            {scrollBookImages.map((e, idx) => {
              return (
                <img
                  key={idx}
                  className={styles.scrollBookImages}
                  src={e.src}
                  alt={e.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
