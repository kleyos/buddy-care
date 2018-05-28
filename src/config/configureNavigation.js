import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreenContainer';

// all navtypes go here
export const navTypes = {
  LOGIN: 'login',
};

// Screens for MAIN SCREEN STACK NAVIGATOR
const Screens = {
  [navTypes.LOGIN]: { screen: LoginScreen },
};

const RootNavigator = StackNavigator(Screens, {
  initialRouteName: navTypes.LOGIN,
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
