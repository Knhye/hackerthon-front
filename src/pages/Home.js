import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Result = styled.p`
  font-size: 18px;
  color: #555;
`;

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="증상을 입력하세요: "
      />
      <Result>검색어: {searchQuery}</Result>
    </Container>
  );
}

export default App;
