import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import App from '../src/main';

const middlewares = [];
const mockStore = configureStore(middlewares); 

it('renders correctly', () => {
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

  const tree = renderer.create(<App store={store} />);
  console.log(tree.toJSON());
}); 
