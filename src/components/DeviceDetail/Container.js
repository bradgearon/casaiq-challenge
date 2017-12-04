import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDevice, addHistory } from '../../actions';

import DeviceDetail from './Component';

const mapStateToProps = (state, ownProps) => ({
  device: state.devices.filter(d => d.device_name === ownProps.device_name)[0],
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ updateDevice, addHistory }, dispatch),
)(DeviceDetail);
