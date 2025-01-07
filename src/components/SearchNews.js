// SearchNews.js
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// 스타일 컴포넌트
const Container = styled.div`
  padding: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 20px;
  width: 70%;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-left: auto; /* 중앙 정렬을 위해 자동 여백 추가 */
  margin-right: auto; /* 중앙 정렬을 위해 자동 여백 추가 */
  display: block; /* 블록 요소로 설정 */
`;

const ChangeNewsContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
  margin-top: 20px;
`;

const ChangeNews = styled.div`
  width: 30%;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 150px; /* 크기 조정 */
`;

const ChangeNewsLink = styled.div`
  width: 100%;
  height: 4vh;
  text-align: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const SearchNews = ({ allNews }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredNews([]); // 검색어가 없으면 빈 배열로 설정
    } else {
      // 검색어가 포함된 뉴스만 필터링
      const filtered = allNews.filter((news) =>
        news.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center", fontFamily: "ghanachoco" }}>
        Search News
      </h1>
      <SearchInput
        type="text"
        placeholder="검색..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button
        style={{ background: "transparent", border: "0", cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            top: "72%",
            right: "16%",
            fontSize: "20px",
            color: "gray",
          }}
        />
      </button>
      {filteredNews.length > 0 && (
        <ChangeNewsContainer>
          {filteredNews.map((news) => (
            <ChangeNews key={news.id}>
              {news.title}
              <ChangeNewsLink>{news.description}</ChangeNewsLink>
            </ChangeNews>
          ))}
        </ChangeNewsContainer>
      )}
    </Container>
  );
};

export default SearchNews;