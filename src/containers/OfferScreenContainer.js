import { connect } from 'react-redux';
import OfferScreen from '../screens/offerScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';

const mapDispatchToProps = {
  navigateBack,
  navigate
};

export default connect(null, mapDispatchToProps)(OfferScreen);
