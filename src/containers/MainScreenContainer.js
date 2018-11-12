import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { isUserLoggedIn, getUserToken } from '../modules/auth/selectors';
import {
  getCards,
  isLoading,
  getOffers,
  getWishes
} from '../modules/main/selectors';
import {
  fetchUserProfile,
  getNotifications,
  applyCard
} from '../modules/main/actions';

const mapStateToProps = state => ({
  cards: getCards(state),
  loading: isLoading(state),
  isLogin: isUserLoggedIn(state),
  offers: getOffers(state),
  wishes: getWishes(state),
  userToken: getUserToken(state)
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile,
  getNotifications,
  applyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
