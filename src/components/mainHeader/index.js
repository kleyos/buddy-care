import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import { Avatar } from 'react-native-elements';
import styles from './styles';
import { navTypes } from '../../config/configureNavigation';

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      listOfUsers: null
    };
  }
    updateIndex = selectedIndex => {
      const { users, filterUsers } = this.props;
      this.setState({ selectedIndex });
      
      switch (selectedIndex) {
        case 0:
          this.setState(
            { listOfUsers: users },
            () => filterUsers(this.state.listOfUsers)
          );
          break;
        case 1:
          this.setState(
            { listOfUsers: users.filter(item => item.type === 'Wish') },
            () => filterUsers(this.state.listOfUsers)
          );
          break;
        case 2:
          this.setState(
            { listOfUsers: users.filter(item => item.type === 'Offer') },
            () => filterUsers(this.state.listOfUsers)
          );
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

    render() {
      const { loggedIn, userAvatar, navigateBack, navigate } = this.props;
      const buttons = ['All', 'Wishes', 'Offers'];
      
      return (
        <View style={[styles.headerContainer, styles.shadow]}>
          <StatusBar
            backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#7758C4'}
            barStyle="light-content"
          />
          <View style={styles.topContainer}>
            <HeaderBackButton
              onPress={() => navigateBack()}
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
              source={{uri: userAvatar }}
              onPress={() => navigate(navTypes.MY_PROFILE)}
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
}
