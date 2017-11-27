import React, {Component} from 'react';
import {Router, Scene, Stack, Drawer} from 'react-native-router-flux';

import * as Screens from '../screens'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="aboutUs"
            path="about-us"
            component={Screens.AboutUs}
            title="About Us"
            initial/>
          <Scene
            key="device"
            path="device/:device-name"
            component={Screens.Device}
            title="Device"/>
        </Scene>
      </Router>
    )
  }
}

export default Routes;