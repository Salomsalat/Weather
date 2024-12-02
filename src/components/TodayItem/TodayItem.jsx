import React from 'react'
import { CiCloud } from "react-icons/ci";
import '../Today/Today.css'

function TodayItem({ currentTime , currentTemp , currentIcon}) {
  return (
    <div>
      <div className="weather-card">
          <span className="time">9 AM</span>
          <span className="icon"><CiCloud /></span>
          <span className="temp">35.09°C</span>
        </div>
    </div>
  )
}

export default TodayItem
