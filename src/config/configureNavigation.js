import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreenContainer';
import WishScreen from '../containers/WishScreenContainer';

// all navtypes go here
export const navTypes = {
  LOGIN: 'login',
  WISH: 'wish'
};

// Screens for MAIN SCREEN STACK NAVIGATOR
const Screens = {
  [navTypes.LOGIN]: { screen: LoginScreen },
  [navTypes.WISH]: { screen: WishScreen }
};

const RootNavigator = StackNavigator(Screens, {
  initialRouteName: navTypes.WISH,
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
