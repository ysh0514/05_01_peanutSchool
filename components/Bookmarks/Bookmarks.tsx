import styles from './Bookmarks.module.scss';

const messages = [
  '휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.',
  '화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.',
  '친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.',
];

export default function Bookmarks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>땅콩스쿨만의 특징</h2>
        <ul className={styles.cardWrapper}>
          <li className={styles.card}>
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
              <div className={styles.description}>{messages[0]}</div>
            </div>
          </li>
          <li className={styles.card}>
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
              <div className={styles.description}>{messages[1]}</div>
            </div>
          </li>
          <li className={styles.card}>
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
              <div className={styles.description}>{messages[2]}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
