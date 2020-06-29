import React from 'react';

const Weather = ({ temp, weather}) => {

    let tempCurrent = Math.round(temp.temp / 10);
    let feelsLike = Math.round(temp.feels_like / 10);

    return(
      <div className='bg-light-gray br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <p>{tempCurrent}° C</p>
        <p>Feels like {feelsLike}° C</p>
        <p>Forecast: {weather}</p>
      </div>
  );
}

export default Weather;
