import { connect } from 'react-redux';
import OfferScreen from '../screens/offerScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { setFirstWish } from '../modules/auth/actions';
import { saveCard, editCard } from '../modules/main/actions';
import { getUserToken, isFirstWish } from '../modules/auth/selectors';

const mapStateToProps = state => ({
  userToken: getUserToken(state),
  isFirstWish: isFirstWish(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  setFirstWish,
  saveCard,
  editCard
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
