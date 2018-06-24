import { connect } from 'react-redux';
import MyProfile from '../screens/myProfile';
import {
  getUserName,
  getUserId,
  getUserAvatar,
  isUserLoggedIn
} from '../modules/auth/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';

const mapStateToProps = state => ({
  loggedIn: isUserLoggedIn(state),
  userName: getUserName(state),
  userId: getUserId(state),
  userAvatar: getUserAvatar(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate
};


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
