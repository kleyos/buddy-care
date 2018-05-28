import { handleActions } from 'redux-actions';
import { initStart, initFinish, cleanStore } from './actions';

const defaultState = {
  isStarted: false
};

export default handleActions(
  {
    [initStart]: state => ({
      ...state,
      isStarted: false
    }),
    [initFinish]: state => ({
      ...state,
      isStarted: true
    }),
    [cleanStore]: () => ({
      ...defaultState
    })
  },
  defaultState
);
