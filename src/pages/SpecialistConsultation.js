import React, { useState } from "react";
import QnA from "../components/QnA"; // QnA 컴포넌트 임포트
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tag from "../components/Tag"; // Tag 컴포넌트 임포트

const PostButton = styled(Link)`
  padding: 15px 40px;
  background-color: rgba(129, 199, 132, 0.65); /* 기본 배경색 */
  color: #333;
  text-decoration: none;
  border-radius: 10px;
  font-size: 25px;
  font-family: "ghanachoco";
  transition: background-color 0.3s ease; /* 부드러운 전환 효과 추가 */

  &:active {
    background-color: rgba(102, 187, 106, 0.66); /* 클릭 시 더 진한 색상 */
  }
`;

const WidthLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin-top: 2%;
`;

const HeightLine = styled.div`
  width: 1px;
  height: auto;
  background-color: lightgray;
`;

const SpecialistConsultation = () => {
  const [qnaData, setQnaData] = useState([
    {
      questionId: 1,
      userName: "홍길동",
      date: "2023-01-01",
      content: "우울증 극복을 위한 방법이 무엇인가요?",
      tags: ["#우울증", "#정신건강"],
      answerUserName: "전문의 김철수",
      answerDate: "2023-01-02",
      answerContent: "우울증 극복을 위해서는 전문가의 상담이 중요합니다.",
    },
    {
      questionId: 2,
      userName: "이영희",
      date: "2023-01-03",
      content: "스트레칭이 집중력 향상에 미치는 영향은 무엇인가요?",
      tags: ["#스트레칭", "#집중력"],
      answerUserName: "전문의 박지민",
      answerDate: "2023-01-04",
      answerContent:
        "스트레칭은 혈액순환을 개선하여 집중력을 높이는 데 도움을 줍니다.",
    },
    {
      questionId: 3,
      userName: "김철수",
      date: "2023-01-05",
      content: "트라우마를 극복하는 데 필요한 조언이 있나요?",
      tags: ["#트라우마", "#심리치료"],
      answerUserName: "전문의 이수민",
      answerDate: "2023-01-06",
      answerContent:
        "트라우마 극복에는 시간이 필요하며, 전문가의 도움이 중요합니다.",
    },
    {
      questionId: 4,
      userName: "박지혜",
      date: "2023-01-07",
      content: "불안감을 줄이는 방법은 무엇인가요?",
      tags: ["#불안", "#정신건강"],
      answerUserName: "전문의 최민수",
      answerDate: "2023-01-08",
      answerContent: "불안감을 줄이기 위해서는 심호흡과 명상이 효과적입니다.",
    },
    {
      questionId: 5,
      userName: "이수진",
      date: "2023-01-09",
      content: "정신 건강을 유지하기 위한 팁이 있을까요?",
      tags: ["#정신건강", "#자기관리"],
      answerUserName: "전문의 김영희",
      answerDate: "2023-01-10",
      answerContent: "정기적인 운동과 충분한 수면이 정신 건강에 도움이 됩니다.",
    },
  ]);

  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "0",
          margin: "3% 0 0 80%",
        }}
      >
        <PostButton to="/specialist-consultation/create-question">
          New
        </PostButton>
      </button>
      <WidthLine />
      <div style={{ display: "flex" }}>
        <Tag />
        <HeightLine />
        <div style={{ flexGrow: 1 }}>
          <QnA qnaData={qnaData} /> {/* Q&A 리스트 */}
        </div>
      </div>
    </div>
  );
};

export default SpecialistConsultation;
