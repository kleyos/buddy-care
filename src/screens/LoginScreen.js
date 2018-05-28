import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import FBSDK from 'react-native-fbsdk';

const {
  LoginButton
} = FBSDK;

export default class LoginScreen extends Component {
  render() {
    const { dispatch } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 0.5 }}>
          <LoginButton
            publishPermissions={['publish_actions']}
            onLoginFinished={(error, result) => this.props.login({ error, result, dispatch })}
            onLogoutFinished={() => console.log('logout')}
          />
        </View>
      </View>);
  }
}
LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  title: 'Welcome to BuddyCare',
  headerLeft: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Cochin'
  },
  skip: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Cochin',
    color: '#008b8b'
  }

});
