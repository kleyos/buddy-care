import { connect } from 'react-redux';
import WishScreen from '../screens/wishScreen';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(WishScreen);
