import { connect } from 'react-redux';
import WishScreen from '../screens/wishScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';

const mapDispatchToProps = {
  navigateBack,
  navigate
};

export default connect(null, mapDispatchToProps)(WishScreen);
