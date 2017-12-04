import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import LockImage from '../LockImage';

describe('<LockImage /> ', () => {
  it('calls onValueChanged property when pressed', () => {
    const testValue = false;
    const onValueChanged = sinon.spy();

    const component = shallow(<LockImage onValueChanged={onValueChanged} value={testValue} />);
    component.simulate('press');

    expect(onValueChanged.callCount)
      .toBe(1);
  });

  it('inverts value when pressed', () => {
    const testValue = false;
    const onValueChanged = jest.fn();
    const component = shallow(<LockImage onValueChanged={onValueChanged} value={testValue} />);
    component.simulate('press');

    expect(component.state('value'))
      .toBe(!testValue);
  });
});
