import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderBackButton } from 'react-navigation';
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
import styles from './styles';
import { navTypes } from '../../config/configureNavigation';

export default class OfferScreen extends Component {
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
    this.setState({ isKeyboard: false });
  }

  handleTextChange = text => {
    this.setState({ text, warning: false });
  }

  handleSaveButtonPress = () => {
    const { text, flag, id } = this.state;
    const {
      isFirstWish,
      userToken,
      setFirstWish,
      saveCard,
      editCard,
      navigate,
      navigateBack
    } = this.props;
    if (text) {
      if (!isFirstWish && flag === 'save') {
        setFirstWish();
        saveCard({
          text,
          types: 'offers',
          token: userToken
        });
        navigate(navTypes.MAIN);
      } else if (isFirstWish && flag === 'save') {
        saveCard({
          text,
          types: 'offers',
          token: userToken
        });
        navigateBack();
      } else if (isFirstWish && flag === 'edit') {
        editCard({
          text,
          types: 'offers',
          id,
          token: userToken
        });
        navigateBack();
      }
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
              source={require('../../assets/offerBg.png')}
            >
              <StatusBar
                backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#8BB6F0'}
                barStyle="light-content"
              />
            </ImageBackground>
            <Text style={styles.text}> What could you offer right now? </Text>
          </View>
        }
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
          <View style={styles.inputContainer}>
            {warning &&
              <Text style={styles.warningText}>
                Please enter Your offer!
              </Text>
            }
            <TextInput
              style={styles.input}
              multiline
              maxLength={500}
              placeholder="Here you can say what you could offer for somebody else…"
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
              <Text style={styles.btnText}> Save Offer </Text>
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
OfferScreen.propTypes = {
  navigate: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  navigateBack: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  setFirstWish: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired,
  isFirstWish: PropTypes.bool
};

OfferScreen.navigationOptions = {
  header: null
};
