import { connect } from 'react-redux';
import OfferScreen from '../screens/offerScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { setFirstWish } from '../modules/auth/actions';

const mapDispatchToProps = {
  navigateBack,
  navigate,
  setFirstWish
};

export default connect(null, mapDispatchToProps)(OfferScreen);
