import { call, fork, put, take, takeEvery, select } from 'redux-saga/effects';
import FBSDK from 'react-native-fbsdk';

import {
  login,
  loginSuccess,
  loginFailure,
  loginTest
} from '../modules/auth/actions';


const { AccessToken, GraphRequestManager, GraphRequest } = FBSDK;

function responseInfoCallback(error, result, dispatch) {
  try {
    if (error) {
      console.log(`Error fetching data: ${error.toString()}`);
      dispatch(loginFailure(error));
    }
    dispatch(loginSuccess(result));
  } catch (er) {
    console.log(er)
    dispatch(loginFailure(er));
  }
}

export function loginWorker({ payload }) {
  const { result, error, dispatch } = payload;
  console.log(payload)
  
  try {
    dispatch({ type: 'LOGIN_TEST' });
    if (error) {
      console.log(`login has error: ${result.error}`);
    } else if (result.isCancelled) {
    	console.log('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        const infoRequest = new GraphRequest(
          '/me?fields=name,picture.width(500).height(500)',
          null,
          (er, res) => responseInfoCallback(er, res, dispatch)

        );
        new GraphRequestManager().addRequest(infoRequest).start();
      });
    }
  } catch (er) {
    console.log(er);
    dispatch(loginFailure(er));
  }
}

function* logoutWorker() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signOut);
    yield put(logoutSuccess(data));
    // TODO: roles
    yield put(navigate(navTypes.LOGIN));
    yield put(cleanStore());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function* loginWathcer() {
  yield [takeEvery(login, loginWorker)];
}
