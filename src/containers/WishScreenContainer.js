import { connect } from 'react-redux';
import WishScreen from '../screens/wishScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { getUserToken, isFirstWish } from '../modules/auth/selectors';
import { saveCard, editCard } from '../modules/main/actions';

const mapStateToProps = state => ({
  userToken: getUserToken(state),
  isFirstWish: isFirstWish(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  saveCard,
  editCard
};

export default connect(mapStateToProps, mapDispatchToProps)(WishScreen);
