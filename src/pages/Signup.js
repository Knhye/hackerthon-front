import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../assets/fonts/fonts.css";

const SignupContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: "yg-jalnan";
`;

const SignupForm = styled.div`
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
  color: #ffb74d;
  margin: 5% 0;
  font-size: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Select = styled.select`
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
  width: 50%;
  padding: 10px;
  background-color: #a5d6a7;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "yg-jalnan";

  &:hover {
    background-color: #81c784;
    transition: background-color 0.3s ease;
  }
`;

const LoginButton = styled(Button)`
  background-color: #ffcc80;
  width: 50%;

  &:hover {
    background-color: #ffb74d;
    transition: background-color 0.3s ease;
  }
`;

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const handleSignup = () => {
    if (username && password && age && country) {
      navigate("/login");
    } else {
      alert("Please enter your information.");
    }
  };

  return (
    <SignupContainer>
      <SignupForm>
        <Title>Sign Up</Title>
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
          <Label htmlFor="age">Age</Label>
          <Input
            type="text"
            id="age"
            placeholder="나이를 입력해주세요"
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
          <Button onClick={handleSignup}>Sign Up</Button>
          <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
        </ButtonContainer>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
