import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/images/Logo.png";
import "../assets/fonts/fonts.css";

const NavContainer = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  font-family: "MaruBuri";
  background-color: transparent !important; /* 배경색을 투명으로 설정 */
  position: sticky;
  top:0;
  z-index: 1000; 
`;

const Logo = styled(Link)`
  width: 13vw;
  height: 20vh;
  margin: -1.8% -7% 0 5%;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Menu = styled(Link)`
  font-size: 15px;
  gap: 10rem;
  color: black; /* 글자 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
`;

const Login = styled(Link)`
  color: black; /* 글자 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
`;

const Line = styled.div`
  width: 1px;
  height: 25px;
  background-color: black; /* 세로선 색상 설정 */
`;

const Signup = styled(Link)`
  color: black; /* 글자 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
`;

const Navbar = () => {
  const location = useLocation();
  const excludedRoutes = ["/login", "/signup"];

  if (excludedRoutes.includes(location.pathname)) {
    return null; // 로그인 및 회원가입 페이지에서는 Navbar를 숨김
  }

  return (
    <NavContainer>
      <Logo to="/" />
      <div style={{ display: "flex", gap: "7rem", margin: "4% 0 0 25%" }}>
        <Menu to="/health-news">건강 뉴스</Menu>
        <Menu to="/community">전문의 상담</Menu>
        <Menu to="/specialist-consultation">커뮤니티</Menu>
      </div>
      <div style={{ display: "flex", margin: "1% 0 0 20%", gap: "1rem" }}>
        <Login to="/login">Login</Login>
        <Line />
        <Signup to="/signup">Signup</Signup>
      </div>
    </NavContainer>
  );
};

export default Navbar;