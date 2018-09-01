import { put, call, select, takeEvery } from 'redux-saga/effects';
import { Alert } from  'react-native';
import { getUserToken } from '../modules/auth/selectors';
import {
  fetchAllCards,
  fetchAllCardsFailure,
  fetchAllCardsSuccess,
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  filterWishes,
  filterOffers,
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

export function* fetchCardsWorker() {
  try {
    const userToken = yield select(getUserToken);
    const response = yield call(getUsers);
    if (response) {
      const unApplyedCards = response.cards.filter(item => !item.apllicant);
      yield put(fetchAllCardsSuccess(unApplyedCards));
      yield put(filterWishes(unApplyedCards.filter(item => item.type === 'Wish')));
      yield put(filterOffers(unApplyedCards.filter(item => item.type === 'Offer')));
      yield put(gettingDeviceToken(userToken));
    }
  } catch (er) {
    console.log(er);
    yield put(fetchAllCardsFailure(null));
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
    yield call(fetchCardsWorker);
  } catch (er) {
    console.log(er);
  }
}
export function* applyWorker({ payload }) {
  const { types, token, id } = payload;
  try {
    yield call(apply, types, id, token);
    yield call(fetchCardsWorker);
    Alert.alert('Thank you for applying');
  } catch (er) {
    console.log(er);
  }
}
export function* editWorker({ payload }) {
  const { text, types, id, token } = payload;
  try {
    yield call(edit, text, types, id, token);
    yield call(fetchCardsWorker);
  } catch (er) {
    console.log(er);
  }
}
export function* cancelWorker({ payload }) {
  const { types, id, token } = payload;
  try {
    yield call(remove, types, id, token);
    yield call(fetchCardsWorker);
    Alert.alert('Canceled');
  } catch (er) {
    console.log(er);
  }
}
export default function* mainWatcher() {
  yield [
    takeEvery(fetchAllCards, fetchCardsWorker),
    takeEvery(fetchUserProfile, fetchUserProfileWorker),
    takeEvery(saveCard, saveWorker),
    takeEvery(applyCard, applyWorker),
    takeEvery(editCard, editWorker),
    takeEvery(cancelCard, cancelWorker)
  ];
}
