import React, { Component } from 'react';
import { View, Text } from 'react-native';

import sceneStyle from '../styles/scene';
import DeviceList from '../components/DeviceList';

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <View style={sceneStyle.content}>
        <Text style={{
          fontSize: 18,
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}
        >
          CasaIQ - A Smart Home Solution Custom-built for
          Apartments, Condos, and Multifamily Real Estate.
        </Text>
        <DeviceList style={{ margin: 10 }} />
      </View>
    );
  }
}

export { AboutUs };
