import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(MainScreen);
