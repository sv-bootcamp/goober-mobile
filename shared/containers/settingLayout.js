import { connect } from 'react-redux';
import { setCurrentScene } from '../actions/fluxActions';
import { setToken } from '../actions/authActions';
import Setting from '../components/setting';

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentScene: (currentScene) => {
      return dispatch(setCurrentScene(currentScene));
    },
    setToken: (token) => {
      return dispatch(setToken(token));
    }
  };
};

const SettingLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);

export default SettingLayout;
