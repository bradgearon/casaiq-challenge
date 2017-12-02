import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import LockImage from './LockImage';

const Lock = ({
  device, updateDevice, addHistory, style,
}) => (
  <View style={style}>
    <LockImage
      style={{
        elevation: 2,
        borderRadius: 5,
        padding: 10,
        height: 200,
      }}
      onValueChanged={(value) => {
        updateDevice(device, value);
        addHistory(device);
      }}
      value={device.state === 'locked'}
    />
    <Text>{device.state}</Text>
  </View>
);

export default Lock;
