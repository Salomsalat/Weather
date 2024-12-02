import React from 'react'

function AirQualityItem({ airData, airType }) {
    return (
      <div>
        <p>
          {airType}: <span>{airData}</span>
        </p>
      </div>
    );
  }
  

export default AirQualityItem
