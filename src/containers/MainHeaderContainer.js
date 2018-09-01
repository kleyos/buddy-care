import { connect } from 'react-redux';
import MainHeader from '../components/mainHeader';
import {
  getUserAvatar,
  isUserLoggedIn
} from '../modules/auth/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';


const mapStateToProps = state => ({
  loggedIn: isUserLoggedIn(state),
  userAvatar: getUserAvatar(state),
});

const mapDispatchToProps = {
  navigateBack,
  navigate
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
