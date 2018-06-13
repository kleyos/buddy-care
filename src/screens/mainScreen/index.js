import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { _ } from 'lodash';
import MainHeader from '../../containers/MainHeaderContainer';

import itemList from '../../dummyData/data';
import { genarateListOfObject } from '../../config/utils';
import styles from './styles';

export default class MainScreen extends Component {
  keyExtractor = (item, i) => i;

  renderCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
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
            resizeMode="stretch"
          />
          <TouchableOpacity
            style={styles.itemBtn}
            onPress={() => console.log('apply')}
          >
            <Image
              style={styles.itemBtn}
              source={el.type === 'wish' ? require('../../assets/helpBtn.png') : require('../../assets/applyBtn.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topLine}>
        <Image
          sytle={styles.line}
          source={el.type === 'wish' ? require('../../assets/topLineHelp.png') : require('../../assets/topLineApply.png')}
          // resizeMode="cover"
        />
      </View>
    </View>
  )

  render() {
    const data = itemList.map(item => genarateListOfObject(item));
    return (
      <FlatList
        style={styles.container}
        data={_.flattenDeep(data)}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, i }) => this.renderCard(item, i)}
      />
    );
  }
}

MainScreen.navigationOptions = ({ navigation, screenProps }) => ({
  header: <MainHeader />
});
