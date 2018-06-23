import { connect } from 'react-redux';
import MyProfile from '../screens/myProfile';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(MyProfile);
