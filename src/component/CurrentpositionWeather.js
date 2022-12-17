import React from "react";
import styled from "styled-components";
import icon_gpsPointer from "../static/image/icon_gps_pointer.png";
import GetTodayWeather from "./GetTodayWeather";
import axios, { formToJSON } from "axios";
import Attire from "./Attire";
import WeatherEtc from "./WeatherEtc";

//styled ------------------------------------
const TitleText = styled.p`
  font-size: 0.9rem;
`;
const CurrentPositionWeatherDiv = styled.div`
  width: 20%;
  height: 90%;
  background-color: #ecf0f3;
  margin: 25px 0 25px 15px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 768px) {
    width: 35%;
  }
  @media (max-width: 500px) {
  }
`;

const WeatherOutPutDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`;
const GpsInfoDiv = styled.div`
  margin: 0 auto;
  margin-top: 25px;
`;
const GpsPointerImg = styled.img`
  width: 12px;
  padding-top: 5px;
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`;
const GpsText = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  color: #686868;
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const WeatherDiv = styled.div`
  margin: 50px auto 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const WeatherIcon = styled.img`
  width: 200px;
  margin-top: 25px;
  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`;
const WeatherNum = styled.span`
  font-size: 5.5rem;
  font-weight: bold;
  color: #7b81be;
  @media (max-width: 1280px) {
    font-size: 4.5rem;
  }
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
  @media (max-width: 500px) {
  }
`;
const WeatherUnits = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #7b81be;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
  }
`;

const MaxMinTempDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MaxMinTempText = styled.span`
  font-size: 0.8rem;
  color: #6b92e5;
`;

const WeatherEtcDiv = styled.div`
  margin: 0 auto;
`;

function CurrentpositionWeather({ api, data, temp, lat, lon, icon }) {
  console.log("gggg", data);
  let currentPosition; //현재위치 텍스트 저장 변수
  currentPosition = data.name;
  const setTemp = Math.round(temp); //temp값 반올림

  /**날씨에 따른 아이콘 img src*/
  let imgUrl = "http://openweathermap.org/img/w/" + icon + ".png";

  /** 오늘 최고온도 /  최저온도 / 습도 / 풍속 변수*/
  let maxTemp = data.main.temp_max;
  let minTemp = data.main.temp_min;
  let humidity = data.main.humidity;
  let wind = data.wind.speed;

  return (
    <>
      <CurrentPositionWeatherDiv>
        <WeatherOutPutDiv>
          <WeatherIcon src={imgUrl} />
          <WeatherDiv>
            <WeatherNum>{setTemp}</WeatherNum>
            <WeatherUnits>℃</WeatherUnits>
          </WeatherDiv>

          <GpsInfoDiv>
            <GpsPointerImg src={icon_gpsPointer} />
            <GpsText>{currentPosition}</GpsText>
          </GpsInfoDiv>
        </WeatherOutPutDiv>
      </CurrentPositionWeatherDiv>
      <WeatherEtcDiv>
        <GetTodayWeather api={api} lat={lat} lon={lon} data={data} />
        <WeatherEtc
          maxTemp={maxTemp}
          minTemp={minTemp}
          humidity={humidity}
          wind={wind}
        />
        {temp && <Attire temp={setTemp} />}
      </WeatherEtcDiv>
    </>
  );
}

export default CurrentpositionWeather;
