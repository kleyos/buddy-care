import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import FBSDK from 'react-native-fbsdk';

const { LoginButton, AccessToken } = FBSDK;

export default class LoginScreen extends Component {
	render() {
		const { navigation } = this.props;
		return <View style={styles.container}>
			<View style={{flex: 1}}>
				<Text style={styles.welcome}>
					Marketplace for good acts
				</Text>
			</View>
			<View style={{flex: 2}}>
				<Image style={{width: 300, height: 250}}
					sourse={require('../images/super.jpg')}/>
			</View>
			<View style={{flex: 1}}>
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
										console.log('my token ',data.accessToken.toString());

										navigation.dispatch({ type: 'LOGIN', value: data.accessToken.toString() });
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
