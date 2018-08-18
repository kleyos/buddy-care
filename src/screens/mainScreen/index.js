import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MainHeader from '../../containers/MainHeaderContainer';
import styles from './styles';
import { navTypes } from '../../config/configureNavigation';

export default class MainScreen extends Component {
  keyExtractor = (item, i) => i;

  renderCard = (el, i) => {
    const { navigate, fetchUserProfile } = this.props;

    return (
      <View style={[styles.item, styles.itemShadow]} key={i}>
        <Image
          style={styles.line}
          source={el.type === 'Wish'
          ? require('../../assets/topLineAp.png')
          : require('../../assets/topLineH.png')
        }
          resizeMode="stretch"
        />
        <View style={styles.itemContent}>
          <View style={styles.itemRow}>
            <Avatar
              medium
              rounded
              source={{ uri: el.owner.profile.avatar_url }}
              onPress={
                () => {
                navigate(navTypes.USER_PROFILE, { ownerId: el.owner.id });
                fetchUserProfile(el.owner.id);
                }
              }
              activeOpacity={0.7}
            />
            <Text style={styles.itemName}>
              {el.owner.profile.first_name}
              {' '}
              {el.owner.profile.last_name}
            </Text>
          </View>
          <Text style={styles.itemText}> {el.text}</Text>
          <View style={styles.itemRowBtn}>
            <Image
              style={styles.itemType}
              source={el.type === 'Wish' ? require('../../assets/wish.png') : require('../../assets/offer.png')}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => console.log('apply')}
            >
              <Image
                style={styles.btn}
                source={el.type === 'Wish'
                  ? require('../../assets/helpBtn.png')
                  : require('../../assets/applyBtn.png')
                }
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { users } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={users}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, i }) => this.renderCard(item, i)}
      />
    );
  }
}

MainScreen.navigationOptions = () => ({
  header: <MainHeader />
});
