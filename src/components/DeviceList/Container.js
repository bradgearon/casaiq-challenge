import { connect } from 'react-redux';

import DeviceList from './Component';

const mapStateToProps = state => ({ devices: state.devices });

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
