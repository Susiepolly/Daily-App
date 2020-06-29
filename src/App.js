import React from 'react';
import './App.css';
import Fact from './components/Fact';
import Weather from './components/Weather';
import Background from './components/Background';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      temp: '',
      weather: '',
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=81339cc8b27e6e2f466f3711da78363b`)
    .then(response => response.json())
    .then(data => this.setState( {temp: data.main, weather: data.weather[0].main }))
    }


  render() {
    const { temp, weather } = this.state;
    return(
    <Background weather={weather}>
        <Weather temp={temp} weather={weather}/>
        <Fact />
    </Background>
    );
  }
}

export default App;
