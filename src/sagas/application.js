import { takeEvery, put, select } from 'redux-saga/effects';
import { initStart, initFinish } from '../modules/application/actions';
import { isUserLoggedIn, isFirstWish } from '../modules/auth/selectors';
import { navTypes } from '../config/configureNavigation';
import { navigate, navigateWithReset } from '../modules/navigation/actions';
import { fetchAllUsers } from '../modules/main/actions';

export function* startupWorker() {
  try {
    const userLoggedIn = yield select(isUserLoggedIn);
    const firstWish = yield select(isFirstWish);
    yield put(fetchAllUsers());
    
    if (userLoggedIn && firstWish) {
      yield put(navigateWithReset(navTypes.MAIN));
    } else if (userLoggedIn && !firstWish) {
      yield put(navigate(navTypes.WISH));
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
