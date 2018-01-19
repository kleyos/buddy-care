import React, { Component } from 'react';
import { StyleSheet, View,
  FlatList, Text,
  Image, TouchableOpacity, Button, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Header from './Header'

import itemList from '../data/data';
import { genarateListOfObject } from './utils'

export default class MainScreen extends Component {
  componentDidMount() {
    console.log('mount')
    this.props.navigation.dispatch({ type: 'CLEAR_FILTER_DATA' })
    this.props.navigation.dispatch({ type: 'GET_ALL_DATA' , value: itemList })
  }
  renderCard = (el, dispatch, i, data) => (
    <View style={styles.item} key={i}>
      <View style={styles.itemRow}>
      <TouchableOpacity
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
            }
          }))
        }}>
        <Image source={{uri: el.pic}} style={styles.picture}/>
      </TouchableOpacity>
        <Text style={styles.itemText}> {el.type}</Text>
        <Text style={styles.itemText}> {el.status}</Text>
      </View>
      <Text style={[styles.itemText]}> {el.text}</Text>
      <View style={styles.itemRowBtn}>
        <Text style={styles.itemName}> {el.name}</Text>
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
      <View style= {styles.container}>
        <FlatList
          //contentContainerStyle={styles.container}
          data={data.filterData || data.fullData}
          keyExtractor={this.keyExtractor}
          renderItem={({item, i}) => this.renderItemOfList(item, dispatch, i, data)}
        />
      </View>
    )
  }
}

MainScreen.navigationOptions = ({ navigation, screenProps }) => ({
  headerRight: <Header
  dispatch={navigation.dispatch}
  navigate={navigation.navigate}
  back={navigation.goBack}
  data={screenProps.data.fullData} />,
})


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	item: {
		flex: 10,
		padding: 10,
		borderBottomColor: '#A4DFF9',
		borderWidth: 1,
		width: 350,
		// height: 150,
  },
  itemColumn:{
    flex: 1,
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
	picture: {
		width: 50,
    height: 50,
    borderColor: '#A4DFF9',
		borderWidth: 2,
	}

});
