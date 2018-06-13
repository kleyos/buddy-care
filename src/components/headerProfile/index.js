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

export default class HeaderProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      selectedIndex: 0
    };
  }

    renderHeader = () => {
      const { auth: { loggedIn } } = this.props;
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
