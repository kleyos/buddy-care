import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/containers/NavigatorContainer';
import configureStore from './src/config/configureStore';
import rootReducer from './src/modules';
import rootSaga from './src/sagas';

const store = configureStore(rootReducer, rootSaga);

const BuddyCare = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);


AppRegistry.registerComponent('BuddyCare', () => BuddyCare);

export default BuddyCare;
