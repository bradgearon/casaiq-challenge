import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import * as Screens from '../screens'

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

class Router extends Component {
  static childContextTypes = {
    router: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (<Routes screenProps={{ router: Routes.router }}/>)
  }
  getChildContext() {
    return {
      router: Routes.router,
      navigation: this.navigation
    };
  }
}

export default Router;