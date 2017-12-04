import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import SlidingPanel from '../SlidingPanel';

describe('<SlidingPanel /> ', () => {
  it('expands up on click', () => {
    const expectedHeight = 200;
    const component = shallow(<SlidingPanel expandHeight={expectedHeight} />);

    const touchable = component.find('PlatformTouchable');
    touchable.simulate('press');

    expect(component.state().expanded).toBeTruthy();
    expect(component.state().containerTop._animation._toValue)
      .toBe(-expectedHeight);
  });
});

describe('<SlidingPanel /> ', () => {
  it('collapses on click', () => {
    const expectedHeight = 200;
    const component = shallow(<SlidingPanel expanded expandHeight={expectedHeight} />);

    const touchable = component.find('PlatformTouchable');
    touchable.simulate('press');

    expect(component.state().expanded).toBeFalsy();
    expect(component.state().containerTop._animation._toValue)
      .toBe(0);
  });
});

