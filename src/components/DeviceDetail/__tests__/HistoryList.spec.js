import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import HistoryList from '../HistoryList';

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

describe('<HistoryList /> ', () => {
  it('displays a device\'s history', () => {
    const testHistory = [{
      id: 1,
      state: 'locked',
      timestamp: 21600000,
    }];
    const expectedTimestamp = '1970-01-01 12:00:00 AM';
    const expectedState = 'locked';

    const component = shallow(<HistoryList 
      device={{ history: testHistory }} />);
    const historyElement = component.find('Text').children()
      .map(c => c.text());

    expect(historyElement)
      .toContain(expectedTimestamp);

    expect(historyElement)
      .toContain(expectedState);
  });
});

