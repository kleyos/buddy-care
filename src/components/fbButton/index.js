import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export class FbButton extends Component {

  handleFBLogin = (result, error) => {
    if (result == null) {
      console.log('FB login has no object.');
    } else if (error) {
      this.props.login(error);
    } else if (result.isCancelled) {
      this.props.login(result);
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        if (data) {
          this.props.login({ token: data.accessToken });
        }
      });
    }
  };

  handleFbButtonPress = () => {
    const { loggedIn } = this.props;
    if (!loggedIn) {
      LoginManager.logInWithReadPermissions([
        'email',
        'public_profile'
      ]).then(
        result => {
          this.handleFBLogin(result, null);
        },
        error => {
          this.handleFBLogin(null, error);
        }
      );
    } else {
      LoginManager.logOut();
      this.props.logout();
    }

  };

  render() {
    const { loggedIn } = this.props;
    return (
      <TouchableOpacity
        style={styles.guestBtnContainer}
        onPress={() => this.handleFbButtonPress()}
      >
        <View style={styles.fbBtn}>
          <Icon name="facebook-f" size={30} color="#fff" />
          { loggedIn
            ? <Text style={styles.btnText}> Log out from Facebook </Text>
            : <Text style={styles.btnText}> Sign in with Facebook </Text>
          }
        </View>
      </TouchableOpacity>
    );
  }
}
