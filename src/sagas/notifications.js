import { takeEvery } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { openNotification } from '../config/utils';
import { getNotifications } from '../modules/main/actions';
import { gettingDeviceToken } from '../modules/auth/actions';
import { assignDevice } from '../api';

function getDeviceTokenWorker({ payload }) {
  try {
    firebase.messaging().hasPermission().then(enabled => {
      if (enabled) {
        firebase.messaging().getToken().then(deviceToken => {
          assignDevice(payload, deviceToken);
        });
      } else {
        firebase.messaging().requestPermission()
          .then(() => console.log('user has permissions'))
          .catch(error => console.log(error));
      }
    });
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
    takeEvery(getNotifications, getNotificationWorker)
  ];
}
