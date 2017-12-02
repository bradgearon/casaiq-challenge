import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import LockImage from './LockImage';

const Lock = ({
  device, updateDevice, addHistory, style,
}) => (
  <View style={[{ marginTop: 10 }, style]}>
    <LockImage
      style={{
        elevation: 2,
        borderRadius: 5,
        height: 300,
      }}
      onValueChanged={(value) => {
        updateDevice(device, value);
        addHistory(device);
      }}
      value={device.state === 'locked'}
    />
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 18 }}>{device.state}</Text>
    </View>
  </View>
);

export default Lock;
