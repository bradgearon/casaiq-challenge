import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import Navigation from '../config/Navigation';

class AppRoot extends Component {
  static childContextTypes = {
    router: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (<Navigation />)
  }
  getChildContext() {
    return {router: Navigation.router, navigation: this.navigation};
  }
}

export default AppRoot;