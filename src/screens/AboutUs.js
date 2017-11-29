import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Link} from '../components/Link';
import {LinkButton} from '../components/LinkButton';

import sceneStyle from '../styles/scene';

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us'
  };

  render() {
    return (
      <View style={sceneStyle.content}>
        <LinkButton
          to="device/some-other-other-device"
          title="Some Other Other Device"/>
        <Link to="device/some-other-device">
          <Text>Some Other Device</Text>
        </Link>
      </View>
    );
  }
}

export {AboutUs};