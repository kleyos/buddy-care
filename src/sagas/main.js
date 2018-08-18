import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAllUsers,
  fetchAllUsersFailure,
  fetchAllUsersSuccess,
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  filterUsers
} from '../modules/main/actions';
import { getUsers, getUserProfile } from '../api';

export function* fetchUsersWorker() {
  try {
    const response = yield call(getUsers);
    if (response) {
      yield put(fetchAllUsersSuccess(response.cards));
      yield put(filterUsers(response.cards));
    }
  } catch (er) {
    console.log(er);
    yield put(fetchAllUsersFailure(null));
  }
}

export function* fetchUserProfileWorker({ payload }) {
  try {
    const response = yield call(getUserProfile, payload);
    if (response) {
      yield put(fetchUserProfileSuccess(response.user));
    }
  } catch (er) {
    console.log(er);
    yield put(fetchUserProfileFailure(null));
  }
}
export default function* mainWatcher() {
  yield [
    takeEvery(fetchAllUsers, fetchUsersWorker),
    takeEvery(fetchUserProfile, fetchUserProfileWorker)
  ];
}
