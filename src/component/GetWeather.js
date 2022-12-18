import React, { useEffect, useState } from "react";
import CurrentpositionWeather from "./CurrentpositionWeather";

/**현재 위치 찾은 후 그 위치의 날씨정보 받아오는 함수 */
function GetWeather() {
  // openweathermap api
  const api = `7c585f40f338335c110d02443dcdcc33`;

  const handleGeoSucc = (position) => {
    console.log("현재내위치 : ", position);
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    const coordsObj = {
      latitude,
      longitude,
    };
    getWeather(latitude, longitude);
  };

  const handleGeoErr = (err) => {
    console.log("geolocation 오류 : ", err);
  };

  const [tempstate, setTempstate] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [icon, setIcon] = useState();
  const [resData, setResData] = useState();

  const getWeather = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        //현재 기온정보
        const temp = data.main.temp;
        //현재 날씨정보
        const weathers = data.weather[data.weather.length - 1];
        // 날씨 정보가 배열로 넘어오는데 현재의 날씨가 배열의 마지막이므로 length-1해서 가장 최신의 날씨를 적용함.
        console.log("data", data);
        console.log("temp", temp);
        console.log("weathers", weathers);
        setTempstate(temp);
        setIcon(data.weather[0].icon);
        setResData(data);
      });
  };

  useEffect(() => {
    //현재위치찾기
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  }, []);

  return (
    <>
      {resData && (
        <CurrentpositionWeather
          api={api}
          data={resData}
          temp={tempstate}
          lat={latitude}
          lon={longitude}
          icon={icon}
        />
      )}
    </>
  );
}

export default GetWeather;
