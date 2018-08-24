import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { getFilteredUsers, isLoading } from '../modules/main/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { fetchUserProfile } from '../modules/main/actions';

const mapStateToProps = state => ({
  users: getFilteredUsers(state),
  loading: isLoading(state)
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
