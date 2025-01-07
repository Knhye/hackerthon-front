import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/images/Logo.png";
import "../assets/fonts/fonts.css";

const NavContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  font-family: "MaruBuri";
`;

const Logo = styled(Link)`
  width: 8vw;
  height: 15vh;
  margin-left: 4%;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Menu = styled(Link)`
  // Change Menu to Link
  font-size: 15px;
  gap: 10rem;
  color: black; // Corrected color property
  text-decoration: none; // Remove underline
`;

const Login = styled(Link)`
  color: black; // Corrected color property
  text-decoration: none;
`;

const Line = styled.div`
  width: 1px;
  height: 25px;
  background-color: black;
`;

const Signup = styled(Link)`
  color: black; // Corrected color property
  text-decoration: none;
`;

const Navbar = () => {
  const location = useLocation();
  const excludedRoutes = ["/login", "/signup"];

  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <NavContainer>
      <Logo to="/" />
      <div style={{ display: "flex", gap: "7rem", margin: "4% 0 0 15%" }}>
        <Menu to="/symptom-analysis">증상 분석</Menu>
        <Menu to="/health-news">건강 뉴스</Menu>
        <Menu to="/community">커뮤니티</Menu>
        <Menu to="/find-hospital">병원 찾기</Menu>
        <Menu to="/specialist-consultation">전문의 상담</Menu>
      </div>
      <div style={{ display: "flex", margin: "1% 0 0 8%", gap: "1rem" }}>
        <Login to="/login">Login</Login>
        <Line />
        <Signup to="/signup">Signup</Signup>
      </div>
    </NavContainer>
  );
};

export default Navbar;
