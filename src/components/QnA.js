import React from "react";
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
  margin-bottom: 20px; /* 항목 간의 여백 */
`;

const UserProfile = styled.img`
  width: 50px; /* 프로필 사진 크기 */
  height: 50px; /* 프로필 사진 크기 */
  border-radius: 50%; /* 원형으로 만들기 */
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
`;

const UserName = styled.span`
  margin-left: 10px; /* 프로필과 이름 간의 여백 */
  font-weight: bold;
`;

const Date = styled.span`
  margin-left: auto; /* 오른쪽으로 정렬 */
  color: #888; /* 날짜 색상 */
`;

const Content = styled.p`
  margin-top: 10px; /* 이미지와 텍스트 간의 여백 */
`;

const QnA = () => {
  // 예시 질문 및 답변 데이터
  const qnaData = [
    {
      questionId: 1,
      userName: "홍길동",
      date: "2023-01-01",
      content: "우울증 극복을 위한 방법이 무엇인가요?",
      answerUserName: "전문의 김철수",
      answerDate: "2023-01-02",
      answerContent: "우울증 극복을 위해서는 전문가의 상담이 중요합니다.",
    },
    {
      questionId: 2,
      userName: "이영희",
      date: "2023-01-03",
      content: "스트레칭이 집중력 향상에 미치는 영향은 무엇인가요?",
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
      answerUserName: "전문의 이수민",
      answerDate: "2023-01-06",
      answerContent:
        "트라우마 극복에는 시간이 필요하며, 전문가의 도움이 중요합니다.",
    },
  ];

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
          <hr style={{ margin: "50px 0" }} /> {/* 질문과 답변 구분선 */}
          <UserInfo>
            <UserProfile src={profileImage} alt="Doctor Profile" />
            <UserName>{item.answerUserName}</UserName>
            <Date>{item.answerDate}</Date>
          </UserInfo>
          <Content>{item.answerContent}</Content>
        </QnAItem>
      ))}
    </QnAContainer>
  );
};

export default QnA;