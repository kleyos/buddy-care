import { connect } from 'react-redux';
import LoginScreen from '../screens/loginScreen';
import { login, logout } from '../modules/auth/actions';
import { fetchAllUsers } from '../modules/main/actions';
import { navigate } from '../modules/navigation/actions';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});
const mapDispatchToProps = {
  login,
  logout,
  navigate,
  fetchAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
