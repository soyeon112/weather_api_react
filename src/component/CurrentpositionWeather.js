import React from "react";
import styled from "styled-components";
import icon_gpsPointer from "../static/image/icon_gps_pointer.png";
import GetTodayWeather from "./GetTodayWeather";
import axios, { formToJSON } from "axios";
import Attire from "./Attire";
import WeatherEtc from "./WeatherEtc";

//styled ------------------------------------

const DDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 820px) {
    flex-direction: column;
    display: block;
  }
  @media (max-width: 500px) {
  }
`;

const CurrentPositionWeatherDiv = styled.div`
  width: 25%;
  background-color: #ecf0f3;
  margin: 30px 25px;
  align-items: center;
  border-radius: 10px;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  display: flex;
  flex-direction: column;
  @media (max-width: 820px) {
    width: 95%;
    height: 170px;
    margin: 15px auto;
    flex-direction: row;
  }
  @media (max-width: 500px) {
  }
`;

const WeatherOutPutDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 820px) {
    flex-direction: row;
    width: 80%;
  }
  @media (max-width: 500px) {
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const GpsInfoDiv = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  @media (max-width: 820px) {
    margin-top: 10px;
  }
  @media (max-width: 500px) {
  }
`;
const GpsPointerImg = styled.img`
  width: 12px;
  padding-top: 5px;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;
const GpsText = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  color: #686868;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const WeatherDiv = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    margin: 15px auto 0 auto;
  }
  @media (max-width: 500px) {
  }
`;
const WeatherIcon = styled.img`
  width: 200px;
  margin-top: 25px;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    margin-top: 0px;
    margin-left: 10%;
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
`;
const WeatherNum = styled.span`
  font-size: 5.5rem;
  font-weight: bold;
  color: #7b81be;
  @media (max-width: 1280px) {
    font-size: 4.5rem;
  }
  @media (max-width: 820px) {
    font-size: 4rem;
  }
  @media (max-width: 500px) {
  }
`;
const WeatherUnits = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #7b81be;
  @media (max-width: 820px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
  }
`;

const WeatherEtcDiv = styled.div`
  width: 100%;
  margin: 30px 25px;
  @media (max-width: 820px) {
    margin: 0 auto;
  }
  @media (max-width: 500px) {
  }
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
    <DDiv>
      <CurrentPositionWeatherDiv>
        {/* <WeatherOutPutDiv> */}
        <WeatherIcon src={imgUrl} />
        <Div>
          <WeatherDiv>
            <WeatherNum>{setTemp}</WeatherNum>
            <WeatherUnits>℃</WeatherUnits>
          </WeatherDiv>
          <GpsInfoDiv>
            <GpsPointerImg src={icon_gpsPointer} />
            <GpsText>{currentPosition}</GpsText>
          </GpsInfoDiv>
        </Div>
        {/* </WeatherOutPutDiv> */}
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
    </DDiv>
  );
}

export default CurrentpositionWeather;
