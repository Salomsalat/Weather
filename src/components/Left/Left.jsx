import React from "react";
import "./Left.css";
import Forecast from "../Forecast/ForeCast";
import Right from "../Right/Right";

function Left({ currentWeather, forecast, airQuality }) {
  console.log(currentWeather);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = currentWeather
    ? {
        day: weekDays[new Date(currentWeather.dt * 1000).getDay()],
        date: new Date(currentWeather.dt * 1000).getDate(),
        month: months[new Date(currentWeather.dt * 1000).getMonth()],
        year: new Date(currentWeather.dt * 1000).getFullYear(),
      }
    : { day: "N/A", date: "N/A", month: "N/A", year: "N/A" };

  const getNextFiveDays = () => {
    const today = new Date();
    return Array.from({ length: 5 }, (_, i) => {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i + 1);
      return {
        dayName: weekDays[nextDay.getDay()],
        date: nextDay.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
      };
    });
  };

  const fiveDayDates = getNextFiveDays();

  return (
    <div className="need">
      <div className="all_wrap">
        <div className="lmao">
          <div className="top_case">
            <div className="kerak">
              <div className="top_case_top">
                <div className="omg">
                  <span className="top_span">Now</span>
                  <h2>{currentWeather?.main?.temp || "N/A"}&deg;C</h2>
                  <span className="haze">
                    {currentWeather?.weather[0]?.description || "N/A"}
                  </span>
                </div>
                <div className="top_case_diff">
                  <img
                    width={60}
                    height={60}
                    src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className="low_case">
                <span className="days">
                  {currentDate.day}, {currentDate.date} {currentDate.month}
                  {currentDate.year}
                </span>
                <span className="city">
                  {currentWeather?.name}, {currentWeather?.sys.country}
                </span>
              </div>
            <Forecast forecast={forecast} />
            </div>
          </div>
        </div>
        <Right  forecast={forecast} currentWeather={currentWeather} airQuality={airQuality} />
      </div>
    </div>
  );
}

export default Left;
