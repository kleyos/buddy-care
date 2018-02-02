import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';

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

class AppWithNavigationState extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		const { dispatch, nav } = this.props;
		if (nav.index === 0) {
		return false;
		}
		dispatch(NavigationActions.back());
		return true;
	}

	render() {
		const { dispatch, nav, auth, data } = this.props;
		return  <AppNavigator
			navigation={addNavigationHelpers({ dispatch, state: nav })}
			screenProps={{ auth, data }} />
		}
}

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
