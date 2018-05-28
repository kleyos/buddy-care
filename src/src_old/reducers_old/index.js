import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';
import { genarateListOfObject } from '../components/utils';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('AddWish');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
	secondAction,
	tempNavState
);

function nav(state = initialNavState, action) {
	let nextState;
	switch (action.type) {
	case 'LOGIN':
		nextState = AppNavigator.router.getStateForAction(
			NavigationActions.back(),
			state
		);
		break;
	case 'LOGOUT':
		nextState = AppNavigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: 'Login' }),
			state
		);
		break;
	default:
		nextState = AppNavigator.router.getStateForAction(action, state);
		break;
	}

	return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
	switch (action.type) {
	case 'LOGIN':
		return {
			...state,
			isLoggedIn: true,
			result: action.value,
		};
	case 'LOGOUT':
		return { ...state, isLoggedIn: false };
	default:
		return state;
	}
}
function data(state = {}, action) {
	switch (action.type) {
	case 'GET_ALL_DATA':
		return { ...state, fullData: action.value.map(item => genarateListOfObject(item)).reduce((a,b) => a.concat(b))};
	case 'GET_FILTER_DATA':
		return { ...state, filterData: action.value };
	case 'GET_PROFILE_DATA':
		return { ...state, profileData: action.value };
	case 'CLEAR_FILTER_DATA':
		return { ...state, filterData: null };
	default:
		return state;
	}
}

const AppReducer = combineReducers({
	nav,
	auth,
	data,
});

export default AppReducer;
