import React, { Component } from 'react';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Badge, Icon } from 'react-native-elements'

import Header from './Header'
import { genarateListOfObject } from './utils'

export default class ProfileScreen extends Component {

  renderOwnerCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <View style={styles.itemLabel}>
        <Badge containerStyle={{ backgroundColor: el.type === 'wish' ? 'yellow' : 'lightblue'}}>
          <Text>{el.type}</Text>
        </Badge>
        <Badge containerStyle={{ backgroundColor: el.status === 'waiting' ? '#e67575' : '#EBEAEA'}}>
          <Text>{el.status}</Text>
        </Badge>
      </View>
      <Text style={styles.itemText}> {el.text}</Text>

      <View style={styles.itemBtnRow}>
        <Button
          onPress={() =>{console.log('CLOSE')} }
          title={"CLOSE"}
          color="#b22222" />
          <Button
          onPress={() =>{console.log('EDIT')} }
          title={"EDIT"}
          color="#ffa500" />
    </View>
  </View>
  )
  renderCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <View style={styles.itemLabel}>
        <Badge containerStyle={{ backgroundColor: el.type === 'wish' ? 'yellow' : 'lightblue'}}>
          <Text>{el.type}</Text>
        </Badge>
        <Badge containerStyle={{ backgroundColor: el.status === 'waiting' ? '#e67575' : '#EBEAEA'}}>
          <Text>{el.status}</Text>
        </Badge>
      </View>
      <Text style={styles.itemText}> {el.text}</Text>
      <View style={styles.itemBtnRow}>
        <Button
          onPress={() =>{console.log('CLOSE')} }
          title={el.type === 'wish' ? "I CAN DO THIS" : "I WANT THIS"}
          color="#b22222"
          disabled={el.status !== 'waiting'} />
      </View>
    </View>)

  renderListOfCard = (item) =>
    {
    const { params } = this.props.navigation.state;
    const { auth } = this.props.screenProps;

    if (auth.id === params.id) {
      return item.map((el,i) => this.renderOwnerCard(el, i));
    } else {
      return item.map((el,i) => this.renderCard(el, i));
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const { data } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={60}
          headerMaxHeight={200}
          extraScrollHeight={20}
          title={params.name}
          backgroundImage={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} //params.pic
          backgroundImageScale={1.2}
          renderContent={() => this.renderListOfCard(data.filterData || data.profileData)}
        />
      </View>
    );
  }
}
ProfileScreen.navigationOptions = ({ navigation, screenProps }) => ({
   headerRight: <Header
    dispatch={navigation.dispatch}
    navigate={navigation.navigate}
    back={navigation.goBack} />,
    headerLeft: <Icon
      name='chevron-left'
      type='octicon'
      color='#037aff'
      iconStyle={{ marginLeft: 10 }}
      onPress={ () => {
        navigation.dispatch({ type: 'CLEAR_FILTER_DATA' })
        navigation.dispatch(NavigationActions.navigate({routeName: 'Main'}))} }
  />
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
  itemLabel: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
  itemBtnRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  itemText: {
    fontSize: 14,
    color: 'black',
    marginVertical: 10,
  },
});
