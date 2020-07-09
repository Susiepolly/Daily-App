import React from 'react';

const Searchbox = ({city, searchChange, onCityChange, componentDidMount}) => {
  return(
    <div className='tc'>
      <input type='search' placeholder='London' onChange={searchChange}/>
      <button onClick={onCityChange}>Change City</button>
    </div>
  )
}


export default Searchbox;
