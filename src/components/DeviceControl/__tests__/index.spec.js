import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';

import DeviceControl from '..';


describe('<DeviceControl /> ', () => {
  it('renders Lock when type is set to lock', () => {
    const testDevice = { type: 'lock', state: 'locked' };
    const component = shallow(<DeviceControl
      updateDevice={() => {}}
      addHistory={() => {}}
      device={testDevice}
    />);
    const lock = component.find('Lock');
    expect(lock.length).toBeGreaterThan(0);
  });

  it('renders UnknownDevice when type is anything but lock', () => {
    const testDevice = { type: 'light', state: 'off' };
    const component = shallow(<DeviceControl
      updateDevice={() => {}}
      addHistory={() => {}}
      device={testDevice}
    />);
    const unknown = component.find('UnknownDevice');
    expect(unknown.length).toBeGreaterThan(0);
  });
});
