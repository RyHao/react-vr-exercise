import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

import WeatherCard from './vr/components/WeatherCard';
import WindCloudObject from './vr/components/WindCloudObject';

const API_KEY = '73540f2b4c0244895a63bfbe14a3f331';

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weather: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          { description: '' }
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=${API_KEY}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ weather: json }))
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
        <WeatherCard weather={this.state.weather} />
        <WindCloudObject wind={this.state.weather.wind} />
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);


