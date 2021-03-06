import { put, takeEvery, call } from 'redux-saga/effects';

import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutFailure,
  logoutSuccess,
  gettingDeviceToken
} from '../modules/auth/actions';
import { cleanStore } from '../modules/application/actions';
import { navigate } from '../modules/navigation/actions';
import { navTypes } from '../config/configureNavigation';
import { createUser } from '../api';

export function* loginWorker({ payload }) {
  try {
    if (payload.error) {
      yield put(loginFailure(payload.error));
    } else if (payload.isCancelled) {
      yield put(loginFailure(payload.isCancelled));
    } else if (payload.token) {
      const result = yield call(createUser, payload.token);
      if (result.user) {
        yield put(loginSuccess(result.user));
        yield put(gettingDeviceToken());
        yield put(navigate(navTypes.WISH));
      }
    }
  } catch (er) {
    console.log(er);
    yield put(loginFailure(er));
  }
}

function* logoutWorker() {
  try {
    yield put(logoutSuccess());
    yield put(navigate(navTypes.LOGIN));
    yield put(cleanStore());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function* authWatcher() {
  yield [takeEvery(login, loginWorker), takeEvery(logout, logoutWorker)];
}
