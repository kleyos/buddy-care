import { connect } from 'react-redux';
import UserProfile from '../screens/userProfile';
import { getCards, getUserProfile, isLoading } from '../modules/main/selectors';
import { getUserToken } from '../modules/auth/selectors';
import { applyCard, fetchAllCards } from '../modules/main/actions';

const mapStateToProps = state => ({
  cards: getCards(state),
  profileUser: getUserProfile(state),
  userToken: getUserToken(state),
  loading: isLoading(state),
});

const mapDispatchToProps = {
  applyCard,
  fetchAllCards
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
