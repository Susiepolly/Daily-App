import React from 'react';

const Time = () => {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  return(
  <h2 className='tc f1-ns f2 pa0 pa5-ns'>{hours}:{minutes}</h2>
  )
}

export default Time;
