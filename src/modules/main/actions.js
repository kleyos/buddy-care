import { createAction } from 'redux-actions';

export const fetchAllUsers = createAction('FETCH_ALL_USERS');
export const fetchAllUsersSuccess = createAction('FETCH_ALL_USERS_SUCCESS');
export const fetchAllUsersFailure = createAction('FETCH_ALL_USERS_FAILURE');

export const fetchUserProfile = createAction('FETCH_USER_PROFILE');
export const fetchUserProfileSuccess = createAction('FETCH_USER_PROFILE_SUCCESS');
export const fetchUserProfileFailure = createAction('FETCH_USER_PROFILE_FAILURE');

export const filterUsers = createAction('FILTER_USERS');
