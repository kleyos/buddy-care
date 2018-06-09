import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from './styles';
import { navTypes } from '../../config/configureNavigation';

export default class WishScreen extends Component {
  state={
    text: ''
  }
  render() {
    const { navigation: { navigate } } = this.props;
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
              placeholder="Here you can say what you are really-really dreaming about..."
              placeholderTextColor="#5F5D70"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Text style={styles.charText}>{this.state.text.length}/500</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate(navTypes.OFFER)}
          >
            <ImageBackground
              style={styles.btnImage}
              source={require('../../assets/purpleBtn.png')}
            >
              <Text style={styles.btnText}> Save Wish </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.skipBtn}
          onPress={() => navigate(navTypes.OFFER)}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
WishScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

WishScreen.navigationOptions = {
  header: null
};
