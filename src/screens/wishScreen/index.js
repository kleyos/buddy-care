import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
  Keyboard
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { navTypes } from '../../config/configureNavigation';
import styles from './styles';

export default class WishScreen extends Component {
  
  state={
    text: '',
    isKeyboard: false,
    warning: false
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ isKeyboard: true });
  }

  _keyboardDidHide = () => {
    this.setState({ isKeyboard: false })
  }

  handleTextChange = text => {
    this.setState({ text, warning: false });
  }

  handleSaveButtonPress = () => {
    if (this.state.text) {
      this.props.navigate(navTypes.OFFER);
      this.props.saveCard({
        text: this.state.text,
        types: 'wishes',
        token: this.props.userToken
      });
    } else {
      this.setState({ warning: true });
    }
  }
  render() {
    const { navigateBack } = this.props;
    const { isKeyboard, warning } = this.state;

    return (
      <View style={styles.container}>
        {!isKeyboard &&
          <View style={{ }}>
            <ImageBackground
              style={styles.bgImage}
              source={require('../../assets/wishBg.png')}
            >
              <StatusBar
                backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#DDAFA1'}
                barStyle="light-content"
              />
            </ImageBackground>
            <Text style={styles.text}> What’s your immediate wish? </Text>
          </View>
        }
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
          <View style={styles.inputContainer}>
            {warning &&
              <Text style={styles.warningText}>
                Please enter Your wish!
              </Text>
            }
            <TextInput
              style={styles.input}
              multiline
              maxLength={500}
              placeholder="Here you can say what you are really-really dreaming about..."
              placeholderTextColor="#5F5D70"
              onChangeText={this.handleTextChange}
              value={this.state.text}
              underlineColorAndroid="transparent"
              textAlignVertical="top"
            />
            <Text style={styles.charText}>{this.state.text.length}/500</Text>
          </View>
          <TouchableOpacity
            onPress={this.handleSaveButtonPress}
          >
            <ImageBackground
              style={styles.btnImage}
              source={require('../../assets/purpleBtn.png')}
            >
              <Text style={styles.btnText}> Save Wish </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        {!isKeyboard &&
          <View style={styles.backBtn}>
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigateBack()}
            />
          </View>
        }
      </View>
    );
  }
}
WishScreen.propTypes = {
  navigate: PropTypes.func.isRequired,
  navigateBack: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired
};

WishScreen.navigationOptions = {
  header: null
};
