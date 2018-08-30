import { put, call, select, takeEvery } from 'redux-saga/effects';
import { getUserToken } from '../modules/auth/selectors';
import {
  fetchAllUsers,
  fetchAllUsersFailure,
  fetchAllUsersSuccess,
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  filterUsers,
  saveCard,
  editCard,
  cancelCard,
  applyCard
} from '../modules/main/actions';
import {
  getUsers,
  getUserProfile,
  apply,
  create,
  edit,
  remove
} from '../api';
import { gettingDeviceToken } from '../modules/auth/actions';

export function* fetchUsersWorker() {
  try {
    const userToken = yield select(getUserToken);
    const response = yield call(getUsers);
    if (response) {
      yield put(fetchAllUsersSuccess(response.cards));
      yield put(filterUsers(response.cards));
      yield put(gettingDeviceToken(userToken));
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
export function* saveWorker({ payload }) {
  const { text, types, token } = payload;
  try {
    yield call(create, text, types, token);
    yield call(fetchUsersWorker);
  } catch (er) {
    console.log(er);
  }
}
export function* applyWorker({ payload }) {
  const { types, token, id } = payload;
  try {
    yield call(apply, types, id, token);
    yield call(fetchUsersWorker);
  } catch (er) {
    console.log(er);
  }
}
export function* editWorker({ payload }) {
  const { text, types, id, token } = payload;
  try {
    yield call(edit, text, types, id, token);
    yield call(fetchUsersWorker);
  } catch (er) {
    console.log(er);
  }
}
export function* cancelWorker({ payload }) {
  const { types, id, token } = payload;
  try {
    yield call(remove, types, id, token);
    yield call(fetchUsersWorker);
  } catch (er) {
    console.log(er);
  }
}
export default function* mainWatcher() {
  yield [
    takeEvery(fetchAllUsers, fetchUsersWorker),
    takeEvery(fetchUserProfile, fetchUserProfileWorker),
    takeEvery(saveCard, saveWorker),
    takeEvery(applyCard, applyWorker),
    takeEvery(editCard, editWorker),
    takeEvery(cancelCard, cancelWorker)
  ];
}
