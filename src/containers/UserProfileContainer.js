import { connect } from 'react-redux';
import UserProfile from '../screens/userProfile';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(UserProfile);
