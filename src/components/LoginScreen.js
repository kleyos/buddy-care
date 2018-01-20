import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import FBSDK from 'react-native-fbsdk';
import { Avatar } from 'react-native-elements';

const { LoginButton, AccessToken, GraphRequestManager,  GraphRequest} = FBSDK;

export default class LoginScreen extends Component {
	responseInfoCallback = (error, result ) => {
		const { navigation } = this.props;
		if (error) {
		  console.log('Error fetching data: ' + error.toString());
		} else {
			navigation.dispatch({ type: 'LOGIN', value: result });
		}
	}
	render() {
		const { navigation } = this.props;
		return <View style={styles.container}>
			<View style={{flex: 1}}>
				<Text style={styles.welcome}>
					Marketplace for good acts
				</Text>
			</View>
			<View style={{flex: 1}}>
				<Avatar source={require('../images/super.jpg')}
					avatarStyle={{width: 300, height: 250}}
					imageProps={{resizeMode: 'contain'}} />
			</View>
			<View style={{flex: 0.5}}>
				<LoginButton
					publishPermissions={['publish_actions']}
					onLoginFinished={
						(error, result) => {
							if (error) {
								console.log('login has error: ' + result.error);
							} else if (result.isCancelled) {
								console.log('login is cancelled.');
							} else {
								AccessToken.getCurrentAccessToken().then(
									(data) => {
										const infoRequest = new GraphRequest(
											'/me?fields=name,picture',
											null,
											this.responseInfoCallback
										);
										new GraphRequestManager().addRequest(infoRequest).start();
									});
							}
						}
					}
					onLogoutFinished={() => console.log('logout')}
				/>
			</View>
		</View>;
	}
}
LoginScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
	title: 'Welcome to BuddyCare',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Cochin',
	},
});
