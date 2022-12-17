import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodayWeatherDiv = styled.div`
  width: 90%;
  padding: 20px 10px;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  background-color: #ecf0f3;
  box-shadow: inset -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`;
const WeatherDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TimeWeatherDiv = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;
`;
const TempText = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  color: #686868;
  margin: 0 0;
`;

const MiniText = styled.p`
  font-size: 0.7rem;
  text-align: center;
  margin: 0 0;
  color: #686868;
`;
const TextOutPutDiv = styled.div`
  /* width: 45%; */
  width: 95%;
  height: 250px;
  margin: 25px 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f3;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    width: 40%;
  }
`;
const TextOutPut = styled.p`
  font-size: 1.2rem;
  font-weight: 550;
  padding: 10px;
  margin: 0 auto;
  margin: 5px auto 10px auto;
  color: #7b81be;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

/** 오늘 전체 날씨 받아오는 함수 (3시간 간격으로) */
function GetTodayWeather({ api, lat, lon, data, weatherText }) {
  const [todayWeather, setTodayWeather] = useState();
  let arr = [];

  const getdata = async () => {
    if (api && lat && lon) {
      console.log("getdata들어옴");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
      );
      setTodayWeather(res.data.list);
      for (let i = 0; i <= 5; i++) {
        arr.push(res.data.list[i]);
      }
      // setTodayWeather(data);
      setTodayWeather(arr);
      console.log(todayWeather);
    }
  };

  //날씨에 따른 문구가 저장된 객체
  const weatherInfoText = {
    Thunderstorm: "천둥번개",
    Drizzle: "이슬비",
    Rain: "비내리는 하루, 우산을 챙겨주세요! ",
    Snow: "하늘에서 눈이 내려요. 미끄러지지 않게 조심하세요!",
    Atmosphere: "대기, 안개",
    Clear: "청명합니다. 날씨 좋은 하루가 예상됩니다 😉",
    Clouds: "구름이 많은 날씨입니다. 대체로 흐리겠습니다. 😐",
    Additional: "이외에 다른 날씨",
  };
  var weatherText; // 날씨에 따른 문구 저장 변수

  const outWeatherText = () => {
    let key = data.weather[0].main;
    if (key in weatherInfoText) {
      weatherText = weatherInfoText[key]; //날씨에 따른 문구 저장 변수
    }
  };
  {
    //data.weather값이 있다면 문구 출력, 없으면 출력 x
    data ? outWeatherText() : console.log("data없음");
  }

  useEffect(() => {
    console.log("api있음?", api);
    console.log("lat있음?", lat);
    console.log("lon있음?", lon);
    getdata();
  }, lat);

  return (
    <TextOutPutDiv>
      <TextOutPut>{weatherText}</TextOutPut>
      <TodayWeatherDiv>
        <WeatherDiv>
          {todayWeather &&
            todayWeather.map((it, id) => (
              <TimeWeatherDiv>
                <TempText>{it.main.temp}℃</TempText>
                <img
                  src={`http://openweathermap.org/img/w/${it.weather[0].icon}.png`}
                />
                <MiniText>{it.dt_txt}</MiniText>
              </TimeWeatherDiv>
            ))}
        </WeatherDiv>
      </TodayWeatherDiv>
    </TextOutPutDiv>
  );
}

export default GetTodayWeather;
