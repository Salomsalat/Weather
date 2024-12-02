import React from 'react';
import './Today.css';
import TodayItem from '../TodayItem/TodayItem';

const Today = () => {
  return (
    <div className="today-weather">
      <h2>Today at</h2>
      <div className="weather-cards">
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
        <TodayItem/>
      </div>
    </div>
  );
};

export default Today;
