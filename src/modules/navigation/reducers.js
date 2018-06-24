
import Navigator from '../../config/configureNavigation';

export default (state, action) =>
  Navigator.router.getStateForAction(action, state) || state;
