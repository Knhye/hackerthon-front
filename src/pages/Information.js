import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import RecommandList from "../components/RecommandList";

const InformationContainer = styled.div`
  margin: 3%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 40vw;
  margin-left: 30%;
  transition: border-color 0.3s ease;
  opacity: 0.8;
  font-family: "GowunBatang-Regular";
  &:focus {
    border-color: #81c784;
    outline: none;
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

const RecommandTitle = styled.div`
  margin: 3%;
  width: 15vw;
  height: 10vh;
  background-color: rgba(195, 199, 255, 0.38);
  border: 0;
  border-radius: 10px;
  text-align: center;
  font-size: 25px;
  padding: 10px;

  font-family: "MaruBuri";
`;

const Information = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <InformationContainer>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="어느 증상을 가지고 계신가요?"
      />

      <button
        style={{ background: "transparent", border: "0", cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            top: "22%",
            right: "29%",
            fontSize: "20px",
            color: "gray",
          }}
        />
      </button>
      <WidthLine />
      <div style={{ display: "flex" }}>
        <RecommandTitle>
          AI가 분석한
          <br /> 결과입니다..
        </RecommandTitle>
        <HeightLine />
        <RecommandList />
      </div>
    </InformationContainer>
  );
};

export default Information;
