import styles from './InfiniteScrollBooks.module.scss';
import React, { useState, useEffect, useRef } from 'react';

const scrollBookImages = [
  {
    src: './images/scrollBookImg1.png',
    alt: '스크롤 북 이미지1',
  },
  {
    src: './images/scrollBookImg2.png',
    alt: '스크롤 북 이미지2',
  },
  {
    src: './images/scrollBookImg3.png',
    alt: '스크롤 북 이미지3',
  },
  {
    src: './images/scrollBookImg4.png',
    alt: '스크롤 북 이미지4',
  },
  {
    src: './images/scrollBookImg5.png',
    alt: '스크롤 북 이미지5',
  },
  {
    src: './images/scrollBookImg6.png',
    alt: '스크롤 북 이미지6',
  },
  {
    src: './images/scrollBookImg7.png',
    alt: '스크롤 북 이미지7',
  },
  {
    src: './images/scrollBookImg8.png',
    alt: '스크롤 북 이미지8',
  },
  {
    src: './images/scrollBookImg1.png',
    alt: '스크롤 북 이미지1',
  },
  {
    src: './images/scrollBookImg2.png',
    alt: '스크롤 북 이미지2',
  },
  {
    src: './images/scrollBookImg3.png',
    alt: '스크롤 북 이미지3',
  },
  {
    src: './images/scrollBookImg4.png',
    alt: '스크롤 북 이미지4',
  },
  {
    src: './images/scrollBookImg5.png',
    alt: '스크롤 북 이미지5',
  },
  {
    src: './images/scrollBookImg6.png',
    alt: '스크롤 북 이미지6',
  },
  {
    src: './images/scrollBookImg7.png',
    alt: '스크롤 북 이미지7',
  },
  {
    src: './images/scrollBookImg8.png',
    alt: '스크롤 북 이미지8',
  },
  {
    src: './images/scrollBookImg1.png',
    alt: '스크롤 북 이미지1',
  },
  {
    src: './images/scrollBookImg2.png',
    alt: '스크롤 북 이미지2',
  },
  {
    src: './images/scrollBookImg3.png',
    alt: '스크롤 북 이미지3',
  },
  {
    src: './images/scrollBookImg4.png',
    alt: '스크롤 북 이미지4',
  },
  {
    src: './images/scrollBookImg5.png',
    alt: '스크롤 북 이미지5',
  },
  {
    src: './images/scrollBookImg6.png',
    alt: '스크롤 북 이미지6',
  },
  {
    src: './images/scrollBookImg7.png',
    alt: '스크롤 북 이미지7',
  },
  {
    src: './images/scrollBookImg8.png',
    alt: '스크롤 북 이미지8',
  },
];

export default function InfiniteScrollBooks({ wRef, wInView }: any) {
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
        <div className={styles.topTextWrapper}>
          <h3 className={styles.titleText}>
            입학 전 1000권 읽기!<br></br>
            땅콩스쿨로 도전해보세요.
          </h3>
          <p className={styles.descriptionText}>
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
