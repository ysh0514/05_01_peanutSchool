import styles from './MainImage.module.scss';

export default function MainImage() {
  return (
    <div className={styles.imageContainer}>
      <img 
        src='/images/main_image_background.png'
        alt='메인 배경 이미지' 
      />
      <img 
        src='/images/main_image_child.png' 
        alt='메인 배경 이미지' 
      />
      <div className={styles.imageText}>
        <h1>
          책 읽는 재미, 
          <br/> 
          땅콩스쿨이 
          <br/> 
          만들어줄게요!
        </h1>
        <img 
          className={styles.starImage} 
          src="/images/star.png" 
          alt="별표 이미지" 
        />
        <img 
          className={styles.lineImage} 
          src="/images/line.png" 
          alt="밑줄 이미지" 
        />
      </div>
      <img 
        className={styles.mouseImage} 
        src="/images/mouse.png" 
        alt="마우스 이미지" 
      />
    </div>
  );
}
