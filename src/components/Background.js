import React from 'react';
import Sun from '../img/sun.jpg';
import ClearNight from '../img/clearnight.jpg';
import FewClouds from '../img/fewClouds.jpg';
import FewCloudsN from '../img/fewCloudsN.jpg';
import Clouds from '../img/clouds.png';
import CloudsN from '../img/cloudsN.png';
import Rain from '../img/rain.jpg';
import RainN from '../img/rainN.jpg';
import Storm from '../img/thunderstorm.jpg';
import Snow from '../img/snow.jpg';
import Mist from '../img/mist.jpg';


function weatherImg(icon) {
  switch(icon) {
    case '01d':
      return Sun;
      break;
    case '01n':
      return ClearNight;
      break;
    case '02d':
      return FewClouds;
      break;
    case '02n':
      return FewCloudsN;
      break;
    case '03d':
    case '04d':
      return Clouds;
      break;
    case '03n':
    case '04n':
      return CloudsN;
      break;
    case '09d':
    case '10d':
      return Rain;
      break;
    case '09n':
    case '10n':
      return RainN;
      break;
    case '11d':
    case '11n':
      return Storm;
      break;
    case '13d':
    case '13n':
      return Snow;
      break;
    case '50d':
    case '50n':
      return Mist;
      break;
    default:
     return FewClouds;
  }
}

const Background = (props) => {
  let weatherIcon = props.weather.icon;

  let sectionStyleLight = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${weatherImg(weatherIcon)})`,
  color: "#000000",
  textShadow: "1px 1px rgb(255, 255, 255, 0.5)",
  position: 'absolute',
  top:'0'
  };

  let sectionStyleDark = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${weatherImg(weatherIcon)})`,
  color: "#ffffff",
  textShadow: "1px 1px rgb(0, 0, 0, 0.5)",
  position: 'absolute',
  top:'0'
  };

  function selectStyle(image) {
    switch(image) {
      case Sun:
      case FewClouds:
      case Clouds:
      case Rain:
      case Snow:
      case Mist:
        return sectionStyleLight;
        break;
      case ClearNight:
      case FewCloudsN:
      case CloudsN:
      case RainN:
      case Storm:
        return sectionStyleDark;
        break;
      default:
      return sectionStyleLight;
    }
  }

  return (
    <div style={ selectStyle(weatherImg(weatherIcon)) }>
      {props.children}
    </div>
  )

}

export default Background;
