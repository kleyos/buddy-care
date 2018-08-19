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
  users: null,
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
      users: payload
    }),
    [fetchAllUsersFailure]: (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload
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
