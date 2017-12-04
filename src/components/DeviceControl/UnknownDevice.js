import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../common';

import containerStyles from '../../styles/containers';

const UnknownDevice = ({ device, style }) => (
  <View style={[containerStyles.mm, style]}>
    <Text>We are not supporting this device at the moment</Text>
  </View>
);

export default UnknownDevice;
