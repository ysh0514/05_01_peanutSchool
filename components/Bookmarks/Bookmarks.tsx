import { bookmarkMessages } from '../../constants/constants';
import useScroll from '../../hooks/useScroll';
import styles from './Bookmarks.module.scss';

export default function Bookmarks() {
  const scrollPosition: number = useScroll();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2
          className={
            scrollPosition < 5900 ? styles.title : styles.titleTransform
          }
        >
          땅콩스쿨만의 특징
        </h2>
        <ul
          className={
            scrollPosition < 6000
              ? styles.cardWrapper
              : scrollPosition < 6900
              ? styles.leftToRight
              : styles.rightToLeft
          }
        >
          <li
            className={
              scrollPosition < 6000
                ? styles.card
                : scrollPosition < 6900
                ? styles.bottomToTop
                : styles.topToBottom
            }
          >
            <img
              className={styles.leftString}
              src="/images/string_left.png"
              alt="끈"
            />
            <img
              className={styles.cardImage}
              src="/images/bookmarks.png"
              alt="북마크 카드"
            />
            <div className={styles.content}>
              <img
                className={styles.icon}
                src="/images/videoclass_icon.png"
                alt="비디오 아이콘"
              />
              <span className={styles.cardTitle}>화상 수업</span>
              <div className={styles.description}>{bookmarkMessages[0]}</div>
            </div>
          </li>
          <li
            className={
              scrollPosition < 6000
                ? styles.card
                : scrollPosition < 6900
                ? styles.bottomToTop
                : styles.topToBottom
            }
          >
            <img
              className={styles.centerString}
              src="/images/string_center.png"
              alt="끈"
            />
            <img
              className={styles.cardImage}
              src="/images/bookmarks.png"
              alt="북마크 카드"
            />
            <div className={styles.content}>
              <img
                className={styles.icon}
                src="/images/bidirectional_icon.png"
                alt="양방향 아이콘"
              />
              <span className={styles.cardTitle}>양방향</span>
              <div className={styles.description}>{bookmarkMessages[1]}</div>
            </div>
          </li>
          <li
            className={
              scrollPosition < 6000
                ? styles.card
                : scrollPosition < 6900
                ? styles.bottomToTop
                : styles.topToBottom
            }
          >
            <img
              className={styles.rightStirng}
              src="/images/string_right.png"
              alt="끈"
            />
            <img
              className={styles.cardImage}
              src="/images/bookmarks.png"
              alt="북마크 카드"
            />
            <div className={styles.content}>
              <img
                className={styles.icon}
                src="/images/character_icon.png"
                alt="캐릭터 아이콘"
              />
              <span className={styles.cardTitle}>캐릭터</span>
              <div className={styles.description}>{bookmarkMessages[2]}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
