import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {Place} from './components/weather';
import {loadWeather} from './lib/weatherService';
import {seasons, types, iDiv, declOfNum, leapYear} from './lib/utils';

class App extends Component {

  state = {
    galich: {},
    goa: {},
    time: '',
    message: '',
    season: ''
  }

  componentDidMount() {
    loadWeather('Galich,ru').then(galich => this.setState({galich}))
    loadWeather('Vasco Da Gama,in').then(goa => this.setState({goa}))
    this.setState(this.getTime())
  }

  getIcon(data) {
    if (typeof data.weather === 'undefined') {
      return '';
    }

    const weatherIconCode = data.weather[0].icon;
    const weatherIcon = types[data.weather[0].id];

    if (typeof weatherIcon === 'object') {
      return weatherIcon[weatherIconCode];
    }

    return weatherIcon;
  }

  getTime() {
    const d = new Date();
    const month = d.getMonth();
    const year = d.getFullYear();

    const nextYear = year+(month <= 2 ? 0 : 1);
    const nextSpringMonth = 3;
    const isLeap = leapYear(nextYear);
    const nextMonths = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (isLeap) {
      nextMonths[1] = 29;
    }

    const springDate = new Date(nextYear, nextSpringMonth, 1, 0, 0, 0);
    const className = seasons[month];

    if (className === 'spring') {
      return {message: 'Весна!', season: className, time: {__html: ''}};
    } else if (className === 'summer') {
      return {message: 'Лето!', season: className, time: {__html: ''}};
    } else {

      const seconds = iDiv(springDate.getTime() - d.getTime(), 1000);
      const days = iDiv(seconds, 86400) + 1;

      let months = 0;
      let monthDays = 0;
      let i = 0;

      if (nextSpringMonth < month && year < nextYear) {
        for (i = month+1; i <= 11; i++){
          months++;
          monthDays += nextMonths[i];
        }
        for (i = 0; i <= 2; i++){
          months++;
          monthDays += nextMonths[i];
        }


      } else if (nextSpringMonth > month && year === nextYear) {
        for (i = month+1; i <= 2; i++){
          months++;
          monthDays += nextMonths[i];
        }
      }

      let timeMessage = [];

      if (months > 0) {
        timeMessage = [
          months +' месяц'+declOfNum(months, ['', 'а', 'ев']),
          '<br/> и'
        ];

      }

      timeMessage.push((days-monthDays) + ' ' + declOfNum((days-monthDays), ['день', 'дня', 'дней']))

      return {message: 'До весны', season: className, time: {__html: timeMessage.join(' ')}};
    }
  }

  render() {

    const galichWeatherIcon = this.getIcon(this.state.galich);
    const goaWeatherIcon = this.getIcon(this.state.goa);
    const season = "season" + (this.state.season && ' season-'+ this.state.season);
    const galichPlace = typeof this.state.galich.main !== 'undefined' ?
      <Place title="Галич"
             time={this.state.time}
             type="data1"
             temp={this.state.galich.main.temp}
             icon={galichWeatherIcon}
             icon_title={this.state.galich.weather[0].description}
             message={{__html: this.state.message}} />
      : '';
    const goaPlace = typeof this.state.goa.main !== 'undefined' ?
      <Place title="Гоа"
             type="data2"
             temp={this.state.goa.main.temp}
             icon={goaWeatherIcon}
             icon_title={this.state.goa.weather[0].description}
             message={{__html: "Всегда<br />лето!"}} />
      : '';

    return (
      <div className={season}>
        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
        <img src={logo} className="App-logo" alt="logo" />
        <div className="gerb" title="Герб Галича"></div>
        {galichPlace}
        {goaPlace}
      </div>
    );
  }
}

export default App;
