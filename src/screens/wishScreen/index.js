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
  constructor(props) {
    super(props);
    this.state = {
      isKeyboard: false,
      warning: false,
      text: this.props.navigation.state.params.text || '',
      flag: this.props.navigation.state.params.flag || 'save',
      id: this.props.navigation.state.params.id || null
    };
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
    const { text, flag, id } = this.state;
    const {
      isFirstWish, userToken, saveCard,
      editCard, navigate, navigateBack
    } = this.props;
    if (text) {
      if (!isFirstWish && flag === 'save') {
        saveCard({
          text,
          types: 'wishes',
          token: userToken
        });
        navigate(navTypes.OFFER);
      } else if (isFirstWish && flag === 'save') {
        saveCard({
          text,
          types: 'wishes',
          token: userToken
        });
        navigate(navTypes.MY_PROFILE, { addBtn: false });
      } else if (isFirstWish && flag === 'edit') {
        editCard({
          text,
          types: 'wishes',
          id,
          token: userToken
        });
        navigateBack();
      }
    } else {
      this.setState({ warning: true });
    }
    Keyboard.dismiss();
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
              KeyboardType="phone-pad"
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
  navigation: PropTypes.object.isRequired,
  navigateBack: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired,
  isFirstWish: PropTypes.bool
};

WishScreen.navigationOptions = {
  header: null
};
