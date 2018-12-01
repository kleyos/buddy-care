import React, { Component } from 'react';

import {
  View,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import { navTypes } from '../../config/configureNavigation';
import styles from './styles';

export default class MainHeader extends Component {
  render() {
    const { loggedIn, userAvatar, navigateBack, navigate } = this.props;

    return (
      <View style={styles.headerContainer}>
        <StatusBar
          backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#7758C4'}
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
          {loggedIn && <Avatar
            small
            rounded
            containerStyle={{ margin: 5 }}
            source={{ uri: userAvatar }}
            onPress={() => navigate(navTypes.MY_PROFILE)}
          />}
          {!loggedIn && <View style={{ width: 50 }} />}
        </View>
      </View>
    );
  }
}
