import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image} from 'react-native';


const LoginScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text style={styles.welcome}>
      Marketplace for good acts
		</Text>
		<Image />
		<Text style={styles.instructions}>
      {"  "}
      {"  "}
      {"  "}
		</Text>
		<Button
			onPress={() => navigation.dispatch({ type: 'LOGIN' })}
			title="Log with Facebook"
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
