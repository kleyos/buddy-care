import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderBackButton } from 'react-navigation';
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

export default class OfferScreen extends Component {
  state={
    text: ''
  }
  render() {
    const { navigation: { navigate, goBack } } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ }}>
          <ImageBackground
            style={styles.bgImage}
            source={require('../../assets/offerBg.png')}
          >
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
            />
          </ImageBackground>
          <Text style={styles.text}> What could you offer right now? </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              multiline
              maxLength={500}
              placeholder="Here you can say what you could offer for somebody else…"
              placeholderTextColor="#5F5D70"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Text style={styles.charText}>{this.state.text.length}/500</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate(navTypes)}
          >
            <ImageBackground
              style={styles.btnImage}
              source={require('../../assets/purpleBtn.png')}
            >
              <Text style={styles.btnText}> Save Offer </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.skipBtn}
          onPress={() => console.log('skip')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.backBtn}>
          <HeaderBackButton 
            tintColor="#fff"
            onPress={() => goBack()}
          />
        </View>
      </View>
    );
  }
}
OfferScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

OfferScreen.navigationOptions = {
  header: null
  // headerStyle: {
  //   backgroundColor: 'transparent'
  // }
};
