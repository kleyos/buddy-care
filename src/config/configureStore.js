import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { initStart } from '../modules/application/actions';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
);

export const addListener = createReduxBoundAddListener('root');

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  middleware.push(navigationMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      autoRehydrate(),
      applyMiddleware(...middleware)
    )
  );

  persistStore(
    store,
    {
      storage: AsyncStorage,
      whitelist: ['auth']
    },
    () => store.dispatch(initStart())
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
