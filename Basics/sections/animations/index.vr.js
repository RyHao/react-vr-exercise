import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Animated } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();
    this.state = {
      zValue: new Animated.Value(-2)
    }
  }

  moveForward() {
    Animated.spring(this.state.zValue, {
      toValue: -1
    }).start();
  }

  moveExit() {
    Animated.spring(this.state.zValue, {
      toValue: -2
    }).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <Animated.Image
          onEnter={() => this.moveForward()}
          onExit={() => this.moveExit()}
          source={asset('moon.jpg')}
          style={{
            width: 1,
            height: 1,
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: this.state.zValue }
            ]
          }}
        >
        </Animated.Image>
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
