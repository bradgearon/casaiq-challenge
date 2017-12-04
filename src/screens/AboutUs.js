import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import { Text } from '../components/common';

import sceneStyle from '../styles/scene';
import DeviceList from '../components/DeviceList';
import containerStyles from '../styles/containers';

let backHandledOnce = false;
BackHandler.addEventListener('hardwareBackPress', () => {
  if (!backHandledOnce) {
    backHandledOnce = true;
    setTimeout(() => { backHandledOnce = false; }, 2000);
    ToastAndroid.show('press back again to exit', 2000);
    return true;
  }

  return false;
});

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <View style={sceneStyle.content}>
        <Text style={[containerStyles.mm, { marginBottom: 0 }]}>
          CasaIQ - A Smart Home Solution Custom-built for
          Apartments, Condos, and Multifamily Real Estate.
        </Text>
        <DeviceList style={containerStyles.ms} />
      </View>
    );
  }
}

export { AboutUs };
