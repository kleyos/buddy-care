import { createAction } from 'redux-actions';

export const initStart = createAction('INIT_START');

export const initFinish = createAction('INIT_FINISH');

export const cleanStore = createAction('STORE_CLEAN');
