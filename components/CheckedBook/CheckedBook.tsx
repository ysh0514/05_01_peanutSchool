import { useState, useEffect } from 'react';
import { InViewProps } from '../../utils/inViewType';
import styles from './CheckedBook.module.scss';

const checkedImages = [
  {
    bookImageSrc: './images/img_book_1.png',
    bookImageAlt: '책 이미지1',
    checkImageSrc: './images/checkImg1.png',
    checkImageAlt: '체크 이미지1',
  },
  {
    bookImageSrc: './images/img_book_2.png',
    bookImageAlt: '책 이미지2',
    checkImageSrc: './images/checkImg2.png',
    checkImageAlt: '체크 이미지2',
  },
  {
    bookImageSrc: './images/img_book_3.png',
    bookImageAlt: '책 이미지3',
    checkImageSrc: './images/checkImg3.png',
    checkImageAlt: '체크 이미지3',
  },
];

export default function CheckedBook({ wRef, wInView }: InViewProps) {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (wInView) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [wInView]);

  return (
    <div className={styles.container} ref={wRef}>
      <div className={styles.contentWrapper}>
        <div className={!isAnimation ? styles.leftTextsWrapper : styles.leftTextTransition}>
          <h3 className={!isAnimation ? styles.titleText : styles.titleTransform}>
            교육 전문가들이<br></br>
            선정한 도서
          </h3>
          <p className={!isAnimation ? styles.descriptionText : styles.descriptionTransform}>
            호두랩스의 교육 전문가들이<br></br>
            교과 수록 , 초등 필수 독서 등<br></br>
            아동 교육에 적합한 도서를<br></br>
            직접 선정해요!
          </p>
        </div>
        <div className={styles.rightContetWrapper}>
          <div className={styles.overflowWrapper}>
            <div
              className={
                isAnimation === false ? styles.hiddenBox : styles.visibleBox
              }
            ></div>
          </div>

          <div className={styles.checkedImagesWrapper}>
            {checkedImages.map((e, idx) => {
              return (
                <div key={idx} className={styles.CheckAndBookWrapper}>
                  <img
                    className={styles.checkedImage}
                    src={e.checkImageSrc}
                    alt={e.checkImageAlt}
                  />
                  <img
                    className={styles.BookImage}
                    src={e.bookImageSrc}
                    alt={e.bookImageAlt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
