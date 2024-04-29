import Image from "next/image";
// import rankingImage from '/ranking_sample.jpg'; // 이미지 가져오기

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFA500', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '50px' }}>
      {/* 메인 페이지의 내용 */}
      <div style={{ borderRadius: '10px', border: '2px solid black', padding: '20px', marginBottom: '20px', backgroundColor: 'white' }}>
        <h1 style={{ fontFamily: 'Arial Black, sans-serif', color: 'black', textAlign: 'center', margin: '0', fontSize: '36px' }}>딸랑네 가족 양파게임 랭킹</h1>
      </div>

      {/* 네모 박스로 구성된 섹션 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        {/* 네모 박스 1 - 현재 랭킹 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginRight: '10px', backgroundColor: 'white' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>현재 랭킹</h3>
        </div>

        {/* 네모 박스 2 - 주간 랭킹 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginRight: '10px', backgroundColor: 'white' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>주간 랭킹</h3>
        </div>

        {/* 네모 박스 3 - 역대 랭킹 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginRight: '10px', backgroundColor: 'white' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>역대 랭킹</h3>
        </div>

        {/* 네모 박스 4 - 우승 횟수 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', backgroundColor: 'white' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>우승 횟수</h3>
        </div>
      </div>

      {/* 새로운 네모 박스 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: '20px' }}>
        {/* 새로운 네모 박스 1 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginBottom: '20px', backgroundColor: 'white', minWidth: '150px' }}>
          <img src='/ranking_sample.jpg' alt="Ranking" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>

        {/* 새로운 네모 박스 2 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginBottom: '20px', backgroundColor: 'white', minWidth: '150px' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>새로운 네모 박스 2</h3>
        </div>

        {/* 새로운 네모 박스 3 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginBottom: '20px', backgroundColor: 'white', minWidth: '150px' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>새로운 네모 박스 3</h3>
        </div>

        {/* 새로운 네모 박스 4 */}
        <div style={{ flex: '1', borderRadius: '10px', border: '2px solid black', padding: '20px', marginBottom: '20px', backgroundColor: 'white', minWidth: '150px' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center', fontSize: '24px' }}>새로운 네모 박스 4</h3>
        </div>
      </div>
    </div>
  );
}
