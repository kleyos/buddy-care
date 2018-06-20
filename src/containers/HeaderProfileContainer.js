import { connect } from 'react-redux';
import HeaderProfile from '../components/headerProfile';
import { login } from '../modules/auth/actions';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
