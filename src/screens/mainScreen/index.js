import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MaterialInitials from 'react-native-material-initials/native';

import { navTypes } from '../../config/configureNavigation';
import MainHeader from '../../containers/MainHeaderContainer';
import { randomColor, defineSource } from '../../config/utils';
import styles from './styles';

export default class MainScreen extends Component {
  componentDidMount() {
    this.notificationListener = this.props.getNotifications();
  }
  
  componentWillUnmount() {
    this.notificationListener();
  }
  
  handleApplyPress = (id, type, userToken) => {
    const { applyCard } = this.props;
    const types = type === 'Wish' ? 'wishes' : 'offers';
    applyCard({ types, token: userToken, id });
  }
  
  handleAvatarPress = id => {
    const { navigate, fetchUserProfile } = this.props;
    navigate(navTypes.USER_PROFILE, { ownerId: id });
    fetchUserProfile(id);
  }
  
  keyExtractor = (item, i) => i;
  
  initialsAvatar = (firstName, lastName, onHandlePress) => (
    <TouchableOpacity
      style={styles.itemBtn}
      onPress={onHandlePress}
    >
      <MaterialInitials
        style={{ alignSelf: 'center' }}
        backgroundColor={`#${randomColor()}`}
        color="white"
        size={50}
        text={`${firstName} ${lastName}`}
        single={false}
      />
    </TouchableOpacity>)

  renderCard = (el, i) => {
    return (
      <View style={[styles.item, styles.itemShadow]} key={i}>
        <Image
          style={styles.line}
          source={defineSource(el.type).line}
          resizeMode="stretch"
        />
        <View style={styles.itemContent}>
          <View style={styles.itemRow}>
            {el.owner.profile.avatar_url
              ? <Avatar
                medium
                rounded
                source={{ uri: el.owner.profile.avatar_url }}
                onPress={() => this.handleAvatarPress(el.owner.id)}
                activeOpacity={0.7}
              />
              : this.initialsAvatar(
                  el.owner.profile.first_name,
                  el.owner.profile.first_name,
                  () => this.handleAvatarPress(el.owner.id)
              )
            }
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
              source={defineSource(el.type).img}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => this.handleApplyPress(el.id, el.type, el.owner.token)}
            >
              <Image
                style={styles.btn}
                source={defineSource(el.type).btn}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { cards, loading } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          key="cardList"
          style={styles.container}
          data={cards}
          keyExtractor={this.keyExtractor}
          renderItem={({ item, i }) => this.renderCard(item, i)}
        />
        {loading &&
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
      </View>
    );
  }
}

MainScreen.navigationOptions = () => ({
  header: <MainHeader />
});
