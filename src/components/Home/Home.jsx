import React from "react";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import "../Main/Main.css";
import "../Left/Left.css";
import Left from "../Left/Left";
import  "../Left/Left.css";

import axios from "axios";
import Right from "../Right/Right";

function Home() {
  const inputRef = useRef();
  const  [error, setError] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const  [location, setLocation] = useState({lon: null, lat: null});

  const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
  });
  const API_KEY = "0c29188c680bf700ba30a8568f229203";

  useEffect(() => {
    API.get(`/weather?q=tashkent&appid=${API_KEY}&units=metric`).then((res) =>
      setCurrentWeather(res.data)
    );
    API.get(`/forecast?q=tashkent&appid=${API_KEY}&units=metric`).then((res) =>
      setForecast(res.data)
    );
  }, []);

  useEffect(() => {
    API.get(`/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`).then((res) =>
      setCurrentWeather(res.data)
    );
    API.get(`/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`).then((res) =>
      setForecast(res.data)
    );
    API.get(
      `air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
    ).then((res) => setAirQuality(res.data));
  }, [location ])
  const fetchData = () => {
    API.get(
      `/weather?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`
    ).then((res) => setCurrentWeather(res.data));
    API.get(
      `/forecast?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`
    ).then((res) => setForecast(res.data));
    inputRef.current.value = "";
  };
  useEffect(() => {
    if (currentWeather?.coord) {
      API.get(
        `air_pollution?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=${API_KEY}`
      ).then((res) => setAirQuality(res.data));
    }
  }, [currentWeather]);

  return (
    <div className="why">
      <Header setError={setError} setLocation={setLocation} inputRef={inputRef} fetchData={fetchData} />
      <div className="main">
        <Left
          airQuality={airQuality}
          currentWeather={currentWeather}
          forecast={forecast}
        />
      </div>
    </div>
  );
}

export default Home;
