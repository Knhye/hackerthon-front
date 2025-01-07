import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import searchNews1 from "../assets/images/searchnews1.jpg";
import searchNews2 from "../assets/images/searchnews2.jpg";

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
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const ChangeNewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const ChangeNews = styled.div`
  width: 30%;
  background-image: ${(props) =>
    `url(${props.bgImage})`}; /* background-image로 변경 */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* 이미지를 요소에 맞게 채우기 */
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 10px;
`;

const ChangeNewsLink = styled.div`
  width: 100%;
  height: 4vh;
  text-align: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.5);
`;

const SearchNews = ({ allNews }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredNews([]);
    } else {
      const filtered = allNews.filter((news) =>
        news.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  const handleNewsClick = (id) => {
    if (id === 1) {
      window.open(
        "https://health.chosun.com/site/data/html_dir/2024/12/27/2024122701822.html",
        "_blank"
      );
    } else if (id === 2) {
      window.open(
        "https://sports.donga.com/life/article/all/20250107/130807444/1",
        "_blank"
      );
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
            top: "90.3%",
            right: "16%",
            fontSize: "20px",
            color: "gray",
          }}
        />
      </button>
      {filteredNews.length > 0 && (
        <ChangeNewsContainer>
          {filteredNews.map((news) => (
            <ChangeNews
              key={news.id}
              bgImage={news.id === 1 ? searchNews1 : searchNews2} // 각 뉴스의 배경 이미지 설정
              onClick={() => handleNewsClick(news.id)} // 클릭 이벤트
            >
              <div>{news.title}</div>
              <ChangeNewsLink>{news.description}</ChangeNewsLink>
            </ChangeNews>
          ))}
        </ChangeNewsContainer>
      )}
    </Container>
  );
};

export default SearchNews;
