import { handleActions } from 'redux-actions';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure
} from './actions';

const defaultState = {
  loading: false,
  loggedIn: false,
  user: null,
};

export default handleActions(
  {
    [login]: state => ({
      ...state,
      loading: true
    }),
    [loginSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      loggedIn: true,
      user: payload
    }),
    [loginFailure]: state => ({
      ...state,
      loading: false,
      loggedIn: false
    }),
    [logout]: state => ({
      ...state,
      loading: true
    }),
    [logoutSuccess]: state => ({
      ...state,
      loading: false,
      loggedIn: false,
      user: null,
    }),
    [logoutFailure]: state => ({
      ...state,
      loading: false
    })
  },
  defaultState
);
