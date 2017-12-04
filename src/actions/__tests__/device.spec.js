import * as actions from '../device';
import * as types from '../types';

describe('device actions', () => {
  it('should create an action to update a device', () => {
    const testDevice = {
      device_name: 'test device',
    };
    const isLocked = false;

    const expectedAction = {
      type: types.default.UPDATE_DEVICE,
      device_name: testDevice.device_name,
      state: 'unlocked',
    };

    expect(actions.updateDevice(testDevice, isLocked))
      .toEqual(expectedAction);
  });
});
