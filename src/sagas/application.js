import { takeEvery, put, select } from 'redux-saga/effects';

import { initStart, initFinish } from '../modules/application/actions';
import { isUserLoggedIn } from '../modules/auth/selectors';
import { navTypes } from '../config/configureNavigation';
import { navigate } from '../modules/navigation/actions';

export function* startupWorker() {
  try {
    // TODO: Rework the logic when signup/signin pages are done
    const userLoggedIn = yield select(isUserLoggedIn);

    if (userLoggedIn) {
      yield put(navigate(navTypes.MAIN));
    } else {
      yield put(navigate(navTypes.LOGIN));
    }
  } catch (error) {
    console.log('startupWorker err', error);
  } finally {
    yield put(initFinish());
  }
}

function* applicationWatcher() {
  yield takeEvery(initStart, startupWorker);
}

export default applicationWatcher;