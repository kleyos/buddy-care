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
import { navTypes } from '../../config/configureNavigation';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBtns: false
    };
  }
  keyExtractor = (item, i) => i;
  
  handleEditPress = (type, text, id) => {
    const upperCaseType = type.toLocaleUpperCase();
    this.props.navigate(navTypes[upperCaseType], { text, flag: 'edit', id });
  }
  
  renderCard = (el, i) => (
    <View style={[styles.item, styles.itemShadow]} key={i}>
      <Image
        style={styles.line}
        source={el.type === 'Wish' ? require('../../assets/topLineAp.png') : require('../../assets/topLineH.png')}
        resizeMode="stretch"
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemText}> {el.text}</Text>
        <View style={styles.itemRowBtn}>
          <Image
            style={el.type === 'Wish' ? styles.itemWish : styles.itemOffer}
            source={el.type === 'Wish' ? require('../../assets/wish.png') : require('../../assets/offer.png')}
            resizeMode="cover"
          />
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => this.handleEditPress("wish", "bla")}
            >
              <Image
                style={styles.btn}
                source={require('../../assets/closeBtn.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => this.handleEditPress(el.type, el.text, el.id)}
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
  render() {
    const { userName, userAvatar, cards } = this.props;
    
    return [
      <ImageBackground
        key="picture"
        style={styles.profilePicture}
        source={{ uri: userAvatar }}
      >
        <Text style={styles.profileName}>{ userName.toLocaleUpperCase() }</Text>
      </ImageBackground>,
      <View style={styles.divider} key="divider" />,
      <FlatList
        key="list"
        style={styles.container}
        data={cards}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, i }) => this.renderCard(item, i)}
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
