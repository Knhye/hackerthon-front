import React, { useState } from "react";
import styled from "styled-components";

// 스타일 컴포넌트
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Section = styled.div`
  margin-top: 40px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 20px;
  width: 70%;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-left:200px;
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
  margin-top: 20px;
`;

const NewsBox = styled.div`
  width: 22%;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  min-height: 150px; /* 크기 조정 */
`;
const ChangeNews = styled.div`
  width: 30%;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 150px;
`;
const NewsLink = styled.div`
  width: 100%;
  height: 4vh;
  text-align: center;
  align-items:center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 120px;
`;
const ChangeNewsLink = styled.div`
  width: 100%;
  height: 4vh;
  text-align: center;
  align-items:center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 120px;
`;

const HealthNews = () => {
  // 뉴스 데이터
  const allNews = [
    { id: 1, title: "뉴스1", description: "sdasd" },
    { id: 2, title: "뉴스2", description: "sdfsdf" },
    { id: 3, title: "뉴스3", description: "hello world" },
    { id: 4, title: "뉴스4", description: "test news" },
    { id:4, title:"뉴스5",description:"5"},
  ];

  const staticNews = [
    { id: 5, title: "고정 뉴스1", description: "뉴스 링크 1" },
    { id: 6, title: "고정 뉴스2", description: "뉴스 링크 2" },
    { id: 7, title: "고정 뉴스3", description: "뉴스 링크 3" },
    { id: 8, title: "고정 뉴스4", description: "뉴스 링크 4" },
  ];

  // 상태 관리
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  // 검색어가 변경될 때마다 필터링
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
      <Section>
        <Title>고정된 뉴스</Title>
        <NewsContainer>
          {staticNews.map((news) => (
            <NewsBox key={news.id}>
              {news.title}
              <NewsLink>{news.description}</NewsLink>
            </NewsBox>
          ))}
        </NewsContainer>
      </Section>

      <Section>
        <Title>검색 가능한 뉴스</Title>
        <SearchInput
          type="text"
          placeholder="검색..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {filteredNews.length > 0 && (
          <NewsContainer>
            {filteredNews.map((news) => (
              <ChangeNews key={news.id}>
                {news.title}
                <ChangeNewsLink>{news.description}</ChangeNewsLink>
              </ChangeNews>
            ))}
          </NewsContainer>
        )}
      </Section>
    </Container>
  );
};

export default HealthNews;
