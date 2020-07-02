import React from 'react';
import './App.css';
import Fact from './components/Fact';
import Weather from './components/Weather';
import Background from './components/Background';
import Clock from './components/Clock';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      temp: '',
      weather: {},
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=3244bedb98e800f1f9b64d8220471999`)
    .then(response => response.json())
    .then(data => this.setState( {temp: data.main, weather: data.weather[0] }))
    }


  render() {
    const { date, temp, weather } = this.state;
    return(
    <Background weather={weather}>
      <Clock />
      <div className='weatherAndFact'>
        <Weather temp={temp} weather={weather}/>
        <Fact />
      </div>
    </Background>
    );
  }
}

export default App;
