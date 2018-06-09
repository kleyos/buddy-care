import { connect } from 'react-redux';
import OfferScreen from '../screens/offerScreen';
import { login } from '../modules/auth/actions';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(OfferScreen);
