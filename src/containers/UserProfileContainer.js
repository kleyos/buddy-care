import { connect } from 'react-redux';
import UserProfile from '../screens/userProfile';
import { getCards, getUserProfile } from '../modules/main/selectors';
import { getUserToken } from '../modules/auth/selectors';
import { applyCard } from '../modules/main/actions';

const mapStateToProps = state => ({
  cards: getCards(state),
  profileUser: getUserProfile(state),
  userToken: getUserToken(state)
});

const mapDispatchToProps = {
  applyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
