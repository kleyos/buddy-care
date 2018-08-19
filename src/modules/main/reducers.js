import { handleActions } from 'redux-actions';
import {
  fetchAllUsers,
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  filterUsers
} from './actions';

const defaultState = {
  loading: false,
  cards: null,
  profileUser: null,
  filteredUsers: null
};

export default handleActions(
  {
    [fetchAllUsers]: state => ({
      ...state,
      loading: true
    }),
    [fetchAllUsersSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      cards: payload
    }),
    [fetchAllUsersFailure]: (state, { payload }) => ({
      ...state,
      loading: false,
      cards: payload
    }),
    [fetchUserProfile]: state => ({
      ...state,
      loading: true
    }),
    [fetchUserProfileSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      profileUser: payload
    }),
    [fetchUserProfileFailure]: (state, { payload }) => ({
      ...state,
      loading: false,
      profileUser: payload
    }),
    [filterUsers]: (state, { payload }) => ({
      ...state,
      filteredUsers: payload
    })
  },
  defaultState
);
