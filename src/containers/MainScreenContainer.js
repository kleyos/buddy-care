import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
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
  offers: getOffers(state),
  wishes: getWishes(state)
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile,
  getNotifications,
  applyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
