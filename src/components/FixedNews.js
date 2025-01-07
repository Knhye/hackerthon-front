import React from "react";
import styled from "styled-components";
import new1Image from "../assets/images/new1.jpg";
import new2Image from "../assets/images/news2.jpg";
import new3Image from "../assets/images/new3.jpg";
import new4Image from "../assets/images/news4.jpg";

// 스타일 컴포넌트
const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 5%;
`;

const NewsBox = styled.a`
  width: 22%;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  min-height: 150px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const NewsTitle = styled.h2`
  font-size: 16px; /* 제목 글씨 크기 줄이기 */
  margin: 10px 0;
`;

const FixedNews = ({ staticNews }) => {
  const linkUrls = [
    "https://www.kmib.co.kr/article/view.asp?arcid=0025911548&code=61121111&cp=nv",
    "https://sports.donga.com/life/article/all/20250107/130807444/1",
    "https://www.segye.com/newsView/20250107508713?OutUrl=naver",
    "https://zdnet.co.kr/view/?no=20250107104706",
  ];

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "3% 0",
          fontFamily: "ghanachoco",
        }}
      >
        Recent News
      </h1>
      <NewsContainer>
        {Array.isArray(staticNews) && staticNews.length > 0 ? (
          staticNews.map((news, index) => (
            <NewsBox
              key={news.id}
              href={linkUrls[index]} // 각 링크를 href로 설정
              target="_blank" // 새 탭에서 열리도록 설정
              rel="noopener noreferrer" // 보안 강화
            >
              <NewsImage
                src={
                  index === 0
                    ? new1Image
                    : index === 1
                    ? new2Image
                    : index === 2
                    ? new3Image
                    : new4Image
                }
                alt={news.title}
              />
              <NewsTitle>{news.title}</NewsTitle> {/* 수정된 스타일 적용 */}
            </NewsBox>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            뉴스 데이터가 없습니다.
          </p>
        )}
      </NewsContainer>
    </div>
  );
};

export default FixedNews;
