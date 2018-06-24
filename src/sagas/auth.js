import { put, takeEvery } from 'redux-saga/effects';

import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutFailure,
  logoutSuccess
} from '../modules/auth/actions';
import navTypes from '../config/configureNavigation';


export function* loginWorker({ payload }) {
  try {
    if (payload.error) {
      yield put(loginFailure(payload.error));
    } else if (payload.isCancelled) {
      console.log('login is cancelled.');
      yield put(loginFailure(payload.isCancelled));
    } else {
      yield put(loginSuccess(payload));
    }
  } catch (er) {
    console.log(er);
    yield put(loginFailure(er));
  }
}

function* logoutWorker() {
  try {
    // yield put(logoutSuccess(data));
    // yield put(navigate(navTypes.LOGIN));
    // // yield put(cleanStore());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function* authWatcher() {
  yield [takeEvery(login, loginWorker), takeEvery(logout, logoutWorker)];
}
