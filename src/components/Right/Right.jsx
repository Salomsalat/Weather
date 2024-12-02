import React from "react";
import "./Right.css";
import Today from "../Today/Today";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { PiThermometerDuotone } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";
import AirQualityItem from "../AirQualityItem/AirQualityItem";

const Right = ({ airQuality, currentWeather, forecast }) => {

  const todayAt = forecast?.list.slice(0, 8)

  console.log(todayAt);
  

  const sun = {
    sunriseHour: new Date(currentWeather?.sys?.sunrise * 1000).getHours(),
    sunriseMinute: new Date(currentWeather?.sys?.sunrise * 1000).getMinutes(),
    sunsetHour: new Date(currentWeather?.sys?.sunset * 1000).getHours(),
    sunsetMinute: new Date(currentWeather?.sys?.sunset * 1000).getMinutes(),
  };

  const formatTime = (hours, minutes) => {
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };
  let airQualityName = ["good", "Fair", "Moderate", "Poor", "Very poor"];
  let airStatus = airQualityName[airQuality?.list[0].main.aqi - 1];

  return (
    <div className="dashboard">
      <div className="grid-container">
        <h1 className="need_h1">Todays Highlight</h1>
        <div className="NEED">
          <div className="card air-quality">
            <div className="hmmm">
              <h3>Air Quality Index</h3>
              <span
                className={`badge ${airQualityName[
                  airQuality?.list[0].main.aqi - 1
                ]
                  ?.slice(0, 4)
                  .toLowerCase()}`}
              >
                {airQualityName[airQuality?.list[0].main.aqi - 1]}
              </span>
            </div>
            <div className="air-quality-data">
              <AirQualityItem
                airType={"CO"}
                airData={airQuality?.list[0].components.co}
              />
              <AirQualityItem
                airType={"NH3"}
                airData={airQuality?.list[0].components.nh3}
              />
              <AirQualityItem
                airType={"NO"}
                airData={airQuality?.list[0].components.no}
              />
              <AirQualityItem
                airType={"NO2"}
                airData={airQuality?.list[0].components.no2}
              />
              <AirQualityItem
                airType={"O3"}
                airData={airQuality?.list[0].components.o3}
              />
              <AirQualityItem
                airType={"PM2.5"}
                airData={airQuality?.list[0].components.pm2_5}
              />
              <AirQualityItem
                airType={"SO2"}
                airData={airQuality?.list[0].components.so2}
              />
            </div>
          </div>

          <div className="card sunrise-sunset">
            <h3 className="hh3">Sunrise & Sunset</h3>
            <div className="row">
              <FiSunrise className="sun" />
              <p className="p">
                <span>{`${formatTime(
                  sun.sunriseHour,
                  sun.sunriseMinute
                )} AM`}</span>
              </p>
              <FiSunset className="sun" />
              <p className="p">
                <span>{`${formatTime(
                  sun.sunsetHour,
                  sun.sunsetMinute
                )} PM`}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="info">
          <ul className="info_list">
            <li className="info_item">
              <span className="info_span">Humidity</span>
              <div className="loll">
                <MdOutlineWaterDrop
                  style={{ color: "white", width: "35px", height: "40px" }}
                />
                <h1 className="katta">{currentWeather?.main.humidity}%</h1>
              </div>
            </li>
            <li className="info_item">
              <span className="info_span">Pressure</span>
              <div className="loll">
                <FaRegCompass     
                  style={{ color: "white", width: "35px", height: "40px" }}
                />
                <h1 className="katta">{currentWeather?.main.pressure}hPa</h1> 
              </div>
            </li>
            <li className="info_item">
              <span className="info_span">Visibility</span>
              <div className="loll">
                <MdOutlineVisibility
                  style={{ color: "white", width: "35px", height: "40px" }}
                />
                <h1 className="katta">{currentWeather?.main?.sea_level / 1000}km</h1>
              </div>
            </li>
            <li className="info_item">
              <span className="info_span">Wind Speed</span>
              <div className="loll">
                <TbLocation
                  style={{ color: "white", width: "35px", height: "40px" }}
                />
                <h1 className="katta">{currentWeather?.wind.speed}m/s</h1>
              </div>
            </li>
            <li className="info_item">
              <span className="info_span">Feels Like</span>
              <div className="loll">
                <PiThermometerDuotone
                  style={{ color: "white", width: "35px", height: "40px" }}
                />
                <h1 className="katta">{currentWeather?.main.feels_like}°C</h1>
              </div>
            </li>
          </ul>
          <Today />
        </div>
      </div>
    </div>
  );
};

export default Right;
