import { connect } from 'react-redux';
import MainScreen from '../screens/mainScreen';
import { getFilteredUsers } from '../modules/main/selectors';

const mapStateToProps = state => ({
  users: getFilteredUsers(state)
});

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
