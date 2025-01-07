import React, { useState } from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; /* 전체 너비 설정 */
  height: 100vh; /* 전체 높이 설정 */
  font-family: "GowunBatang-Regular";
  margin-top: -10%;
  background: linear-gradient(
    to right,
    rgba(192, 196, 212, 0.51),
    rgba(180, 195, 181, 0.66)
  );
`;

const MainTitle = styled.div`
  font-size: 50px;
  margin: 20% 0 5% 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 40vw;

  transition: border-color 0.3s ease;
  opacity: 0.8;
  font-family: "GowunBatang-Regular";
  &:focus {
    border-color: #81c784;
    outline: none;
  }
`;

const Intro = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Navigate to /information when the search button is clicked
    navigate("/information", { state: { query: searchQuery } }); // Pass search query if needed
  };

  return (
    <Container>
      <MainTitle>
        내 마음의 이야기를 듣고, 길을 찾고,
        <br /> 함께 나아가는 여정 그리고 그 공간,
      </MainTitle>

      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="어느 증상을 가지고 계신가요?"
      />

      <button
        style={{ background: "transparent", border: "0", cursor: "pointer" }}
        onClick={handleSearch}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            top: "69%",
            right: "30%",
            fontSize: "20px",
            color: "gray",
          }}
        />
      </button>
    </Container>
  );
};

export default Intro;
