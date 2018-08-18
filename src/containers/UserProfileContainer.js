import { connect } from 'react-redux';
import UserProfile from '../screens/userProfile';
import { getAllUsers, getUserProfile } from '../modules/main/selectors';

const mapStateToProps = state => ({
  users: getAllUsers(state),
  profileUser: getUserProfile(state)
});

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
