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

const QnA = ({ qnaData }) => {
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
        </QnAItem>
      ))}
    </QnAContainer>
  );
};

export default QnA;
