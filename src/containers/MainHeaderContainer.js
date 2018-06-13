import { connect } from 'react-redux';
import MainHeader from '../components/mainHeader';
import { login } from '../modules/auth/actions';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
