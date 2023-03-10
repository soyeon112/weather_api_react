import React from "react";
import styled from "styled-components";

const AllDiv = styled.div`
  height: 145px;
  border-radius: 10px;
  margin: 20px auto 0 auto;
  padding-left: 5%;
  display: block;
  @media (max-width: 768px) {
    padding-left: 15px;
  }
  @media (max-width: 500px) {
    padding-left: 15%;
  }
  @media (max-width: 390px) {
    padding-left: 15px;
  }
`;

const EtcBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 7px 20px;
  border-radius: 10px;
  background-color: #ecf0f3;
  box-shadow: inset -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  padding: 15px;
  float: left;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;
const EtcMainText = styled.p`
  font-size: 1rem;
  color: #686868;
  margin-top: 20px;
  padding-left: 5px;
  @media (max-width: 500px) {
    font-size: 0.9rem;
    margin-top: 13px;
    padding-left: 3px;
  }
`;
const EtxSubText = styled.p`
  margin-top: -2px;
  font-size: 1.3rem;
  color: #7b81be;
  padding-left: 5px;
  @media (max-width: 500px) {
    font-size: 1.15rem;
    padding-left: 3px;
  }
`;
function WeatherEtc({ maxTemp, minTemp, humidity, wind }) {
  return (
    <>
      <AllDiv>
        <EtcBox>
          <EtcMainText>최고 온도</EtcMainText>
          <EtxSubText>{maxTemp}℃</EtxSubText>
        </EtcBox>
        <EtcBox>
          <EtcMainText>최저 온도</EtcMainText>
          <EtxSubText>{minTemp}℃</EtxSubText>
        </EtcBox>
        <EtcBox>
          <EtcMainText>습도</EtcMainText>
          <EtxSubText>{humidity}%</EtxSubText>
        </EtcBox>
        <EtcBox>
          <EtcMainText>풍속</EtcMainText>
          <EtxSubText>{wind}m/s</EtxSubText>
        </EtcBox>
      </AllDiv>
    </>
  );
}

export default WeatherEtc;
