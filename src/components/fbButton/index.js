import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


export class FbButton extends Component {

  responseInfoCallback = (error, result) => {
    if (error) {
      this.props.login(error);
    } else {
      console.log(result, 'result');
      this.props.login(result);
    }
  }
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
          console.log(data, 'facebookdata');
          // this.setAsyncItem(data.accessToken);
          const infoRequest = new GraphRequest(
            '/me?fields=name,picture.width(500).height(500)',
            null,
            this.responseInfoCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
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
