import React from 'react';

const Clock = ({ time }) => {

    let date = new Date(time);

    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return(
      <h2 className='tc f1-ns f2 pa0 pa5-ns'>{hours}:{minutes}</h2>
    );
}

export default Clock;
