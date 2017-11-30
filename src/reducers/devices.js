import { DeviceTypes } from '../actions/device';

const devices = (state = [], action) => {
  switch (action.type) {
    case DeviceTypes.UPDATE_DEVICE:
      return state.map(device =>
        ((device.device_name === action.device_name)
          ? { ...device, state: action.state }
          : device));
    default:
      return state;
  }
};

export default devices;
