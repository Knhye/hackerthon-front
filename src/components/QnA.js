import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../assets/images/qnaProfile.jpg"; // 프로필 이미지 임포트

const QnAContainer = styled.div`
  width: 100%;
  margin: 2% 5%;
  font-family: "GowunBatang-Regular";
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

const QDate = styled.span`
  /* QDate로 변경 */
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
  margin-top: 20px;
`;

const AnswerInput = styled.textarea`
  width: calc(100% -20px);
  height: 50px;
  padding: 10px;
  font-family: "GowunBatang-Regular";
`;

const SubmitAnswerButton = styled.button`
  padding: 10px;
  background-color: #81c784;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: "GowunBatang-Regular";
  &:hover {
    background-color: #66bb6a;
    transition: bg-color 0.3s ease;
  }
`;

const AnswerList = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  border-left: 2px solid #81c784;
`;

const AnswerItem = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
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
            <QDate>
              {item.answerDate || new Date().toLocaleDateString()}
            </QDate>{" "}
            {/* QDate로 변경 */}
          </UserInfo>
          <Content>{item.content}</Content>
          <TagList>
            {item.tags.map((tag, index) => (
              <TagItem key={index}>{tag}</TagItem>
            ))}
          </TagList>

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

          {/* 답변 폼 */}
          <AnswerForm onSubmit={(e) => handleAnswerSubmit(item.questionId, e)}>
            <AnswerInput
              placeholder="답변을 입력하세요..."
              value={answers[item.questionId] || ""}
              onChange={(e) => handleAnswerChange(item.questionId, e)}
            />
            <SubmitAnswerButton type="submit">답변하기</SubmitAnswerButton>
          </AnswerForm>
        </QnAItem>
      ))}
    </QnAContainer>
  );
};

export default QnA;
