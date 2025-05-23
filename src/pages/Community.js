import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate로 수정
import Tag from "../components/Tag";

// 스타일 컴포넌트
const Container = styled.div`
  width: 80vw;
  height: 75vh;
  padding: 20px;
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #f4f4f9;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  font-family: "GowunBatang-Regular";
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 32px;
  font-weight: bold;
  margin: 30px 0 80px 0;
`;

const PostContainer = styled.div`
  margin-bottom: 25px;
  padding: 18px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const PostTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 22px;
  color: #444;
  font-weight: 600;
`;

const PostContent = styled.p`
  margin-bottom: 15px;
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`;

const CommentList = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

const Comment = styled.div`
  padding: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 8px;
  border-radius: 8px;
  color: #444;
  font-size: 13px;
`;

const NavigateButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(129, 199, 132, 0.66);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #81c784;
    transform: scale(1.05);
  }
`;

const Post = ({ post, onLike, comments }) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
      {post.image && (
        <img
          src={post.image}
          alt="게시글 이미지"
          style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px" }}
        />
      )}

      <CommentList>
        {comments.map((comment, index) => (
          <Comment key={index}>{comment}</Comment>
        ))}
      </CommentList>
    </PostContainer>
  );
};

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  const navigate = useNavigate(); // useNavigate로 수정

  const navigateToPost = () => {
    navigate("/post"); // 대소문자 오류 수정
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <Container>
      <RightSection>
        <Title>최근 게시글</Title>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={handleLike}
              comments={comments[post.id] || []}
            />
          ))
        ) : (
          <p>게시글이 비어있습니다.</p>
        )}
        <NavigateButton
          onClick={navigateToPost}
          style={{ fontFamily: "GowunBatang-Regular" }}
        >
          게시글을 작성해보세요!
        </NavigateButton>
      </RightSection>
    </Container>
  );
};

export default Community;
