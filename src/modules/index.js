import { combineReducers } from 'redux';

import auth from './auth';
import main from './main';
import navigation from './navigation';

export default combineReducers({
  auth,
  navigation,
  main
});
