import React from "react";
import QnA from "../components/QnA";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tag from "../components/Tag";

const PostButton = styled(Link)`
  padding: 15px 40px;
  background-color: rgba(129, 199, 132, 0.65); /* 기본 배경색 */
  color: #333;
  text-decoration: none;
  border-radius: 10px;
  font-size: 25px;
  font-family: "ghanachoco";
  transition: background-color 0.3s ease; /* 부드러운 전환 효과 추가 */

  &:active {
    background-color: rgba(102, 187, 106, 0.66); /* 클릭 시 더 진한 색상 */
  }
`;

const WidthLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin-top: 2%;
`;

const HeightLine = styled.div`
  width: 1px;
  height: auto;
  background-color: lightgray;
`;

const SpecialistConsultation = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "0",
          margin: "3% 0 0 80%",
        }}
      >
        <PostButton>New</PostButton>
      </button>
      <WidthLine />
      <div style={{ display: "flex" }}>
        <Tag />
        <HeightLine />
        <QnA />
      </div>
    </div>
  );
};

export default SpecialistConsultation;
