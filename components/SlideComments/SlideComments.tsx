import { useEffect, useRef, useState } from 'react';
import { commentsMessages } from '../../constants/constants';
import styles from './SlideComments.module.scss';

export default function SlideComments() {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [x, setX] = useState<number>(0);
  const [second, setSecond] = useState<number>(1);
  const [aniIndex, setAniIndex] = useState<number>(0);

  const indexBarStyle = (aniIndex: number) => {
    if (aniIndex === 0) {
      return styles.yellowFirst;
    } else if (aniIndex === 1) {
      return styles.yellowSecond;
    } else if (aniIndex === 2) {
      return styles.yellowThird;
    } else if (aniIndex === 3) {
      return styles.yellowFourth;
    } else if (aniIndex === 4) {
      return styles.yellowFifth;
    }
  };

  const indexLogoStyle = (aniIndex: number) => {
    if (aniIndex === 0) {
      return styles.logoFirst;
    } else if (aniIndex === 1) {
      return styles.logoSecond;
    } else if (aniIndex === 2) {
      return styles.logoThird;
    } else if (aniIndex === 3) {
      return styles.logoFourth;
    } else if (aniIndex === 4) {
      return styles.logoFifth;
    }
  };

  const aniIndexContentStyle = (aniIndex: number) => {
    if (aniIndex === 0) {
      return styles.logoFirst;
    } else if (aniIndex === 1) {
      return styles.logoSecond;
    } else if (aniIndex === 2) {
      return styles.logoThird;
    } else if (aniIndex === 3) {
      return styles.logoFourth;
    } else if (aniIndex === 4) {
      return styles.logoFifth;
    }
  };

  function useInterval(callback: HTMLDivElement | any, delay: number) {
    const savedCallback = useRef<HTMLDivElement | any>();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    onNextClick();
  }, 5000);

  const onNextClick = () => {
    if (isSliding === true) return;
    setAniIndex((old) => {
      if (old === 4) return 0;
      return old + 1;
    });
    setIsSliding(true);
    setX(-1605);
    setSecond(1);
    setTimeout(() => {
      setSecond(0);
      setIndex((old) => {
        if (old === 4) return 0;
        return old + 1;
      });
      setX(0);
      setIsSliding(false);
    }, 1000);
  };

  const onPrevClick = () => {
    if (isSliding === true) return;
    setAniIndex((old) => {
      if (old === 0) return 4;
      return old - 1;
    });
    setIsSliding(true);
    setX(+1605);
    setSecond(1);
    setTimeout(() => {
      setSecond(0);
      setIndex((old) => {
        if (old === 0) return 4;
        return old - 1;
      });
      setX(0);
      setIsSliding(false);
    }, 1000);
  };

  const prevIndex = index === 0 ? 4 : index - 1;
  const nextIndex = index === 4 ? 0 : index + 1;

  return (
    <div className={styles.container} ref={scrollRef}>
      <img
        className={styles.overlayImg}
        src="/images/overlay.png"
        alt="오버레이 이미지"
      />
      <div className={styles.overlayBlack}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.arrowFlex}>
          <div onClick={onPrevClick} className={styles.arrowContainer}>
            <img
              className={styles.leftArrowImg}
              src="/images/leftArrow.png"
              alt="왼쪽 화살표"
            />
          </div>
          <div onClick={onNextClick} className={styles.arrowContainer}>
            <img
              className={styles.rightArrowImg}
              src="/images/rightArrow.png"
              alt="오른쪽 화살표"
            />
          </div>
        </div>

        <div className={styles.content}>
          <img
            className={styles.childImg}
            src={commentsMessages[aniIndex].src}
            alt="아이 이미지"
          />
          <img
            className={indexLogoStyle(aniIndex)}
            src="/images/childPath.png"
            alt="회사 로고 노란색"
          />
          <div
            className={styles.contentAll}
            style={{
              transform: `translateX(${x}px)`,
              transition: `all ${second}s ease-in-out`,
            }}
            ref={contentRef}
          >
            <div className={styles.contentText}>
              <span className={styles.author}>
                {commentsMessages[prevIndex].id}
              </span>
              <div className={styles.review}>
                {commentsMessages[prevIndex].text}
              </div>
            </div>
            <div className={styles.contentText}>
              <span className={styles.author}>
                {commentsMessages[index].id}
              </span>
              <div className={styles.review}>
                {commentsMessages[index].text}
              </div>
            </div>
            <div className={styles.contentText}>
              <span className={styles.author}>
                {commentsMessages[nextIndex].id}
              </span>
              <div className={styles.review}>
                {commentsMessages[nextIndex].text}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className={styles.slideIndex}>
        <li className={indexBarStyle(aniIndex)}></li>
      </ol>
    </div>
  );
}
