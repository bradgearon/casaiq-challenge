import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import * as Screens from '../screens'
import PropTypes from 'prop-types';

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
    router: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      router: Routes.router
    };
  }
  render() {
    return (<Routes screenProps={{ router: Routes.router }}/>)
  }
  
}

export default Router;