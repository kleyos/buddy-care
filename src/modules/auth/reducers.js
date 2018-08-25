import { handleActions } from 'redux-actions';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  setFirstWish
} from './actions';

const defaultState = {
  loading: false,
  loggedIn: false,
  user: null,
  firstWish: false
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
      user: { ...payload }
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
    }),
    [setFirstWish]: state => ({
      ...state,
      firstWish: true
    })
  },
  defaultState
);
