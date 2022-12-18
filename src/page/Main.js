import React from "react";
import GetWeather from "../component/GetWeather";
import styled from "styled-components";

const PageWidth = styled.div`
  font-family: "LeferiBaseType-RegularA";
  width: 70%;
  height: 100%;
  background-color: #ecf0f3;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(166, 180, 200, 0.1);
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    /* width: 65%; */
  }
  @media (max-width: 820px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 390px) {
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
