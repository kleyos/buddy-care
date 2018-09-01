import { connect } from 'react-redux';
import MainHeader from '../components/mainHeader';
import {
  getUserAvatar,
  isUserLoggedIn
} from '../modules/auth/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { filterCards } from '../modules/main/actions';
import { getAllCards } from '../modules/main/selectors';

const mapStateToProps = state => ({
  loggedIn: isUserLoggedIn(state),
  userAvatar: getUserAvatar(state),
  cards: getAllCards(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  filterCards
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
