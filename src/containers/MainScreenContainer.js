import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { getFilteredUsers, isLoading } from '../modules/main/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { fetchUserProfile, getNotifications } from '../modules/main/actions';
import { getUserToken } from '../modules/auth/selectors';

const mapStateToProps = state => ({
  users: getFilteredUsers(state),
  loading: isLoading(state),
  userToken: getUserToken(state)
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile,
  getNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
