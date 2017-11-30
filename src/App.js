import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to uWeather!</h1>
       <SearchBar />
       <WeatherList />
       <footer>Copyright@uyenntm 2017</footer>
      </div>
    );
  }
}

export default App;
