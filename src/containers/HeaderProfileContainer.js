import { connect } from 'react-redux';
import HeaderProfile from '../components/headerProfile';
import { navigate } from '../modules/navigation/actions';
import { navTypes } from '../config/configureNavigation';


const mapDispatchToProps = {
  navigateBack: () => navigate(navTypes.MAIN)
};

export default connect(null, mapDispatchToProps)(HeaderProfile);
