import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Navigation from '../config/Navigation';

import devices from '../store/devices';
import createReduxStore from '../store/createReduxStore';

const reduxStore = createReduxStore(devices);

class AppRoot extends Component {
  static childContextTypes = {
    router: PropTypes.object,
    navigation: PropTypes.object,
  }
  getChildContext() {
    return { router: Navigation.router, navigation: this.navigation };
  }
  render() {
    return (
      <Provider store={reduxStore}>
        <Navigation />
      </Provider>
    );
  }
}

export default AppRoot;
