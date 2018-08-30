import { put, call, takeEvery } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { openNotification } from '../config/utils';
import { getNotification } from '../modules/main/actions';
import { gettingDeviceToken, getDeviceToken } from '../modules/auth/actions';

function* getDeviceTokenWorker() {
  try {
    const enabled = yield call(firebase.messaging().hasPermission());
    if (enabled) {
      const token = yield call(firebase.messaging().getToken());
      yield put(getDeviceToken(token));
    } else {
      firebase.messaging().requestPermission()
        .then(() => console.log('user has authorezed'))
        .catch(error => console.log(error));// user doesn't have permission
    }
  } catch (err) {
    console.log(err);
  }
}

function getNotificationWorker() {
  try {
    firebase.notifications().onNotification(notification => {
      openNotification(notification);
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* notificationWatcher() {
  yield [
    takeEvery(gettingDeviceToken, getDeviceTokenWorker),
    takeEvery(getNotification, getNotificationWorker)
  ];
}
