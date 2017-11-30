import {connect} from 'react-redux';
import {updateDevice} from '../../actions';
import DeviceList from './Component';

const mapStateToProps = state => {
  return {devices: state.devices};
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

export default connect(mapStateToProps)(DeviceList);