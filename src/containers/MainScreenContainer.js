import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { isUserLoggedIn, getUserToken, getUserId } from '../modules/auth/selectors';
import {
  getCards,
  isLoading,
  getOffers,
  getWishes
} from '../modules/main/selectors';
import {
  fetchAllCards,
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
  userToken: getUserToken(state),
  yourId: getUserId(state),
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile,
  getNotifications,
  applyCard,
  fetchAllCards
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
