import { fork } from 'redux-saga/effects';
import auth from './auth';
import main from './main';
import application from './application';

export default function* rootSaga() {
  yield [fork(application)];
  yield [fork(auth)];
  yield [fork(main)];
}
