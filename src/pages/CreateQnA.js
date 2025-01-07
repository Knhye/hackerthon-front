import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateQnAContainer = styled.div`
  margin: 3%;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 50%; /* 너비 조정 */
  padding: 10px;
  margin: 10px 0; /* 위아래 여백 */
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 50%; /* 너비 조정 */
  height: 50vh;
  padding: 10px;
  margin: 20px 0; /* 위아래 여백 */
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #81c784; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #66bb6a; /* hover 시 색상 변경 */
    transition: background-color 0.3s ease; /* 부드러운 전환 효과 */
  }
`;

const CreateQnA = ({ addQuestion }) => {
  const [tags, setTags] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 질문 객체 생성
    const newQuestion = {
      questionId: Date.now(), // 고유 ID 생성 (임시로 현재 시간 사용)
      userName: "사용자 이름", // 사용자 이름 (임시로 설정)
      qDate: new Date().toLocaleDateString(), // 현재 날짜를 qDate로 변경
      content: question,
      tags: tags.split(",").map((tag) => tag.trim()), // 쉼표로 구분된 태그 배열로 변환
      answerUserName: "", // 초기에는 답변자가 없으므로 빈 문자열
      answerDate: "",
      answerContent: "",
    };

    addQuestion(newQuestion); // 새 질문 추가
    setTags(""); // 폼 초기화
    setQuestion(""); // 폼 초기화

    alert("질문이 제출되었습니다!");
    navigate("/specialist-consultation"); // 질문 제출 후 Q&A 리스트 페이지로 이동
  };

  return (
    <CreateQnAContainer>
      <Title>질문 작성하기</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="태그 (예: #우울, #트라우마)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <TextArea
          rows="5"
          placeholder="질문 내용을 입력하세요..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <SubmitButton type="submit">제출하기</SubmitButton>
      </Form>
    </CreateQnAContainer>
  );
};

export default CreateQnA;
