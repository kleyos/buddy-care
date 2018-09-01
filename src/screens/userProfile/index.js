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
import HeaderProfile from '../../containers/HeaderProfileContainer';
import styles from './styles';

export default class userProfile extends Component {
  
  handleApplyPress = (id, type, userToken) => {
    const { applyCard } = this.props;
    const types = type === 'Wish' ? 'wishes' : 'offers';
    applyCard({ types, token: userToken, id });
  }
  
  keyExtractor = (item, i) => i;
  
  renderCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <Image
        style={styles.line}
        source={el.type === 'Wish' ? require('../../assets/topLineAp.png') : require('../../assets/topLineH.png')}
        resizeMode="stretch"
      />
      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Avatar
            medium
            rounded
            source={{ uri: el.owner.profile.avatar_url }}
            onPress={() => console.log('profile')}
            activeOpacity={0.7}
          />
          <Text style={styles.itemName}>{el.name}</Text>
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
            onPress={() => this.handleApplyPress(el.id, el.type, el.owner.token)}
          >
            <Image
              style={styles.btn}
              source={el.type === 'Wish' ? require('../../assets/helpBtn.png') : require('../../assets/applyBtn.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  render() {
    const {
      cards,
      navigation: { state: { params: { ownerId } } },
      profileUser
    } = this.props;
    const profile = profileUser && profileUser.profile;
    
    return (
      <View style={{ flex: 1 }}>
        { profile &&
          <ImageBackground
            style={styles.profilePicture}
            source={{ uri: profile.avatar_url }}
          >
            <Text style={styles.profileName}>
              {profile.first_name.toLocaleUpperCase()}
              {' '}
              {profile.last_name.toLocaleUpperCase()}
            </Text>
          </ImageBackground>
        }
        <FlatList
          style={styles.container}
          data={cards.filter(item => item.owner.id === ownerId)}
          keyExtractor={this.keyExtractor}
          renderItem={({ item, i }) => this.renderCard(item, i)}
        />
      </View>
    );
  }
}

userProfile.navigationOptions = () => ({
  header: <HeaderProfile />
});
