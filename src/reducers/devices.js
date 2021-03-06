import DeviceTypes from '../actions/types';

const addHistoryElement = (device, action) => {
  device.history.unshift({
    timestamp: action.timestamp,
    state: device.state,
    id: action.id,
  });
  return device.history.slice(0, 10);
};

const devices = (state = [], action) => {
  switch (action.type) {
    case DeviceTypes.UPDATE_DEVICE:
      return state.map(device =>
        ((device.device_name === action.device_name)
          ? {
            ...device,
            state: action.state,
          }
          : device));
    case DeviceTypes.ADD_DEVICE_HISTORY:
      return state.map(device =>
        ((device.device_name === action.device_name)
          ? {
            ...device,
            history: addHistoryElement(device, action),
          }
          : device));
    default:
      return state;
  }
};

export default devices;
