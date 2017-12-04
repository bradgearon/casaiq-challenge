import React, { Component } from 'react';
import { View } from 'react-native';

import normalizeTitle from '../utils/normalizeTitle';

import sceneStyle from '../styles/scene';
import DeviceDetail from '../components/DeviceDetail';

class Device extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Device ${normalizeTitle(navigation.state.params.device_name)}`,
  });
  render() {
    const { goBack, state } = this.props.navigation;
    return (
      <View style={sceneStyle.content}>
        <DeviceDetail device_name={state.params.device_name} />
      </View>
    );
  }
}

export { Device };
