import styles from './CheckedBook.module.scss';
import { useState, useEffect } from 'react';
import { checkedImages } from '../../constants/constants';

export default function CheckedBook({ wRef, wInView }: any) {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

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
        <div className={styles.leftTextsWrapper}>
          <h3 className={styles.titleText}>
            교육 전문가들이<br></br>
            선정한 도서
          </h3>
          <p className={styles.descriptionText}>
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
