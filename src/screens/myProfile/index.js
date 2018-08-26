import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      isAddBtns: this.props.navigation.state.params.addBtn || false
    };
  }
  keyExtractor = (item, i) => i;
  
  handleEditPress = (type, text, id) => {
    const { navigate } = this.props;
    const upperCaseType = type.toLocaleUpperCase();
    
    navigate(navTypes[upperCaseType], { text, flag: 'edit', id });
  }
  handleClosePress = (type, id) => {
    const { cancelCard, userToken } = this.props;
    const types = type === 'Wish' ? 'wishes' : 'offers';
    
    cancelCard({ types, id, token: userToken });
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
              onPress={() => this.handleClosePress(el.type, el.id)}
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
MyProfile.propTypes = {
  navigate: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired,
  cancelCard: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

MyProfile.navigationOptions = () => ({
  header: <HeaderProfile />
});
