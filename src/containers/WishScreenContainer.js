import { connect } from 'react-redux';
import WishScreen from '../screens/wishScreen';
import { navigateBack, navigate } from '../modules/navigation/actions';
import { getUserToken } from '../modules/auth/selectors';
import { saveCard } from '../modules/main/actions';

const mapStateToProps = state => ({
  userToken: getUserToken(state)
});

const mapDispatchToProps = {
  navigateBack,
  navigate,
  saveCard
};

export default connect(mapStateToProps, mapDispatchToProps)(WishScreen);
