import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  width: 20%;
  height: auto;
  margin: 2%;
`;

const TagTitle = styled.div`
  margin: 5% 30%;
  font-size: 30px;
  font-family: "ghanachoco";
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 태그가 컨테이너를 초과할 경우 아래로 내려가도록 설정 */
  justify-content: center; /* 태그를 중앙 정렬 */
  margin-top: 20px; /* 제목과 태그 사이의 여백 */
`;

const TagItem = styled.div`
  margin: 5px; /* 태그 간의 여백 */
  padding: 5px 10px; /* 태그 내부 여백 */
  background-color: rgba(255, 204, 128, 0.41); /* 태그 배경색 */
  border-radius: 5px; /* 모서리 둥글게 */
  font-size: 16px; /* 폰트 크기 */
  font-family: "MaruBuri";
`;

const Tag = () => {
  // 예시 태그들
  const tags = [
    "우울",
    "트라우마",
    "극복하는법",
    "병원추천",
    "스트레칭",
    "집중력향상",
    "도와드립니다",
  ];

  return (
    <TagContainer>
      <TagTitle>Tags</TagTitle>
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>#{tag}</TagItem>
        ))}
      </TagList>
    </TagContainer>
  );
};

export default Tag;