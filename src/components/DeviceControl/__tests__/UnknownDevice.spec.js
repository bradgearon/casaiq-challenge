import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';

import UnknownDevice from '../UnknownDevice';

describe('<UnknownDevice /> ', () => {
  it('displays no support message', () => {
    const noSupportMessage = 'We are not supporting this device at the moment';
    const component = shallow(<UnknownDevice />);
    const text = component.find('Text');
    expect(text.children().text())
      .toBe(noSupportMessage);
  });
});
