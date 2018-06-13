import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreenContainer';
import WishScreen from '../containers/WishScreenContainer';
import OfferScreen from '../containers/OfferScreenContainer';
import MainScreen from '../containers/MainScreenContainer';


// all navtypes go here
export const navTypes = {
  LOGIN: 'login',
  WISH: 'wish',
  OFFER: 'offer',
  MAIN: 'main',
};

// Screens for MAIN SCREEN STACK NAVIGATOR
const Screens = {
  [navTypes.LOGIN]: { screen: LoginScreen },
  [navTypes.WISH]: { screen: WishScreen },
  [navTypes.OFFER]: { screen: OfferScreen },
  [navTypes.MAIN]: { screen: MainScreen }
};

const RootNavigator = StackNavigator(Screens, {
  initialRouteName: navTypes.MAIN,
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
