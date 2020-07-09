import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Fact from './components/Fact';
import Weather from './components/Weather';
import Background from './components/Background';
import Searchbox from './components/Searchbox';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      temp: '',
      weather: {},
      searchfield: 'London',
      city: 'London',
    }
  }

  componentDidMount = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchfield}&units=metric&appid=3244bedb98e800f1f9b64d8220471999`)
    .then(response => response.json())
    .then(data => this.setState( {temp: data.main, weather: data.weather[0] }))
    }

    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
    }

    onCityChange = () => {
      this.setState({city: this.state.searchfield});
      this.componentDidMount();
    }


  render() {
    const { temp, weather, city, date } = this.state;
    return(
    <Background weather={weather}>
      <Clock />
      <div className='weatherAndFact'>
        <Weather city={city} temp={temp} weather={weather}/>
        <Fact />
      </div>
      <Searchbox onCityChange={this.onCityChange} searchChange={this.onSearchChange} componentDidMount={this.componentDidMount}/>
    </Background>
    );
  }
}

export default App;
