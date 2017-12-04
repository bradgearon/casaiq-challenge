import configureStore from 'redux-mock-store';

import * as actions from '../../actions';
import deviceReducer from '../devices';

const middlewares = [];
const mockStore = configureStore(middlewares);

const devices = [{
  type: 'lock',
  device_name: 'test-device',
  state: 'unlocked',
  history: [],
}, {
  type: 'thermostat',
  device_name: 'test-device-2',
  state: '75',
  history: [],
}];

const store = mockStore({
  devices,
});

beforeEach(() => {
  store.clearActions();
});

describe('device reducer', () => {
  it('should update device state to unlocked when updating device with isLocked = false', () => {
    const testUpdateDeviceAction = actions.updateDevice(devices[0], false);
    const updatedDevices = deviceReducer(devices, testUpdateDeviceAction);
    expect(updatedDevices[0].state)
      .toBe('unlocked');
  });
  it('should update device state to locked when updating device with isLocked = true', () => {
    const testUpdateDeviceAction = actions.updateDevice(devices[0], true);
    const updatedDevices = deviceReducer(devices, testUpdateDeviceAction);
    expect(updatedDevices[0].state)
      .toBe('locked');
  });
  it('should add device history adding history', () => {
    const testAddHistoryAction = actions.addHistory(devices[0]);
    const updatedDevices = deviceReducer(devices, testAddHistoryAction);

    const { history } = updatedDevices[0];
    const [firstHistory] = history;

    expect(history.length).toBeGreaterThan(0);
    expect(firstHistory.timestamp).toBeGreaterThan(0);
  });
  it('should have at most ten history records', () => {
    let testAddHistoryAction;
    let updatedDevices;

    const addHistory = () => {
      testAddHistoryAction = actions.addHistory(devices[0]);
      updatedDevices = deviceReducer(devices, testAddHistoryAction);
    };

    for (let i = 0; i < 20; i++) {
      addHistory();
    }

    const { history } = updatedDevices[0];
    expect(history.length).toEqual(10);
  });
});
