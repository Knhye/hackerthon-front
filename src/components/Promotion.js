import React from "react";
import MainImageSrc from "../assets/images/mentalhealth.jpg"; // 이미지 소스 임포트
import styled from "styled-components";
import { Link } from "react-router-dom";

// 배경 이미지를 설정할 styled component
const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${MainImageSrc}); /* 배경 이미지 설정 */
  background-size: cover;
  background-position: center;
  display: flex; /* 자식 요소를 중앙에 정렬하기 위해 flex 사용 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.div`
  margin: -20% 0 0 -40%;
  color: white;
  font-size: 50px;
  font-family: "GowunBatang-Regular";
`;

const ServeTitle = styled.div`
  font-size: 20px;
  margin: 2% 0 0 -47%;
  font-family: "GowunBatang-Regular";
`;

const ButtonContainer = styled.div`
  margin: 5% 0 -20% -55%; /* 부모 div 스타일 */
`;

const Button = styled(Link)`
  border: 0;
  border-radius: 5px;
  margin: 0 30px; /* 첫 번째 버튼의 여백 */
  background-color: whitesmoke;
  cursor: pointer;
  padding: 5px;
  font-family: "GowunBatang-Regular";
  transition: background-color 0.3s ease;

  color: black;
  text-decoration: none;
  &:active {
    background-color: #e0e0e0; /* 클릭 시 색상 변경 */
  }
`;

const Promotion = () => {
  return (
    <StyledBackground>
      <MainTitle>
        혼자가 아닌 여정,
        <br /> 나와 세상을 이해하는 첫 걸음
      </MainTitle>
      <ServeTitle>
        지금의 나를 이해하고, 같은 아픔을 겪는 사람들과 공감하며,
        <br /> 함께 나아갈 수 있는 치유의 여정을 시작하세요.
      </ServeTitle>
      <ButtonContainer>
        <Button to="/community">커뮤니티 바로 가기</Button>
        <Button to="/specialist-consultation" style={{ margin: "5px" }}>
          전문의 상담 바로 가기
        </Button>
      </ButtonContainer>
    </StyledBackground>
  );
};

export default Promotion;
