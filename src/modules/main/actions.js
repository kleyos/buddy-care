import { createAction } from 'redux-actions';

export const fetchAllCards = createAction('FETCH_ALL_CARDS');
export const fetchAllCardsSuccess = createAction('FETCH_ALL_CARDS_SUCCESS');
export const fetchAllCardsFailure = createAction('FETCH_ALL_CARDS_FAILURE');

export const fetchUserProfile = createAction('FETCH_USER_PROFILE');
export const fetchUserProfileSuccess = createAction('FETCH_USER_PROFILE_SUCCESS');
export const fetchUserProfileFailure = createAction('FETCH_USER_PROFILE_FAILURE');

export const filterCards = createAction('FILTER_CARDS');

export const saveCard = createAction('SAVE_CARD');

export const editCard = createAction('EDIT_CARD');

export const applyCard = createAction('APPLY_CARD');

export const cancelCard = createAction('CANCEL_CARD');

export const getNotifications = createAction('GET_NOTIFICATIONS');
