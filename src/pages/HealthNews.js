// HealthNews.js
import React from "react";
import FixedNews from "../components/FixedNews";
import SearchNews from "../components/SearchNews";

const HealthNews = () => {
  // 뉴스 데이터
  const allNews = [
    { id: 1, title: "뉴스1", description: "sdasd" },
    { id: 2, title: "뉴스2", description: "sdfsdf" },
    { id: 3, title: "뉴스3", description: "hello world" },
    { id: 4, title: "뉴스4", description: "test news" },
    { id: 5, title: "뉴스5", description: "5" },
  ];

  // 고정된 뉴스 데이터 (예시)
  const staticNews = [
    { id: "fixed1", title: "최근 뉴스 제목1", description: "최근 뉴스 설명1" },
    { id: "fixed2", title: "최근 뉴스 제목2", description: "최근 뉴스 설명2" },
    { id: "fixed3", title: "최근 뉴스 제목3", description: "최근 뉴스 설명3" },
    { id: "fixed4", title: "최근 뉴스 제목4", description: "최근 뉴스 설명4" },
  ];

  return (
    <div style={{ fontFamily: "GowunBatang-Regular" }}>
      <FixedNews staticNews={staticNews} /> {/* 고정된 뉴스 컴포넌트 */}
      <SearchNews allNews={allNews} /> {/* 검색 가능한 뉴스 컴포넌트 */}
    </div>
  );
};

export default HealthNews;
