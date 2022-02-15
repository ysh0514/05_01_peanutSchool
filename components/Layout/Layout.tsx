import Head from 'next/head';

export default function Layout() {
  return (
    <Head>
      <title>땅콩스쿨</title>
      <meta
        name="description"
        content="3만원으로 즐기는 매달 새로운 32권의 독서 커리큘럼. 평일 4~9시 캐릭터 선생님과 실시간 랜선라이브에 참여하세요!"
      />
      <meta property="og:title" content="땅콩스쿨" />
      <meta property="og:url" content="https://ddangkongschool.com"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:image"
        content="https://ddangkongschool.com/meta_img.png"
      ></meta>
      <meta
        property="og:description"
        content="캐릭터 선생님과 함께 실시간으로 즐기는 독서클래스"
      ></meta>
    </Head>
  );
}
