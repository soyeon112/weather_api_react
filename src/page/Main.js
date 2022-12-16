import React from "react";
import GetWeather from "../component/GetWeather";
import Header from "../component/Header";
import Attire from "../component/Attire";
import styled from "styled-components";
import font from "../static/font/font.css";
import GetTodayWeather from "../component/GetTodayWeather";

const PageWidth = styled.div`
  font-family: "LeferiBaseType-RegularA";
  width: 90%;
  height: 650px;
  background-color: #ecf0f3;
  padding: 10px;
  margin: 20px auto 20px auto;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(166, 180, 200, 0.1);
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    /* width: 65%; */
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
  }
`;
function Main() {
  return (
    <>
      <PageWidth>
        {/* <Header /> */}
        <GetWeather />
      </PageWidth>
    </>
  );
}

export default Main;
