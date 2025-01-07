import React, { useState } from 'react';
import styled from 'styled-components';
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handleSubmit = (newPost) => {
    if (editingPost) {
      setPosts(posts.map((post) => (post.id === newPost.id ? newPost : post)));
    } else {
      setPosts([...posts, newPost]);
    }
    setEditingPost(null); // 폼 초기화
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      {/* 게시글 작성 폼 */}
      <FormContainer>
        <PostForm onSubmit={handleSubmit} editingPost={editingPost} />
      </FormContainer>

      {/* 게시글 목록 */}
      <PostsContainer>
        <PostsTitle>게시글 목록</PostsTitle>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </PostsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PostsContainer = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;
`;

const PostsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export default PostPage;
