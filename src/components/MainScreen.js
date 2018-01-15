import React, { Component } from 'react';
import { StyleSheet, View,
  FlatList, Text,
  Image, TouchableOpacity, Button, } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';
import itemList from '../data/data';
import { genarateListOfObject } from './utils'

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'BuddyCare',
    headerRight: <Button color={'black'} title={'+'} onPress={() => console.log('add', navigation)} />
  });


  renderCard = (el, dispatch, i, item) => (
    <View style={styles.item} key={i}>
    <View style={styles.itemRow}>
    <TouchableOpacity
      onPress={()=>
        dispatch(NavigationActions.navigate({ routeName: 'Profile', params: { item } }))}
        >
      <Image source={{uri: el.pic}} style={styles.picture}/>
    </TouchableOpacity>
      <Text style={styles.itemText}> {el.type}</Text>
      <Text style={styles.itemText}> {el.text}</Text>
    </View>

    <View style={styles.itemRow}>
      <Text style={styles.itemName}> {el.name}</Text>
      <Button
        onPress={() =>{console.log(el.type === "offer" ? "APPLY" : "HELP")} }
        title={el.type === "offer" ? "APPLY" : "HELP"}
        color="#008b8b" />
    </View>
  </View>
  )

  renderItemOfList = (item, dispatch) => {
    return genarateListOfObject(item).map((el, i) => this.renderCard(el, dispatch, i, item));
  }

  keyExtractor = item => item._id;

  render() {
    const { dispatch } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={itemList}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => this.renderItemOfList(item, dispatch)}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	item: {
		flex: 1,
		padding: 10,
		borderColor: '#A4DFF9',
		borderWidth: 2,
		width: 350,
		height: 150,
		marginBottom:10,
  },
  itemColumn:{
    flex: 1,
  },
	itemRow: {
		flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
	},
	itemText: {
		fontSize: 12,
		color: 'black',
  },
  itemName: {
		fontSize: 16,
		color: 'black',
	},
	picture: {
		width: 50,
    height: 50,
    borderColor: '#A4DFF9',
		borderWidth: 2,
	}

});
