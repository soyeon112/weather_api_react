import React from "react";
import styled from "styled-components";
import icon_weather from "../static/image/icon_weather.png";
import { Link } from "react-router-dom";

const LogoDiv = styled.div`
  width: 70%;
  margin: 25px auto;
  text-align: center;
`;
const LogoImg = styled.img`
  width: 75px; //65px
  cursor: pointer;
`;

function Header() {
  return (
    <>
      <LogoDiv>
        {/* <LogoImg src={icon_weather} /> */}
        <LogoImg src={process.env.PUBLIC_URL + `/web_icon.png`} />
      </LogoDiv>
    </>
  );
}

export default Header;
