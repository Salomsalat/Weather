import React from 'react'
import './Header.css'

function Header({ inputRef, fetchData, setLocation, setError}) {

  const  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {longitude, latitude} = position.coords
      setLocation({lat: latitude, lon: longitude})
    },

    )
  }
  return (
    <div className='headercha'>
      <div className="header_main">
        <div className="weather_logo">
            <h1 className='weather_h1'>Weather</h1>
        </div>
        <div className="links">
            <input ref={inputRef} className='input' placeholder='Enter City Name' type="text" />
            <button  onClick={() => fetchData()} className='search'>🔍 Search</button>
            <button onClick={getCurrentLocation} className='location'>Current Location</button>
        </div>
      </div>
    </div>
  )
}

export default Header
