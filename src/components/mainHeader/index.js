import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import { Avatar } from 'react-native-elements';
import styles from './styles';

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      selectedIndex: 0
    };
  }
    updateIndex = selectedIndex => {
      const {
        dispatch, navigate, data, auth: { loggedIn }
      } = this.props;
      this.setState({ selectedIndex });
      switch (selectedIndex) {
        case 0:
          // if (loggedIn) {
          //   navigate('AddWish');
          // } else { navigate('Login'); }
          break;
        case 1:
          // dispatch({ type: 'GET_FILTER_DATA', value: data.fullData });
          break;
        case 2:
          // dispatch({
          //   type: 'GET_FILTER_DATA',
          //   value: data.filter(item => item.type === 'wish')
          // });
          break;

        default: break;
      }
    }
    renderTab = (item, i) => (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => this.updateIndex(i)}
        key={i}
      >
        <View style={i === this.state.selectedIndex
          ? [styles.btnStyle, styles.selectedBtnStyle]
          : styles.btnStyle}
        >
          <Text style={i === this.state.selectedIndex ? [styles.btnText, { opacity: 1 }] : styles.btnText} >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    )

    renderHeader = () => {
      const { auth: { loggedIn = true }} = this.props;
      const buttons = ['All', 'Wishes', 'Offers'];
      return (
        <View style={[styles.headerContainer, styles.shadow]}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.topContainer}>
            <HeaderBackButton
              onPress={() => goBack()}
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
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log('go to profile')}
            />}
            {!loggedIn && <View style={{ width: 50 }} />}
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.btnContainer}>
              {buttons.map((item, i) => this.renderTab(item, i))}
            </View>
          </View>

        </View>
      );
    }
    render() {
      return this.renderHeader();
    }
}