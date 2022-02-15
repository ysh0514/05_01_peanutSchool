import styles from './CheckedBook.module.scss';
import { useState } from 'react';

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

export default function CheckedBook() {
  const [isClick, setIsClick] = useState(false);

  const clickButton = () => {
    setIsClick(!isClick);
  };

  return (
    <div className={styles.container}>
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
                isClick === false ? styles.hiddenBox : styles.visibleBox
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
      <button onClick={clickButton}>클릭!</button>
    </div>
  );
}
