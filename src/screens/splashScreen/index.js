import React, { Component } from 'react';

import { Image, ImageBackground } from 'react-native';
import styles from './styles';

export default class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/loginBg.png')}>
        <Image
          style={styles.splash}
          source={require('../../assets/logoWite.png')}
          resizeMode="contain"
        />
      </ImageBackground>);
  }
}
SplashScreen.navigationOptions = {
  header: null
};
