export const DeviceTypes = {
  UPDATE_DEVICE: 'UPDATE_DEVICE',
};

export const updateDevice = (id, state) => ({
  type: DeviceTypes.UPDATE_DEVICE,
  id,
  state,
});
