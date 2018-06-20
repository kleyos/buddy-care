import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import _ from 'lodash';

import HeaderProfile from '../../containers/HeaderProfileContainer';
import itemList from '../../dummyData/data';
import { genarateListOfObject } from '../../config/utils';
import styles from './styles';

export default class userProfile extends Component {
  keyExtractor = (item, i) => i;
  renderCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <Image
        style={styles.line}
        source={el.type === 'wish' ? require('../../assets/topLineAp.png') : require('../../assets/topLineH.png')}
        resizeMode="contain"
      />
      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Avatar
            medium
            rounded
            source={{ uri: el.pic }}
            onPress={() => console.log('profile')}
            activeOpacity={0.7}
          />
          <Text style={styles.itemName}>{el.name}</Text>
        </View>
        <Text style={styles.itemText}> {el.text}</Text>
        <View style={styles.itemRowBtn}>
          <Image
            style={styles.itemType}
            source={el.type === 'wish' ? require('../../assets/wish.png') : require('../../assets/offer.png')}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.itemBtn}
            onPress={() => console.log('apply')}
          >
            <Image
              style={styles.btn}
              source={el.type === 'wish' ? require('../../assets/helpBtn.png') : require('../../assets/applyBtn.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  
  renderContent = () => {
    //
  }
  render() {
    const data = itemList.map(item => genarateListOfObject(item));
    return [
      <ImageBackground
        key="picture"
        style={styles.profilePicture}
        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}>
        <Text style={styles.profileName}>{ 'todo: username'.toLocaleUpperCase() }</Text>
      </ImageBackground>,
      <FlatList
        key="list"
        style={styles.container}
        data={_.flattenDeep(data)}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, i }) => this.renderCard(item, i)}
      />
    ];
  }
}

userProfile.navigationOptions = ({ navigation, screenProps }) => ({
  header: <HeaderProfile navigation={navigation} />
});
