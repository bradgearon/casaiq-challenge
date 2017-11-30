export const updateDevice = (id, state) => {
  return {
    type: 'UPDATE_DEVICE',
    id,
    state
  }
};