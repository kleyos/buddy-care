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
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      listOfCards: props.cards
    };
  }

  componentDidMount() {
    this.notificationListener = this.props.getNotifications();
    this.props.fetchAllCards();
  }
  
  componentWillReceiveProps(nextProps) {
    switch (this.state.selectedIndex) {
      case 0: this.setState({ listOfCards: nextProps.cards });
        break;
      case 1: this.setState({ listOfCards: nextProps.wishes });
        break;
      case 2: this.setState({ listOfCards: nextProps.offers });
        break;
      default: break;
    }
  }
  
  handleApplyPress = (id, type) => {
    const { applyCard, userToken } = this.props;
    const types = type === 'Wish' ? 'wishes' : 'offers';
    applyCard({ types, id, token: userToken });
  }
  
  handleAvatarPress = id => {
    const { navigate, fetchUserProfile } = this.props;
    navigate(navTypes.USER_PROFILE, { ownerId: id });
    fetchUserProfile(id);
  }
  
  keyExtractor = (item, i) => i;
  
  updateIndex = selectedIndex => {
    const {
      cards,
      wishes,
      offers
    } = this.props;
    this.setState({ selectedIndex });
    switch (selectedIndex) {
      case 0: this.setState({ listOfCards: cards });
        break;
      case 1: this.setState({ listOfCards: wishes });
        break;
      case 2: this.setState({ listOfCards: offers });
        break;
      default: break;
    }
  }
  renderTab = (item, i) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => this.updateIndex(i)}
      key={i}
    >
      <View style={i === this.state.selectedIndex
        ? [styles.btnStyle, styles.selectedBtnStyle]
        : styles.btnStyle}
      >
        <Text style={i === this.state.selectedIndex ? [styles.btnText, { opacity: 1 }] : styles.btnText} >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  )
  
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
      </View>
    );
  }

  render() {
    const { loading, fetchAllCards } = this.props;
    const buttons = ['All', 'Wishes', 'Offers'];
    const { listOfCards } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.tabContainer}>
          <View style={styles.btnContainer}>
            {buttons.map((item, i) => this.renderTab(item, i))}
          </View>
        </View>
        <FlatList
          key="cardList"
          onRefresh={() => fetchAllCards()}
          refreshing={loading}
          style={styles.container}
          data={listOfCards}
          keyExtractor={this.keyExtractor}
          renderItem={({ item, i }) => this.renderCard(item, i)}
        />
        {/* {loading &&
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        } */}
      </View>
    );
  }
}

MainScreen.navigationOptions = () => ({
  header: <MainHeader />
});
