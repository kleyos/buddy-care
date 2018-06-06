import { connect } from 'react-redux';
import LoginScreen from '../screens/loginScreen';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(LoginScreen);
