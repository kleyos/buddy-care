import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { getAllUsers } from '../modules/main/selectors';

const mapStateToProps = state => ({
  users: getAllUsers(state)
});

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
