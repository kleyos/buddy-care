import { connect } from 'react-redux';
import MyProfile from '../screens/myProfile';
import {
  getUserName,
  getUserId,
  getUserAvatar,
  isUserLoggedIn,
  getUserToken
} from '../modules/auth/selectors';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { getCardsById, isLoading } from '../modules/main/selectors';
import { editCard, cancelCard, fetchAllCards } from '../modules/main/actions';

const mapStateToProps = state => ({
  loading: isLoading(state),
  loggedIn: isUserLoggedIn(state),
  userName: getUserName(state),
  userId: getUserId(state),
  userAvatar: getUserAvatar(state),
  userToken: getUserToken(state),
  cards: getCardsById(state, getUserId(state))
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  editCard,
  cancelCard,
  fetchAllCards
};


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
