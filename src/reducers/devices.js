import {DeviceTypes} from '../actions/device';

const devices = (state = [], action) => {
  switch (action.type) {
    case DeviceTypes.UPDATE_DEVICE:
      return state.map(device =>
        (device.id === action.id) 
          ? {...device, state: !device.state}
          : device
      );
    default:
      return state;
  }
};

export default devices;