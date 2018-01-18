import React, { Component } from 'react';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import Header from './Header'
import { genarateListOfObject } from './utils'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    // title: `Profile ${navigation.state.params.item.name}`,
     headerRight: <Header
      navigate={navigation.navigate}
      back={navigation.goBack}
      item={navigation.state.params.item} />,
	})

  renderOwnerCard = (el, i) => (
    <View style={styles.item} key={i}>
      <View style={styles.itemTextRow}>
        <View style={[styles.itemLabel, { backgroundColor : el.type === 'wish' ? 'yellow' : 'lightblue'}]}>
          <Text style={[styles.labelText, ]}>
            {el.type}
          </Text>
        </View>
        <Text style={styles.itemText}> {el.text}</Text>
      </View>

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
    <View style={styles.item} key={i}>
      <View style={styles.itemTextRow}>
        <View style={[styles.itemLabel, { backgroundColor : el.type === 'wish' ? 'yellow' : 'lightblue'}]}>
          <Text style={[styles.labelText, ]}>
            {el.type}
          </Text>
        </View>
        <Text style={styles.itemText}> {el.text}</Text>
      </View>

      <View style={styles.itemBtnRow}>
        <Button
          onPress={() =>{console.log('CLOSE')} }
          title={"I CAN DO THIS"}
          color="#b22222" />
      </View>
    </View>)

  renderListOfCard = (item) =>
    { // console.log('profile', item, genarateListOfObject(item))
    if (this.props.owner === item._id) {
      return genarateListOfObject(item).map((el, i) => this.renderOwnerCard(el, i))
    } else {
      return genarateListOfObject(item).map((el, i) => this.renderCard(el, i))
    }
  }

  render() {
    console.log(this.props)
    const { params } = this.props.navigation.state;
    const viewImages = {
      background: require('../images/IMG.jpg'),
    };
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={60}
          headerMaxHeight={200}
          extraScrollHeight={20}
          title={params.item.name}
          backgroundImage={viewImages.background}
          backgroundImageScale={1.2}
          renderContent={() => this.renderListOfCard(params.item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  item: {
    flex: 1,
    width: deviceWidth,
    alignItems:'stretch',
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    padding:10,
  },
  itemTextRow: {
    justifyContent: 'center',
  },
  itemBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemLabel: {

    padding: 5,
    borderRadius: 10,
    width: 55,
    alignItems: 'center',
  },
  labelText: {
    color: 'black',
    fontWeight: "700",
  },
  itemText: {
    fontSize: 14,
    color: 'black',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
  },
  picture: {
    width: '100%',
    height: '30%',
    borderColor: '#A4DFF9',
    borderWidth: 2,
    },
});
