import React, { Component } from 'react';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Badge, Icon } from 'react-native-elements'

import FBSDK from 'react-native-fbsdk';
const { LoginButton } = FBSDK;


import Header from './Header'
import { genarateListOfObject } from './utils'

export default class ProfileScreen extends Component {
  constructor(props) {
		super(props);
		this.state = {
      isOwner: false
    };
	}

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const { auth: { result } } = this.props.screenProps;
    if (result && result.id === params.id) {
      this.setState({ isOwner: true })
    }
  }
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
    const { isOwner } = this.state;
    if (!item || item.length === 0) {
      return <View style={styles.itemWarn}>
        <Text style={styles.warn}>You don't have any wish or offer</Text>
      </View>
    }
    if (isOwner) {
      return item.map((el,i) => this.renderOwnerCard(el, i));
    } else {
      return item.map((el,i) => this.renderCard(el, i));
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const { data, auth } = this.props.screenProps;
    const { dispatch } = this.props.navigation;
    const { isOwner } = this.state;
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={60}
          headerMaxHeight={200}
          extraScrollHeight={20}
          title={params.name}
          backgroundImage={{uri: params.pic}}
          renderContent={() => this.renderListOfCard(data.filterData || data.profileData)}
        />
        { isOwner &&
          <View style={styles.loginBtnContainer}>
            <LoginButton onLogoutFinished={() => { dispatch({ type: 'LOGOUT' }); console.log('logout')}} />
          </View> }
      </View>
    );
  }
}
ProfileScreen.navigationOptions = ({ navigation, screenProps }) => ({
   headerRight: <Header
    dispatch={navigation.dispatch}
    navigate={navigation.navigate}
    back={navigation.goBack}
    data={screenProps.data.profileData} />,
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
  loginBtnContainer: {
    height: 50,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
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
  itemWarn: {
    flex: 1,
    alignItems: 'center',
  },
  warn: {
    fontSize: 18,
		textAlign: 'center',
		margin: 30,
		fontFamily: 'Cochin',
		color: "#008b8b",
  }
});
