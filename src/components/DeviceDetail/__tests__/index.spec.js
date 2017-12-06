import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import DeviceDetail from '..';

const middlewares = [];
const mockStore = configureStore(middlewares);

const devices = [{
  type: 'lock',
  device_name: 'test-device',
  state: 'unlocked',
  history: [
    { id: 1, timestamp: 123, state: 'locked' },
    { id: 2, timestamp: 456, state: 'unlocked' },
  ],
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

describe('<DeviceDetail /> ', () => {
  it('displays a device by name', () => {
    const expectedDevice = devices[0];
    const testDeviceName = 'test-device';
    const component = shallow(<DeviceDetail
      store={store}
      updateDevice={() => {}}
      addHistory={() => {}}
      device_name={testDeviceName}
    />);

    expect(component.prop('device')).toBe(expectedDevice);
  });
  it('displays a device controller by name', () => {
    const expectedDevice = devices[0];
    const testDeviceName = 'test-device';
    const component = shallow(<DeviceDetail
      store={store}
      device_name={testDeviceName}
    />);

    const deviceControl = component.dive().find('DeviceControl');
    expect(deviceControl.props().device).toBe(expectedDevice);
  });
  it('displays a device\'s history  by name', () => {
    const expectedDevice = devices[0];
    const testDeviceName = 'test-device';
    const component = shallow(<DeviceDetail
      store={store}
      device_name={testDeviceName}
    />);

    const historyList = component.dive().find('HistoryList');
    expect(historyList.props().device).toBe(expectedDevice);
  });
});

