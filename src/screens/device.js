import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Device extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => Actions.replace('aboutUs')}
          title="Go to About Us"/>
      </View>
    )
  }
}

export {Device};