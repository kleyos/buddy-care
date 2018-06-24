import { createAction } from 'redux-actions';

import types from './types';

export const login = createAction(types.LOGIN.REQUEST);
export const loginSuccess = createAction(types.LOGIN.SUCCESS);
export const loginFailure = createAction(types.LOGIN.FAILURE);

export const logout = createAction(types.LOGOUT.REQUEST);
export const logoutSuccess = createAction(types.LOGOUT.SUCCESS);
export const logoutFailure = createAction(types.LOGOUT.FAILURE);
