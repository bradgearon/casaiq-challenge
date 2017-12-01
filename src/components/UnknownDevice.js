import React from 'react';
import { View, Text } from 'react-native';

const UnkownDevice = ({ device, updateDevice }) => (
  <View>
    <Text>This device is {device.device_name}</Text>
    <Text>We are not supporting this device at the moment</Text>
  </View>
);

export default UnkownDevice;
