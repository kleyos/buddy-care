import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreenContainer';
import WishScreen from '../containers/WishScreenContainer';
import OfferScreen from '../containers/OfferScreenContainer';
import MainScreen from '../containers/MainScreenContainer';
import UserProfile from '../containers/UserProfileContainer';


// all navtypes go here
export const navTypes = {
  LOGIN: 'login',
  WISH: 'wish',
  OFFER: 'offer',
  MAIN: 'main',
  USER_PROFILE: 'user_profile'
};

// Screens for MAIN SCREEN STACK NAVIGATOR
const Screens = {
  [navTypes.LOGIN]: { screen: LoginScreen },
  [navTypes.WISH]: { screen: WishScreen },
  [navTypes.OFFER]: { screen: OfferScreen },
  [navTypes.MAIN]: { screen: MainScreen },
  [navTypes.USER_PROFILE]: { screen: UserProfile },
};

const RootNavigator = StackNavigator(Screens, {
  initialRouteName: navTypes.USER_PROFILE,
  ...Platform.select({
    ios: {
      mode: 'card',
      headerMode: 'screen'
    },
    android: {
      mode: 'card',
      headerMode: 'screen'
    }
  }),
  navigationOptions: {
    gesturesEnabled: false
  }
});

export default RootNavigator;
