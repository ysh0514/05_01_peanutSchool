import { useEffect, useState } from 'react';
import styles from './LiveVideo.module.scss';

export default function LiveVideo({ wRef, wInView }) {
  const [isDown, setIsDown] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  const onScroll = (e) => {
    // console.log(window.innerHeight);
    // console.log(document.body.scrollHeight);
    const myScroll = e.srcElement.scrollingElement.scrollTop;
    if (myScroll < 1300) {
      setIsDown(true);
    } else if (myScroll > 2700) {
      setIsDown(false);
    }
    // console.log(myScroll);

    // console.log(e.target.scrollingElement.clientHeight);
    // const scrollHeight = e.body.scrollHeight;
    // const { viewBoardList, viewCount, no } = e.state;
  };
  const downAnimated = isDown && wInView;
  const upAnimated = !isDown && wInView;

  // const style = downAnimated === true && wInview;

  // console.log('스크롤 다운중일때 :', downAnimated);
  // console.log('스크롤 올리는 중일때 :', upAnimated);
  console.log(wInView);
  return (
    <div ref={wRef} className={styles.container}>
      <div className={styles.backgroundStripe}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.leftTextsWrapper}>
          <h3 className={styles.titleText}>
            랜선 라이브 <br></br>북클래스
          </h3>
          <p className={styles.descriptionText}>
            친구들과 함께<br></br>
            그림 그리기 , 퀴즈풀기.
            <br></br>
            선생님과 대화하며 경험해요!
          </p>
        </div>
        <div className={styles.MediaContentWrapper}>
          <img className={styles.tabletImg} src="./images/tablet.png" />
        </div>
      </div>
    </div>
  );
}
