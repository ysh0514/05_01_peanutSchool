import styles from './SlideComments.module.scss';

const messages = [
  {
    id: 'dahyedahyunmom_amiejjerry',
    text: `밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에 군말없이 들어와 착석하는 마법같은 시간..\n 줄 책을 읽고 생각 말하라고 하는게 아니라,\n재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.\n월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를 통해 확실하게 기억할 수 있도록 해주는\n금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!`,
  },
  {
    id: 'lohasunnymom',
    text: '내 방에 괴물이 나타났다! 자립심을 길러줄 수 있는 책! 땅콩리딩 말미에 책의\n키워드를 알려주니 넘 좋은듯해요. 아이와 이야기를 할 때 저도 포인트를 잘 잡아줄 수 있더라고요.\n이 책이 말하고 싶어하는 것이 무엇인지 아이와 이야기해보고 우리가 해야할 것들에 대해서도\n재잘재잘 나누어보았죠. 우리 아이들도 방은 있지만 아직 따로 자는건 무서워하는데,\n이 책을 읽더니 “엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~',
  },
  {
    id: 'lovely_yunji',
    text: '로즈는 저녁 8시! 매일 25분씩 친구들과 책을 읽어요.\n무용 다녀와 졸린 날도 눈 비비며 얼마나 기다리는지 몰라요.\n스스로도 나는 책은 그렇게 안좋다고 하던 아이가 콧노래 흥얼흥얼 가방 속에 내일 읽을 책을 넣고\n간식,밥 먹으러 내려오며 책 꼭 쥐고 와선 보는 모습이 어찌나 예쁜지… 하루 25분? 모바일로 책을?\n반신반의하며 시작했던 땅콩리딩! 저희집은 대박~ 입니다^^',
  },
  {
    id: 'youngsetmom',
    text: '5시 50분만 되면. 땅콩스쿨 언제하냐고 묻는 소연이. 항상 진지하게 언니 책상에서 시작.\n오늘은 콧구멍 큰 디노네? 디노랑 책읽고 질문에도 손들고 대답하고 싶어하는 소연이.\n사실 소연이는 도연이보다 책과 친하지 않은 아이라 걱정을 많이 했는데.\n이렇게 수업으로라도 매일매일 보게 해주니 너무나 좋다! 오늘의 키워드는 “자립심”\n“엄마,나도 오늘 자립심 갖고 스스로 자볼게요.” 오늘 책도 잘 읽은듯 하구나~',
  },
  {
    id: 'youngsetmom',
    text: '찐 행복한 얼굴^^\n이토록 재미있는 책읽기 프로그램은 없었다!\n금요일은 일주일동안 읽은 4권의 책을 게임을 하며 다시 한번 정리하는 시간~\n춤도 추고 그림도 그리고 숨은 그림찾기에 주제 키워드도 알아가는 시간~\n오늘부터 새로 등장한 친구 버디가 중간 중간 이름 불러주며 칭찬해주니 더 기분 업!업!',
  },
];

export default function SlideComments() {
  return (
    <div className={styles.container}>
      <img
        className={styles.overlayImg}
        src="/images/overlay.png"
        alt="오버레이 이미지"
      />
      <div className={styles.overlayBlack}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.arrowFlex}>
          <div className={styles.arrowContainer}>
            <img
              className={styles.leftArrowImg}
              src="/images/leftArrow.png"
              alt="왼쪽 화살표"
            />
          </div>
          <div className={styles.arrowContainer}>
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
            src="/images/child.png"
            alt="아이 이미지"
          />
          <img
            className={styles.yellowLogo}
            src="/images/childPath.png"
            alt="회사 로고 노란색"
          />
          <div className={styles.contentText}>
            <span className={styles.author}>{messages[0].id}</span>
            <div className={styles.review}>{messages[0].text}</div>
          </div>
        </div>
      </div>
      <ol className={styles.slideIndex}>
        <li className={styles.yellowIndex}></li>
        <li className={styles.yellowIndex}></li>
        <li className={styles.yellowIndex}></li>
        <li className={styles.yellowIndex}></li>
        <li className={styles.yellowIndex}></li>
      </ol>
    </div>
  );
}
