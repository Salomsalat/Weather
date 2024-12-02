import React from "react";

const ForecastItem = ({ data }) => {
  const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const forecastItemData = data
    ? {
        day: weekDays[new Date(data.dt * 1000).getDay()],
        date: new Date(data.dt * 1000).getDate(),
        month: months[new Date(data.dt * 1000).getMonth()],
        deg: data.main?.temp || "N/A",
        icon: data.weather[0]?.icon || "01d",
      }
    : { day: "N/A", date: "N/A", month: "N/A", deg: "N/A", icon: "01d" };

  return (
    <div>
      <li className="bottom_item">
        <img
          className="logo"
          src={`https://openweathermap.org/img/wn/${forecastItemData.icon}@2x.png`}
          alt="Weather Icon"
        />
        {forecastItemData.deg}&deg;C
        <span>
          {forecastItemData.date} {forecastItemData.month}
        </span>
        <span>{forecastItemData.day}</span>
      </li>
    </div>
  );
};

export default ForecastItem;
