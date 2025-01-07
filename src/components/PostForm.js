import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

function PostForm({ onSubmit, editingPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // navigate 함수 사용

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 제목과 내용이 비어있는지 확인
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 채워주세요.");
      return; // 함수 종료
    }

    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      title,
      content,
      date: editingPost ? editingPost.date : new Date(),
    };

    // onSubmit 함수로 새 게시글을 부모 컴포넌트로 전달
    onSubmit(newPost);
    setTitle("");
    setContent("");
  };

  // 커뮤니티 페이지로 이동하는 함수
  const handleNavigate = () => {
    navigate("/Community"); // 커뮤니티 페이지로 이동
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>게시글 작성</Title>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <Button type="submit">{editingPost ? "수정" : "작성"}하기</Button>
      <NavigateButton type="button" onClick={handleNavigate}>
        커뮤니티로 이동
      </NavigateButton>{" "}
      {/* 커뮤니티로 이동하는 버튼 */}
    </Form>
  );
}

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;
  min-height: 15vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
`;

const NavigateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s, transform 0.2s;
`;

export default PostForm;
