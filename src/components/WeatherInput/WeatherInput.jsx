
import React from "react";

export default function WeatherInput({ data }) {
  const month = [
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

  const format = (hours) => {
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours} ${ampm}`;
  };

  const dayData = {
    day: new Date(data?.dt * 1000).getDate(),
    month: month[new Date(data?.dt * 1000).getMonth()],
    date: format(new Date(data?.dt * 1000).getHours()),
  };
  return (
    <li className="sidebar__inner-right-top-weather-item">
      <span className="sidebar__inner-right-top-weather-item-span">
        {dayData?.day} {dayData?.month?.slice(0, 3)}
      </span>

      <h3 className="sidebar__inner-right-top-weather-item-head">
        {dayData.date}
      </h3>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        className="sidebar__inner-right-top-weather-item-img"
      />
      <h3 className="sidebar__inner-right-top-weather-item-title">
        {data?.main.temp}°C
      </h3>
    </li>
  );
}
