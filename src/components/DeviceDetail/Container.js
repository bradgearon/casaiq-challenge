import { connect } from 'react-redux';

import { updateDevice } from '../../actions';
import DeviceDetail from './Component';

const mapStateToProps = state => ({ devices: state.devices });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const props = Object.assign({}, ownProps, stateProps, dispatchProps);
  [props.device] = props.devices.filter(d => d.device_name === props.device);
  return props;
};

/*
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};
*/

export default connect(mapStateToProps, null, mergeProps)(DeviceDetail);
