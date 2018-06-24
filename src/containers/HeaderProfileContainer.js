import { connect } from 'react-redux';
import HeaderProfile from '../components/headerProfile';
import { navigateBack } from '../modules/navigation/actions';

const mapStateToProps = state => ({
  //
});

const mapDispatchToProps = {
  navigateBack
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
