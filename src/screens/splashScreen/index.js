import React, { Component } from 'react';

import { Image } from 'react-native';
import styles from '../../components/headerProfile/styles';

export default class SplashScreen extends Component {
  render() {
    return (<Image
      style={styles.splash}
      source={require('../../assets/splashScreen.png')}
    />);
  }
}

SplashScreen.navigationOptions = {
  header: null
};
