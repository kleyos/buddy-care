import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

export default class AddWish extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount(){
		console.log('mount')
		const { token } = this.props.screenProps.auth;
		fetch(`https://graph.facebook.com/${token}?fields=id,name,picture`)
			.then(res => res.json())
			.then(resJson => console.log('resJson',resJson))
			.catch(error =>console.log(error) )
	}

	submit = (dispatch) => {
		console.log('submit!!!')
		dispatch(NavigationActions.navigate({ routeName: 'Main', params: {} }))
	}

	render() {
		const { navigate, dispatch } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={{flex: 0.5}}>
					<Text style={styles.welcome}>Well done! One more step.</Text>
				</View>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',  marginBottom: 10 }}>
					<Image style={{width: 200, height: 200}}
						source={require('../images/smile.jpg')}
						resizeMode='contain'/>
				</View>
				<View style={{flex: 1,}}>
					<Text style={styles.label}>Add your wish:</Text>
					<TextInput
						style={styles.input}
					 	onChangeText={(wish) => this.setState({...this.state, wish})}
					 	value={this.state.wish} />

					<Text style={styles.label}>Add your offer:</Text>
					<TextInput
						style={styles.input}
					 	onChangeText={(offer) => this.setState({...this.state, offer})}
					 	value={this.state.offer} />
				</View>
				<View style={{flex: 1}}>
					<Button
						onPress={() => this.submit(dispatch)}
						title="SUBMIT"
						color="#a52a2a" />

					<Button
						onPress={() =>
							dispatch(NavigationActions.navigate({ routeName: 'Main', params: {} }))}
						title="skip for now >>"
						color="#008b8b" />
				</View>
		</View>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		padding:10,
	},
	welcome: {
		fontSize: 25,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Cochin',
	},
	label: {
		fontSize: 12,
		margin: 5,
		fontSize: 20,
		textAlign: 'center',
	},
	input:{
		height: 40,
		width: 'auto',
		textAlign:'left',
		padding: 5,
		borderWidth:1,
		borderColor:'#A4DFF9',
		backgroundColor: 'transparent',
	},
});