import React from 'react';

function bgColor(temp) {
  if (temp < -6) {return '#BAC0E3'}
  else if (temp < 1) {return '#AD8EBF'}
  else if (temp < 7) {return '#94CAE6'}
  else if (temp < 13) {return '#A8E6BE'}
  else if (temp < 19) {return '#FFFC98'}
  else if (temp < 26) {return '#F5C58C'}
  else if (temp > 25) {return '#CC625D'}
}

const Weather = ({ temp, weather}) => {

    let tempCurrent = Math.round(temp.temp);
    let feelsLike = Math.round(temp.feels_like);
    let forecast = weather.description;
    let icon = weather.icon;

    return(
      <div className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc' style={{ backgroundColor: bgColor(tempCurrent)}}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <p className='f2'>{tempCurrent}° C</p>
        <p>Feels like {feelsLike}° C</p>
        <p>Forecast: {forecast}</p>
      </div>
  );
}

export default Weather;
