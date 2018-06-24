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
import { navTypes } from '../../config/configureNavigation';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isAddBtns: false
    };
  }
  keyExtractor = (item, i) => i;

  renderCreatedCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <Image
        style={styles.line}
        source={el.type === 'wish' ? require('../../assets/topLineAp.png') : require('../../assets/topLineH.png')}
        resizeMode="contain"
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemText}> {el.text}</Text>
        <View style={styles.itemRowBtn}>
          <Image
            style={el.type === 'wish' ? styles.itemWish : styles.itemOffer}
            source={el.type === 'wish' ? require('../../assets/wish.png') : require('../../assets/offer.png')}
            resizeMode="cover"
          />
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => console.log('apply')}
            >
              <Image
                style={styles.btn}
                source={require('../../assets/closeBtn.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => console.log('apply')}
            >
              <Image
                style={styles.btn}
                source={require('../../assets/editBtn.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )

  renderAppliedCard = (el, i) => (
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
            style={el.type === 'wish' ? styles.itemWish : styles.itemOffer}
            source={el.type === 'wish' ? require('../../assets/wish.png') : require('../../assets/offer.png')}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.itemBtn}
            onPress={() => console.log('apply')}
          >
            <Image
              style={styles.btn}
              source={require('../../assets/cancelBtn.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  renderTab = (item, i) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => this.setState({ selectedIndex: i })}
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
  renderAddBtns = () => {
    const { navigate } = this.props;
    return [
      <TouchableOpacity
        key="addWish"
        style={{ top: 20 }}
        onPress={() => navigate(navTypes.WISH)}
      >
        <Image
          style={styles.roundAddBtn}
          source={require('../../assets/addWishBtn.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>,
      <TouchableOpacity
        key="addOffer"
        onPress={() => navigate(navTypes.OFFER)}
      >
        <Image
          style={styles.roundAddBtn}
          source={require('../../assets/addOfferBtn.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ];
  };
  renderContent = (item, i) => {
    const { selectedIndex } = this.state;
    switch (selectedIndex) {
      case 0:
        return this.renderCreatedCard(item, i);
      case 1:
        return this.renderAppliedCard(item, i);
      default:
    }
  }
  render() {
    const { userName, userAvatar } = this.props;
    
    const data = itemList.map(item => genarateListOfObject(item));
    const buttons = ['Created', 'Applied'];

    return [
      <ImageBackground
        key="picture"
        style={styles.profilePicture}
        source={{ uri: userAvatar }}
      >
        <Text style={styles.profileName}>{ userName.toLocaleUpperCase() }</Text>
      </ImageBackground>,
      <View style={[styles.tabContainer]} key="tabs">
        <View style={styles.btnContainer}>
          {buttons.map((item, i) => this.renderTab(item, i))}
        </View>
      </View>,
      <View style={styles.divider} key="divider" />,
      <FlatList
        key="list"
        style={styles.container}
        data={_.flattenDeep(data)}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, i }) => this.renderContent(item, i)}
      />,
      <TouchableOpacity
        key="add"
        style={styles.addBtn}
        onPress={() => this.setState({ isAddBtns: !this.state.isAddBtns })}
      >
        <Image
          style={styles.roundBtn}
          source={require('../../assets/addBtn.png')}
        />
      </TouchableOpacity>,
      <View
        key="addBtns"
        style={styles.addBntContainer}
      >
        {this.state.isAddBtns && this.renderAddBtns()}
      </View>
    ];
  }
}

MyProfile.navigationOptions = () => ({
  header: <HeaderProfile />
});
