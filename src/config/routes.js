import importToArray from 'import-to-array';

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import {View, Text} from 'react-native';
import * as Screens from '../screens'

const screens = importToArray(Screens);

const Routes = StackNavigator({
  AboutUs: {
    screen: Screens.AboutUs,
    path: 'about-us'
  },
  Device: {
    screen: Screens.Device,
    path: 'device/:device_name'
  }
});

for(var screen of screens) {
  screen.defaultProps = {
    router: Routes.router
  };
}

class Router extends Component {
  render() {
    return (<Routes/>)
  }
}

export default Router;