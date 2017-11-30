import React, {Component} from 'react';
import {Text, View} from 'react-native';

import sceneStyle from '../styles/scene';
import DeviceList from '../containers/DeviceList';

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us'
  };

  render() {
    return (
      <View style={sceneStyle.content}>
        <DeviceList />
      </View>
    );
  }
}

export {AboutUs};