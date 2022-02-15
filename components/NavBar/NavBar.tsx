import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img 
          className={styles.logoImage} 
          src="/images/header_logo.png" 
          alt="땅콩스쿨 로고" 
        />
        {/* <img 
          className={styles.logoImage} 
          src="/images/header_dark_logo.png" 
          alt="땅콩스쿨 로고" 
        /> */}
        <ul className={styles.menuList}>
          <li className={styles.menuMargin}>
            도서 구매
          </li>
          <li className={styles.menuMargin}>
            장바구니
          </li>
          <li>
            마이페이지
          </li>
          <li></li>
          <li className={styles.menuMargin}>
            이용권 관리
          </li>
          <li>
            로그인/회원가입
          </li>
        </ul>
      </header>
    </div>
  );
}
