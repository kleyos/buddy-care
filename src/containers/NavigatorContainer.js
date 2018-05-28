import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from '../config/configureNavigation';
import { addListener } from '../config/configureStore';

const mapStateToProps = ({ navigation }) => ({ navigation });
const mergeProps = (stateProps, dispatchProps) => ({
  navigation: addNavigationHelpers({
    state: stateProps.navigation,
    dispatch: dispatchProps.dispatch,
    addListener
  })
});

export default connect(mapStateToProps, null, mergeProps)(Navigator);
