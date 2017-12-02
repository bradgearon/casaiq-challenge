export const DeviceTypes = {
  UPDATE_DEVICE: 'UPDATE_DEVICE',
  ADD_DEVICE_HISTORY: 'ADD_DEVICE_HISTORY',
};

export const updateDevice = (device, isLocked) => ({
  type: DeviceTypes.UPDATE_DEVICE,
  device_name: device.device_name,
  state: isLocked ? 'locked' : 'unlocked',
});

let nextHistoryId = 1;
export const addHistory = device => ({
  type: DeviceTypes.ADD_DEVICE_HISTORY,
  device_name: device.device_name,
  timestamp: Date.now(),
  id: nextHistoryId++,
});
