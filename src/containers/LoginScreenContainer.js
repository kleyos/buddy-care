import { connect } from 'react-redux';
import LoginScreen from '../screens/loginScreen';
import { login, logout } from '../modules/auth/actions';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});
const mapDispatchToProps = {
  login,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
