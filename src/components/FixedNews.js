// FixedNews.js
import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트
const NewsContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
  margin: 0 5%;
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

const NewsLink = styled.div`
  width: 100%;
  height: 4vh;
  margin-top: 30%;
  text-align: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const FixedNews = ({ staticNews }) => {
  return (
    <div>
      <h1
        style={{ textAlign: "center", margin: "3% 0", fontFamily: "yg-jalnan" }}
      >
        Recent News
      </h1>
      <NewsContainer>
        {staticNews.map((news) => (
          <NewsBox key={news.id}>
            {news.title}
            <NewsLink>{news.description}</NewsLink>
          </NewsBox>
        ))}
      </NewsContainer>
    </div>
  );
};

export default FixedNews;
