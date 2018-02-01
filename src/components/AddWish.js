import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

export default class AddWish extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	submit = (dispatch) => {
		console.log('submit!!!')
		dispatch(NavigationActions.navigate({ routeName: 'Main' }))
	}

	render() {
		const { navigate, dispatch } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={{flex: 0.5}}>
					<Text style={styles.welcome}>Well done! One more step.</Text>
				</View>
				<View style={styles.imageContainer}>
					<Image style={styles.imageStyle}
						source={require('../images/smile.jpg')}
						resizeMode='contain'/>
				</View>
				<View style={styles.inputContainer}>
					<View>
						<Text style={styles.label}>Add your wish:</Text>
						<TextInput
							style={styles.input}
							onChangeText={(wish) => this.setState({...this.state, wish})}
							value={this.state.wish} />
					</View>
					<View>
						<Text style={styles.label}>Add your offer:</Text>
						<TextInput
							style={styles.input}
							onChangeText={(offer) => this.setState({...this.state, offer})}
							value={this.state.offer} />
					</View>
				</View>
				<View style={{flex: 1, alignItems: 'center'}}>
					<View style={{width: 100}}>
						<Button
							onPress={() => this.submit(dispatch)}
							title="SUBMIT"
							color="#a52a2a" />
					</View>

					<Text style={styles.skip}
						onPress={() => dispatch(NavigationActions.navigate({ routeName: 'Main' }))}>
						skip for now >>
					</Text>
				</View>
		</View>)
	}
}
AddWish.navigationOptions = () => ({ header: null })

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		padding:10,
		overflow: 'scroll',
	},
	welcome: {
		fontSize: 25,
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
	label: {
		fontSize: 12,
		margin: 5,
		textAlign: 'center',
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	input:{
		height: 40,
		width: 300,
		margin:5,
		textAlign:'left',
		padding: 5,
		borderWidth:1,
		borderColor:'#008b8b',
		backgroundColor: 'transparent',
	},
	skip: {
		fontSize: 14,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Cochin',
		color: "#008b8b",
	}
});