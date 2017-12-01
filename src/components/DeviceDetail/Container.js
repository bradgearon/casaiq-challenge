import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDevice } from '../../actions';
import DeviceDetail from './Component';

const mapStateToProps = (state, ownProps) => ({
  device: state.devices.filter(d => d.device_name === ownProps.device)[0],
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ updateDevice }, dispatch),
)(DeviceDetail);
