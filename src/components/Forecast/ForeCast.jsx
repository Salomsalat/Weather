import React from 'react'
import '../Left/Left.css'
import ForecastItem from '../ForecastItem/ForecastItem';
function ForeCast({ forecast }) {

  return (
      <div className='omg'>
          <div className="bottom_case">
              <div className="bottom_case_2">
                  <h2 className="bottom_h2">5 days forecast</h2>
                  <ul className="bottom_list">
                      <ForecastItem data={forecast?.list[7]} />
                      <ForecastItem data={forecast?.list[15]} />
                      <ForecastItem data={forecast?.list[23]} />
                      <ForecastItem data={forecast?.list[31]} />
                      <ForecastItem data={forecast?.list[39]} />
                  </ul>
              </div>
          </div>
      </div>
  );
}


export default ForeCast
