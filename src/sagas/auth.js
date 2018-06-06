import { call, fork, put, take, takeEvery, select } from 'redux-saga/effects';
import FBSDK from 'react-native-fbsdk';

import {
  login,
  loginSuccess,
  loginFailure,
} from '../modules/auth/actions';


const {
  AccessToken,
  GraphRequestManager,
  GraphRequest
} = FBSDK;

function responseInfoCallback(error, result) {
  console.log(error, result)
  
  function* callback() {
    try {
      if (error) {
        console.log(`Error fetching data: ${error.toString()}`);
        yield put(loginFailure(error));
      } else {
        yield put(loginSuccess(result));
      }
    } catch (er) {
      console.log(er);
      yield put(loginFailure(er));
    }
  }
}

export function* loginWorker({ payload }) {
  const { error, result } = payload;
  try {
    if (error) {
      yield put(loginFailure(error));
    } else if (result.isCancelled) {
      console.log('login is cancelled.');
      yield put(loginFailure(result.isCancelled));
    } else {
      const infoRequest = new GraphRequest(
        '/me?fields=name,picture.width(500).height(500)',
        null,
        (er, res) => responseInfoCallback(er, res)
      );
      new GraphRequestManager().addRequest(infoRequest).start();
    }
  } catch (er) {
    console.log(er);
    yield put(loginFailure(er));
  }
}

function* logoutWorker() {
  try {
    yield put(logoutSuccess(data));
    yield put(navigate(navTypes.LOGIN));
    yield put(cleanStore());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function* loginWathcer() {
  yield [takeEvery(login, loginWorker)];
}
