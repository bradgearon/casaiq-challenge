import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import {NavigationActions} from 'react-navigation';
import normalizeTitle from '../utils/normalizeTitle';

class Device extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Device ${normalizeTitle(navigation.state.params.device_name)}`,
  });
  render() {
    const {goBack, state} = this.props.navigation;
    return (
      <View>
        <Text>Name: {state.params.device_name}</Text>
        <Button 
          onPress={() => goBack()} 
          title="Go to About Us"/>
      </View>
    )
  }
};

export {Device};