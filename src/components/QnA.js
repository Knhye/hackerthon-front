import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../assets/images/qnaProfile.jpg";

const QnAContainer = styled.div`
  width: 100%;
  margin: 2% 5%;
`;

const QnAItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  width: 85%;
`;

const UserProfile = styled.img`
  width: 50px; /* 프로필 사진 크기 */
  height: 50px; /* 프로필 사진 크기 */
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const Date = styled.span`
  margin-left: auto;
  color: #888;
`;

const Content = styled.p`
  margin-top: 10px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const TagItem = styled.span`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
`;

const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* 질문과 답글 사이의 여백 */
`;

const AnswerInput = styled.textarea`
  width: calc(100% - 20px); /* 너비 조정 */
  height: 50px; /* 높이 조정 */
  padding: 10px; /* 내부 여백 */
`;

const SubmitAnswerButton = styled.button`
  padding: 10px;
  background-color: #81c784; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #66bb6a; /* hover 시 색상 변경 */
    transition: bg-color 0.3s ease;
  }
`;

const AnswerList = styled.div`
  margin-top: 20px; /* 답변 목록과 질문 간의 여백 */
  padding-left: 10px; /* 왼쪽 여백 */
  border-left: 2px solid #81c784; /* 왼쪽 경계선 */
`;

const AnswerItem = styled.div`
  margin-top: 10px; /* 답변 간의 여백 */
  padding-bottom: 10px; /* 아래 여백 */
  border-bottom: 1px solid #ddd; /* 아래 경계선 */
`;

const QnA = ({ qnaData, setQnaData }) => {
  const [answers, setAnswers] = useState({}); // 각 질문에 대한 답변 상태 관리

  const handleAnswerSubmit = (questionId, e) => {
    e.preventDefault();
    const answerContent = answers[questionId] || ""; // 입력된 답변 내용 가져오기
    if (answerContent.trim() === "") {
      alert("답변 내용을 입력해주세요.");
      return;
    }

    // 해당 질문에 대한 답변 추가
    setQnaData((prevData) =>
      prevData.map((item) => {
        if (item.questionId === questionId) {
          return {
            ...item,
            answerUserName: "전문의", // 답변자 이름 (예시)
            answerDate: new Date().toLocaleDateString(), // 현재 날짜
            answerContent, // 입력된 답변 내용
          };
        }
        return item;
      })
    );

    // 답변 내용을 초기화
    setAnswers((prev) => ({ ...prev, [questionId]: "" })); // 입력 필드 초기화
  };

  const handleAnswerChange = (questionId, e) => {
    setAnswers((prev) => ({ ...prev, [questionId]: e.target.value })); // 답변 내용 업데이트
  };
  return (
    <QnAContainer>
      {qnaData.map((item) => (
        <QnAItem key={item.questionId}>
          <UserInfo>
            <UserProfile src={profileImage} alt="User Profile" />
            <UserName>{item.userName}</UserName>
            <Date>{item.date}</Date>
          </UserInfo>
          <Content>{item.content}</Content>
          <TagList>
            {item.tags.map((tag, index) => (
              <TagItem key={index}>{tag}</TagItem>
            ))}
          </TagList>

          <AnswerForm onSubmit={(e) => handleAnswerSubmit(item.questionId, e)}>
            <AnswerInput
              placeholder="답변을 입력하세요..."
              value={answers[item.questionId] || ""}
              onChange={(e) => handleAnswerChange(item.questionId, e)}
            />
            <SubmitAnswerButton type="submit">답변하기</SubmitAnswerButton>
          </AnswerForm>

          {/* 제출된 답변 표시 */}
          <AnswerList>
            {item.answerContent && (
              <AnswerItem>
                <strong>{item.answerUserName || "전문의"}</strong> -{" "}
                {item.answerDate}
                <p>{item.answerContent}</p>
              </AnswerItem>
            )}
          </AnswerList>
        </QnAItem>
      ))}
    </QnAContainer>
  );
};

export default QnA;
