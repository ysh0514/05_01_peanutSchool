import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.company}>(주)호두랩스 </h3>
        <div className={styles.grid}>
          <ul className={styles.companyInfo}>
            <li className={styles.list}>
              <span>대표 : 김민우 | 사업자등록번호 : 431-88-01287</span>
              <a className={styles.companySearch}>사업자 정보 조회</a>
            </li>
            <li className={styles.list}>
              서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
            </li>
            <li className={styles.list}>제주특별시 서귀포시 중정로 86, 304</li>
            <li className={styles.list}>
              통신판매업 신고번호 : 2019-서울강남-00301호
            </li>
            <li className={styles.list}>© Hodoo Labs. ALL RIGHTS RESERVED</li>
          </ul>
          <ul className={styles.information}>
            <li className={styles.infoList}>
              <span className={styles.infoItem}>고객센터</span>
              <span>채팅상담</span>
            </li>
            <li className={styles.infoList}>
              <span className={styles.infoItem}>이용약관</span>
              <span className={styles.privateInfo}>개인정보 처리방침</span>
              <span>환불정책</span>
            </li>
            <li className={styles.iconList}>
              <div className={styles.icon}>
                <img src="/images/instagram_icon.png" alt="인스타그램 아이콘" />
              </div>
              <div className={styles.icon}>
                <img src="/images/blog_icon.png" alt="블로그 아이콘" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
