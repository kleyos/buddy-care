import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { getFilteredCards, isLoading } from '../modules/main/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { fetchUserProfile, getNotifications, applyCard } from '../modules/main/actions';

const mapStateToProps = state => ({
  cards: getFilteredCards(state),
  loading: isLoading(state),
});

const mapDispatchToProps = {
  navigate,
  navigateBack,
  fetchUserProfile,
  getNotifications,
  applyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
