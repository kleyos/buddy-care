import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import {
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from './styles';

export default class WishScreen extends Component {
  state={
    text: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ }}>
          <ImageBackground
            style={styles.bgImage}
            source={require('../../assets/wishBg.png')}
          >
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
            />
          </ImageBackground>
          <Text style={styles.text}> What’s your immediate wish? </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              multiline
              maxLength={500}
              placeholder={'Here you can say what you are really-really dreaming about...'}
              placeholderTextColor={'#5F5D70'}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Text style={styles.charText}>0/500</Text>
          </View>
          <ImageBackground
            style={styles.btnImage}
            source={require('../../assets/purpleBtn.png')}
          >
            <Text style={styles.btnText}> Next </Text>
          </ImageBackground>
        </View>
        <TouchableOpacity
          style={styles.skipBtn}
          onPress={() => console.log('skip')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
WishScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

WishScreen.navigationOptions = {
  header: null
};
