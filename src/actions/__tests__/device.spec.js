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
  it('should set action values for new history', () => {
    const testDevice = {
      device_name: 'test device',
      history: [],
    };

    const historyAction = actions.addHistory(testDevice);

    expect(historyAction.timestamp)
      .toBeGreaterThan(0);

    expect(historyAction.id)
      .toBeGreaterThan(0);

    expect(historyAction.device_name)
      .toBe(testDevice.device_name);
  });
});
