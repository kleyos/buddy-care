import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { Button, StyleSheet, Text, View, Image} from 'react-native';
import FBSDK from 'react-native-fbsdk';
import { Avatar } from 'react-native-elements';

const { LoginButton, AccessToken, GraphRequestManager,  GraphRequest} = FBSDK;

export default class LoginScreen extends Component {
	componentDidMount() {
		const infoRequest = new GraphRequest(
			'/me?fields=name,picture.width(500).height(500)',
			null,
			this.responseInfoCallback
		);
		new GraphRequestManager().addRequest(infoRequest).start();
	}
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
			<View style={{flex: 0.6}}>
				<Text style={styles.welcome}>
					Marketplace
				</Text>
				<Text style={styles.welcome}>
					for good acts
				</Text>
			</View>
			<View style={styles.imageContainer}>
				<Image source={require('../images/super.jpg')}
					style={styles.imageStyle}
					resizeMode={'contain'} />
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
											'/me?fields=name,picture.width(500).height(500)',
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
				<Text style={styles.skip}
						onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Main' }))}>
						skip for now >>
				</Text>
			</View>
		</View>;
	}
}
LoginScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
	title: 'Welcome to BuddyCare',
	headerLeft: null,
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
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	imageStyle: {
		flex: 1,
	},
	skip: {
		fontSize: 14,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Cochin',
		color: "#008b8b",
	}

});
