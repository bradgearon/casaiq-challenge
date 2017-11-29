import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import {Link} from '../components/link';
import {LinkButton} from '../components/linkButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us'
  };

  render() {
    return (
      <View>
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