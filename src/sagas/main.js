import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAllUsers,
  fetchAllUsersFailure,
  fetchAllUsersSuccess,
  filterUsers
} from '../modules/main/actions';
import { getUsers } from '../api';

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

export default function* mainWatcher() {
  yield [takeEvery(fetchAllUsers, fetchUsersWorker)];
}
