import { connect } from 'react-redux';
import UserProfile from '../screens/userProfile';
import { getAllCards, getUserProfile } from '../modules/main/selectors';
import { applyCard } from '../modules/main/actions';

const mapStateToProps = state => ({
  cards: getAllCards(state),
  profileUser: getUserProfile(state)
});

const mapDispatchToProps = {
  applyCard
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
