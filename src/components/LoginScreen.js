import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import FBSDK from 'react-native-fbsdk';

const { LoginButton, AccessToken } = FBSDK;

const LoginScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text style={styles.welcome}>
      		Marketplace for good acts
		</Text>
		<Image />
		<Text style={styles.instructions}>
			{'  '}
			{'  '}
			{'  '}
		</Text>
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
);

LoginScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
	title: 'Log In',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
export default LoginScreen;
