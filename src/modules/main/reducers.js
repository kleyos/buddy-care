import { handleActions } from 'redux-actions';
import {
  fetchAllUsers,
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  filterUsers
} from './actions';

const defaultState = {
  loading: false,
  users: null,
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
    [filterUsers]: (state, { payload }) => ({
      ...state,
      filteredUsers: payload
    })
  },
  defaultState
);
