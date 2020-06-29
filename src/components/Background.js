import React from 'react';
import Clouds from '../img/Clouds.png';

const Background = (props, {weather}) => {
  if (weather === 'Clouds') {
    return (
      <div style="background-image: url(Clouds)">
        {props.children}
      </div>
    )
  }
}

export default Background;
