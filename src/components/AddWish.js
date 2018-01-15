import React, { Component } from 'react';
import {
	AppRegistry,
	Text, Button,
	View, Image, TextInput, StyleSheet
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class AddWish extends Component {
	static navigationOptions = {
		title: 'Add Wish/Offer',
	};
	constructor(props) {
		super(props);
		this.state = {};
	}
	submit = () => {
		console.log('submit!!!')
	}

	render() {
		const { navigate, dispatch } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.label}>Well done! One more step</Text>
					<Image />
					<Text style={styles.label}>Add your wish:</Text>
					<TextInput style={styles.input}
					 onChangeText={(wish) => this.setState({...this.state, wish})}
					 value={this.state.wish} />

					<Text style={styles.label}>Add your offer:</Text>
					<TextInput style={styles.input}
					 onChangeText={(offer) => this.setState({...this.state, offer})}
					 value={this.state.offer}
				/>
			</View>
			<View style={styles.row}>
				<Button
					onPress={this.submit}
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
		backgroundColor: '#F5FCFF',
		padding:10,
	},
	label: {
		fontSize: 18,
		margin: 5,
	},
	input:{
		height: 40,
		width: 'auto',
		textAlign:'left',
		padding: 5,
		borderWidth:2,
		borderColor:'#A4DFF9',
		backgroundColor: 'transparent',
	},
	row: {
		fontSize: 10,
	}
});