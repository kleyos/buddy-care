import firebase from 'react-native-firebase';
import { Platform } from 'react-native';

export const randomColor = () => '0123456789abcdef'.split('').map((v, i, a) => {
  return i > 5 ? null : a[Math.floor(Math.random() * 16)]; 
}).join('');


export const openNotification = notification => {
  const notificationNew = new firebase.notifications.Notification()
    .setNotificationId(notification._notificationId)
    .setTitle(notification._title)
    .setBody(notification._body);

  if (Platform.OS === 'android') {
    const channel = new firebase.notifications.Android.Channel('buddy-care-channel', 'BaddyCare Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('BaddyCare app channel');

    firebase.notifications().android.createChannel(channel);

    notificationNew
      .android.setChannelId(channel._channelId)
      .android.setSmallIcon('ic');
  }

  firebase.notifications().displayNotification(notificationNew);
};

export const defineSource = type => {
  const obj = {
    Wish: {
      line: require('../../assets/topLineAp.png'),
      img: require('../../assets/wish.png'),
      btn: require('../../assets/helpBtn.png')
    },
    Offer: {
      line: require('../../assets/topLineH.png'),
      img: require('../../assets/offer.png'),
      btn: require('../../assets/applyBtn.png')
    }
  };
  return obj[type];
};

export default async message => {
  console.log('bg messaging', message);
  return Promise.resolve();
};
