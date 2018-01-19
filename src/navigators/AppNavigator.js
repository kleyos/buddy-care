import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import AddWish from '../components/AddWish';

export const AppNavigator = StackNavigator({
	Login: { screen: LoginScreen},
	AddWish: { screen: AddWish },
	Main: { screen: MainScreen },
	Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav, auth, data }) => (
	<AppNavigator
		navigation={addNavigationHelpers({ dispatch, state: nav })}
		screenProps={{ auth, data }} />
);

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	nav: state.nav,
	auth: state.auth,
	data: state.data,
});

export default connect(mapStateToProps)(AppWithNavigationState);
