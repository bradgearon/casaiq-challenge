export const DeviceTypes = {
  UPDATE_DEVICE: 'UPDATE_DEVICE',
};

export const updateDevice = (device, isLocked) => ({
  type: DeviceTypes.UPDATE_DEVICE,
  device_name: device.device_name,
  state: isLocked ? 'locked' : 'unlocked',
});
