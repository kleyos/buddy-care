import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';

import styles from './styles';
import { navTypes } from '../../config/configureNavigation';
import { FbButton } from '../../components/fbButton';


export default class LoginScreen extends Component {
  render() {
    const { navigate, fetchAllUsers } = this.props;
    return (
      <ImageBackground
        style={styles.bgContainer}
        source={require('../../assets/loginBg.png')}
      >
        <StatusBar
          backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#7758C4'}
          barStyle="light-content"
        />
        <View style={styles.container}>
          <View style={{ flex: 0.5, alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../../assets/logoWite.png')}
              resizeMode="contain"
            />
            <Text style={styles.welcome}>Marketplace for good acts </Text>
          </View>
          <View style={{ flex: 0.4, justifyContent: 'center' }}>          
            <FbButton {...this.props}/>
            <TouchableOpacity
              style={styles.guestBtnContainer}
              onPress={() => {
                navigate(navTypes.MAIN);
                fetchAllUsers();
              }}
            >
              <View style={styles.guestBtn}>
                <Text style={styles.btnText}> Enter as a guest </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.1, justifyContent: 'flex-end' }}>
            <Text style={styles.privasyText}>By signing up you agree to Terms of Use and Privacy Policy.</Text>
          </View>
        </View>
      </ImageBackground>);
  }
}
LoginScreen.propTypes = {
  navigate: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  fetchAllUsers: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

LoginScreen.navigationOptions = {
  header: null
};

