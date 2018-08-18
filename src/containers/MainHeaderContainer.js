import { connect } from 'react-redux';
import MainHeader from '../components/mainHeader';
import {
  getUserAvatar,
  isUserLoggedIn
} from '../modules/auth/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { filterUsers } from '../modules/main/actions';
import { getAllUsers } from '../modules/main/selectors';

const mapStateToProps = state => ({
  loggedIn: isUserLoggedIn(state),
  userAvatar: getUserAvatar(state),
  users: getAllUsers(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  filterUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
