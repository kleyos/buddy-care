import { createAction } from 'redux-actions';

import types from './types';

export const login = createAction(types.LOGIN.REQUEST);

export const loginSuccess = createAction(types.LOGIN.SUCCESS);
export const loginTest = createAction(types.LOGIN.TEST);

export const loginFailure = createAction(types.LOGIN.FAILURE);