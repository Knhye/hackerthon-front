import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../assets/fonts/fonts.css";

// Styled Components
const LoginContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: "yg-jalnan";
`;

const LoginForm = styled.div`
  margin: 5% 25%;
  padding: 5%;
  width: 30vw;
  height: auto;
  border: 0;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #81c784;
  margin: 10% 0;
  font-size: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
    border-color: #3d5ab8;
    box-shadow: 0 0 5px rgba(61, 90, 184, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const Button = styled.button`
  width: auto;
  padding: 10px;
  width: calc(50% - 5px); // Adjusted to account for gap
  background-color: #ffcc80; // 파스텔 주황색
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  font-family: "yg-jalnan";

  &:hover {
    background-color: #ffb74d; // 더 진한 파스텔 주황색
    transition: background-color 0.3s ease;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #a5d6a7; // 파스텔 연두색

  &:hover {
    background-color: #81c784; // 더 진한 파스텔 연두색
    transition: bg-color 0.3s ease;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate a successful login
    if (!username || !password) {
      alert("Please enter both username and password."); // Simple error handling
      return; // Early return only if validation fails
    }
    navigate("/videochat"); // Navigate to video chat on successful login
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="이름을 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <Button onClick={handleLogin}>Login</Button>
          <SignUpButton onClick={() => navigate("/signup")}>
            Sign Up
          </SignUpButton>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;