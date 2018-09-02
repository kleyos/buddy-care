import { connect } from 'react-redux';
import LoginScreen from '../screens/loginScreen';
import { login, logout } from '../modules/auth/actions';
import { fetchAllCards } from '../modules/main/actions';
import { navigate } from '../modules/navigation/actions';
import { isUserLoggedIn } from '../modules/auth/selectors';

const mapStateToProps = state => ({
  loggedIn: isUserLoggedIn(state),
});
const mapDispatchToProps = {
  login,
  logout,
  navigate,
  fetchAllCards
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
