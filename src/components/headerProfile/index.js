import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import styles from './styles';

export default class HeaderProfile extends Component {
    renderHeader = () => {
      const { navigateBack } = this.props;
      return (
        <View style={[styles.headerContainer, styles.shadow]}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.topContainer}>
            <HeaderBackButton
              onPress={() => navigateBack()}
              tintColor="#fff"
            />
            <Image
              style={styles.logo}
              source={require('../../assets/logoLine.png')}
              resizeMode="contain"
            />
            <View style={{ width: 50 }} />
          </View>
        </View>
      );
    }
    render() {
      return this.renderHeader();
    }
}
