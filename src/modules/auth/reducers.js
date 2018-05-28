import { handleActions } from 'redux-actions';
import {
  login,
  loginSuccess,
  loginFailure,
  loginTest
} from './actions';

const defaultState = {
  loading: false,
  loggedIn: false,
  user: null,
  test: null,
};

export default handleActions(
  {
    [login]: state => {
      console.log('action login is working');
      
      return {...state,
      loading: true }
    },
    [loginSuccess]: (state, { payload }) => {
      console.log(payload, 'action login succses');
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: payload,
      };
    },
    [loginFailure]: state => ({
      ...state,
      loading: false,
    }),
    [loginTest]: state => ({
      ...state,
      test: 'holly shit',
    }),
  },
  defaultState
);
