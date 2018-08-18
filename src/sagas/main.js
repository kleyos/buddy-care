import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAllUsers,
  fetchAllUsersFailure,
  fetchAllUsersSuccess
} from '../modules/main/actions';
import { getUsers } from '../api';

export function* fetchUsersWorker() {
  try {
    const response = yield call(getUsers);
    if (response) {
      yield put(fetchAllUsersSuccess(response.cards));
    }
  } catch (er) {
    console.log(er);
    yield put(fetchAllUsersFailure(er));
  }
}

export default function* mainWatcher() {
  yield [takeEvery(fetchAllUsers, fetchUsersWorker)];
}
