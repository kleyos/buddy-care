import React, { Component } from 'react';
import { StyleSheet, View,
  FlatList, Text,
  Image, TouchableOpacity, Button, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements'

import { NavigationActions } from 'react-navigation';
import Header from './Header'

import itemList from '../data/data';
import { genarateListOfObject } from './utils'

export default class MainScreen extends Component {
  componentDidMount() {
    this.props.navigation.dispatch({ type: 'CLEAR_FILTER_DATA' })
    this.props.navigation.dispatch({ type: 'GET_ALL_DATA' , value: itemList })
  }
  renderCard = (el, dispatch, i, data) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <View style={styles.itemRow}>
		 <Avatar medium rounded
			source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} //el.pic
			onPress={()=>{
				dispatch({
					type: 'CLEAR_FILTER_DATA' ,
				})
				dispatch({
					type: 'GET_PROFILE_DATA' ,
					value: data.fullData.filter(elem => elem.id === el.id),
				})
				dispatch(NavigationActions.navigate({
					routeName: 'Profile',
					params: {
						id: el.id,
						name: el.name,
						pic: el.pic,
					}
				}))
			}}
			activeOpacity={0.7}
		/>
	  	<Text style={styles.itemName}> {el.name}</Text>
      </View>
      <Text style={styles.itemText}> {el.text}</Text>
      <View style={styles.itemRowBtn}>
		<Badge containerStyle={{ backgroundColor: el.type === 'wish' ? 'yellow' : 'lightblue'}}>
  			<Text>{el.type}</Text>
		</Badge>
		<Badge containerStyle={{ backgroundColor: el.status === 'waiting' ? '#37b5ae' : '#EBEAEA'}}>
  			<Text>{el.status}</Text>
		</Badge>
        <Button
          onPress={() =>{console.log('change status on accepted')} }
          title={(el.type === "offer" ? "APPLY" : "HELP")}
          color="#008b8b"
          disabled={el.status !== 'waiting'}/>
      </View>
    </View>
  )

  renderItemOfList = (item, dispatch, i, data) => {
    return this.renderCard(item, dispatch, i, data);
  }

  keyExtractor = (item, i) => i;

  render() {
    const { dispatch } = this.props.navigation;
    const { data } = this.props.screenProps;
    return (
        <FlatList
			style={styles.container}
        	data={data.filterData || data.fullData}
        	keyExtractor={this.keyExtractor}
			renderItem={({item, i}) =>  this.renderCard(item, dispatch, i, data)}
        />
    )
  }
}

MainScreen.navigationOptions = ({ navigation, screenProps }) => ({
  headerRight: <Header
  	dispatch={navigation.dispatch}
  	navigate={navigation.navigate}
  	back={navigation.goBack}
  	// data={screenProps.data.fullData}
  	// auth={screenProps.auth}
/>,
})


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F7F7',
	},
	item: {
		flex:1,
		padding: 10,
		margin: 5,
		backgroundColor: '#FFF',
	},
	itemShadow:{
		shadowColor:'#EBEAEA',
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 1,
		shadowRadius: 10,
	},
	itemRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	itemRowBtn: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemText: {
		padding: 5,
		fontSize: 12,
		color: 'black',
	},
	itemName: {
		fontSize: 16,
		color: 'black',
	},

	});
