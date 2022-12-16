import React from "react";
import styled from "styled-components";

const AllDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
`;
const EtcMainText = styled.p`
  font-size: 1rem;
  color: #686868;
  margin-top: 20px;
  padding-left: 10px;
`;
const EtxSubText = styled.p`
  margin-top: -2px;
  font-size: 1.3rem;
  color: #7b81be;
  padding-left: 10px;
`;
function WeatherEtc({ maxTemp, minTemp, humidity, wind }) {
  return (
    <>
      <AllDiv>
        <EtcBox>
          <EtcMainText>최고 온도</EtcMainText>
          <EtxSubText>{maxTemp}º</EtxSubText>
        </EtcBox>
        <EtcBox>
          <EtcMainText>최저 온도</EtcMainText>
          <EtxSubText>{minTemp}º</EtxSubText>
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
