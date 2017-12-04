import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';

import Lock from '../Lock';

describe('<Lock /> ', () => {
  it('renders LockImage with value = true for locked device', () => {
    const testDevice = { type: 'lock', state: 'locked' };
    const component = shallow(<Lock device={testDevice} />);
    const lockImage = component.find('LockImage');
    expect(lockImage.prop('value'))
      .toBe(true);
  });

  it('renders lock state text', () => {
    const testDevice = { type: 'lock', state: 'locked' };
    const component = shallow(<Lock device={testDevice} />);
    const lockState = component.find('Text');
    expect(lockState.children().text())
      .toBe(testDevice.state);
  });
});
