import styles from './CheckedBook.module.scss';

export default function CheckedBook() {
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
        <div className={styles.rightContentsWrapper}>
          <div className={styles.checkedImagesWrapper}>
            <img
              className={styles.checkedImage}
              src="./images/check.png"
              alt="체크 이미지"
            />
            <img
              className={styles.checkedImage}
              src="./images/check.png"
              alt="체크 이미지"
            />
            <img
              className={styles.checkedImage}
              src="./images/check.png"
              alt="체크 이미지"
            />
          </div>
          <div className={styles.cardImagesWrapper}>
            <img
              className={styles.BookImage}
              src="./images/img_book_1.png"
              alt="책 이미지1"
            />
            <img
              className={styles.BookImage}
              src="./images/img_book_2.png"
              alt="책 이미지2"
            />
            <img
              className={styles.BookImage}
              src="./images/img_book_3.png"
              alt="책 이미지3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
