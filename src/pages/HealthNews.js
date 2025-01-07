// HealthNews.js
import React from "react";
import FixedNews from '../components/FiexedNews';
import SearchNews from "../components/SearchNews";

const HealthNews = () => {
  // 뉴스 데이터
  const allNews = [
    { id: 1, title: "우울", description: "사춘기인 줄 알았던 우리 아이… 알고 보니 우울증?" },
    { id: 2, title: "우울", description: "공황 장애와 우울증, 초기에 바로잡아야.." },
    { id: 3, title: "뉴스3", description: "hello world" },
    { id: 4, title: "뉴스4", description: "test news" },
    { id: 5, title: "뉴스5", description: "5" },
  ];

  // 고정된 뉴스 데이터 (예시)
  const staticNews = [
    { id: "fixed1", title: "충북 지역에서 직장을 다니는 박모(26)씨는 한 달째 무기력한 상태를 벗어나지 못하고 있다..."},
    { id: "fixed2", title: "현대인의 정신건강 문제 중 하나인 공황 장애는 예상치 못한 순간에 찾아오는 극심한 불안.."},
    { id: "fixed3", title: "강원 춘천시 한 중학교에서 1학년 학생들이 지적 장애가 있는 동급생을 집단적으로 괴롭혔다.."},
    { id: "fixed4", title: "사우스캐롤라이나 대학교 인공지능연구소 연구진이 발표한 보고서에 따르면, 대형언어모델.." },
  ];

  return (
    <div style={{ fontFamily: "GowunBatang-Regular" }}>
      <FixedNews staticNews={staticNews} /> {/* 고정된 뉴스 컴포넌트 */}
      <SearchNews allNews={allNews} /> {/* 검색 가능한 뉴스 컴포넌트 */}
    </div>
  );
};

export default HealthNews;