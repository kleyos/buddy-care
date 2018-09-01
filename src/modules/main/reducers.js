import { handleActions } from 'redux-actions';
import {
  fetchAllCards,
  fetchAllCardsSuccess,
  fetchAllCardsFailure,
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  filterCards
} from './actions';

const defaultState = {
  loading: false,
  cards: [],
  profileUser: null,
  filteredCards: null
};

export default handleActions(
  {
    [fetchAllCards]: state => ({
      ...state,
      loading: true
    }),
    [fetchAllCardsSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      cards: payload
    }),
    [fetchAllCardsFailure]: (state, { payload }) => ({
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
    [filterCards]: (state, { payload }) => ({
      ...state,
      filteredCards: payload
    })
  },
  defaultState
);
