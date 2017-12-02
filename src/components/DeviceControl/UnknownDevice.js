import React, { Component } from 'react';
import { View, Text } from 'react-native';

const UnkownDevice = ({ device, style }) => (
  <View style={[{ margin: 20 }, style]}>
    <Text style={{ fontSize: 18 }}>We are not supporting this device at the moment</Text>
  </View>
);

export default UnkownDevice;
