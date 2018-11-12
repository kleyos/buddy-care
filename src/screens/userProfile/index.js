import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import HeaderProfile from '../../containers/HeaderProfileContainer';
import styles from './styles';
import { defineSource } from '../../config/utils';

export default class userProfile extends Component {
  keyExtractor = (item, i) => i;
  
  handleApplyPress = (id, type) => {
    const { applyCard, userToken } = this.props;
    const types = type === 'Wish' ? 'wishes' : 'offers';
    applyCard({ types, id, token: userToken });
  }
  renderCard = (el, i) => {
    return (<View style={[styles.item, styles.itemShadow]} key={i}>
      <Image
        style={styles.line}
        source={defineSource(el.type).line}
        resizeMode="stretch"
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemText}> {el.text}</Text>
        <View style={styles.itemRowBtn}>
          <Image
            style={styles.itemType}
            source={defineSource(el.type).img}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.itemBtn}
            onPress={() => this.handleApplyPress(el.id, el.type)}
          >
            <Image
              style={styles.btn}
              source={defineSource(el.type).btn}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>);
  }

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
