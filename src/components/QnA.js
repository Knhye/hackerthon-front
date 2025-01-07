import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../assets/images/qnaProfile.jpg"; // 프로필 이미지 임포트

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
  width: 50px;
  height: 50px;
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
  margin-left: auto;
  color: #888;
`;

const Content = styled.p`
  margin-top: 10px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const AnswerInput = styled.textarea`
  width: calc(100% - 20px);
  height: 50px;
  padding: 10px;
`;

const SubmitAnswerButton = styled.button`
  padding: 10px;
  background-color: #81c784;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #66bb6a;
    transition: bg-color 0.3s ease;
  }
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

const EditButton = styled.button`
  padding: 5px;
  background-color: #ffeb3b;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fbc02d;
  }
`;

const DeleteButton = styled.button`
  padding: 5px;
  background-color: #e57373;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ef5350;
  }
`;

const QnA = ({ qnaData, setQnaData }) => {
  const [answers, setAnswers] = useState({});
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const handleAnswerSubmit = (questionId, e) => {
    e.preventDefault();
    const answerContent = answers[questionId] || "";
    if (answerContent.trim() === "") {
      alert("댓글을 입력하세요");
      return;
    }

    setQnaData((prevData) =>
      prevData.map((item) => {
        if (item.questionId === questionId) {
          return {
            ...item,
            answerUserName: "사용자 이름",
            answerDate: new Date().toLocaleDateString(),
            answerContent,
          };
        }
        return item;
      })
    );

    setAnswers((prev) => ({ ...prev, [questionId]: "" }));
    setEditingAnswerId(null);
  };

  const handleAnswerChange = (questionId, e) => {
    setAnswers((prev) => ({ ...prev, [questionId]: e.target.value }));
  };

  const handleEditClick = (index, title, content) => {
    setEditingQuestionId(index);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleQuestionEditSubmit = (index, e) => {
    e.preventDefault();
    setQnaData((prevData) =>
      prevData.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            title: editedTitle,
            content: editedContent,
          };
        }
        return item;
      })
    );
    setEditingQuestionId(null);
  };

  const handleDeleteClick = (questionId) => {
    setQnaData((prevData) =>
      prevData.filter((item) => item.questionId !== questionId)
    );
  };

  return (
    <QnAContainer>
      {qnaData.map((item, index) => (
        <QnAItem key={item.questionId}>
          <UserInfo>
            <UserProfile src={profileImage} alt="User Profile" />
            <UserName>{item.userName}</UserName>
            <QDate>{item.answerDate || new Date().toLocaleDateString()}</QDate>
          </UserInfo>

          {editingQuestionId === index ? (
            <form onSubmit={(e) => handleQuestionEditSubmit(index, e)}>
              <TitleInput
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="제목을 수정하세요..."
              />
              <AnswerInput
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="내용을 수정하세요..."
              />
              <SubmitAnswerButton type="submit">수정 완료</SubmitAnswerButton>
            </form>
          ) : (
            <>
              <h2>{item.title}</h2>
              <Content>{item.content}</Content>
            </>
          )}

          <TagList>
            {item.tags.map((tag, index) => (
              <TagItem key={index}>{tag}</TagItem>
            ))}
          </TagList>

          {editingQuestionId !== index && (
            <div>
              <EditButton onClick={() => handleEditClick(index, item.title, item.content)}>
                게시글 수정
              </EditButton>
              <DeleteButton onClick={() => handleDeleteClick(item.questionId)}>
                게시글 삭제
              </DeleteButton>
            </div>
          )}

          {editingAnswerId === item.questionId ? (
            <AnswerForm onSubmit={(e) => handleAnswerSubmit(item.questionId, e)}>
              <AnswerInput
                placeholder="댓글을 입력하세요..."
                value={answers[item.questionId] || ""}
                onChange={(e) => handleAnswerChange(item.questionId, e)}
              />
              <SubmitAnswerButton type="submit">수정하기</SubmitAnswerButton>
            </AnswerForm>
          ) : (
            <AnswerForm onSubmit={(e) => handleAnswerSubmit(item.questionId, e)}>
              <AnswerInput
                placeholder="댓글을 입력하세요..."
                value={answers[item.questionId] || ""}
                onChange={(e) => handleAnswerChange(item.questionId, e)}
              />
              <SubmitAnswerButton type="submit">보내기</SubmitAnswerButton>
            </AnswerForm>
          )}

          <AnswerList>
            {item.answerContent && (
              <AnswerItem>
                <strong>{item.answerUserName || "전문의"}</strong> - {item.answerDate}
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
