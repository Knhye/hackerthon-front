import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

function PostForm({ onSubmit, editingPost }) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // navigate 함수 사용

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setTag(editingPost.tag);
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
      tag,
      content,
      date: editingPost ? editingPost.date : new Date(),
    };

    // onSubmit 함수로 새 게시글을 부모 컴포넌트로 전달
    onSubmit(newPost);
    setTitle("");
    setTag("");
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
      <Input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="태그"
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button type="submit">{editingPost ? "수정" : "작성"}하기</Button>
        <NavigateButton type="button" onClick={handleNavigate}>
          커뮤니티로 이동
        </NavigateButton>
      </div>
    </Form>
  );
}

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  font-family: "GowunBatang-Regular";
`;

const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  font-family: "GowunBatang-Regular";
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s;
  font-family: "GowunBatang-Regular";
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
  font-family: "GowunBatang-Regular";
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  font-size: 16px;
  background-color: rgba(76, 175, 79, 0.66);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  font-family: "GowunBatang-Regular";
  &:hover {
    background-color: #81c784; // 더 진한 파스텔 연두색
    transition: bg-color 0.3s ease;
  }
`;

const NavigateButton = styled.button`
  width: 50%;
  height: 40px;
  font-size: 16px;
  background-color: rgba(76, 175, 79, 0.66);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  font-family: "GowunBatang-Regular";
  &:hover {
    background-color: #81c784; // 더 진한 파스텔 연두색
    transition: bg-color 0.3s ease;
  }
`;

export default PostForm;
