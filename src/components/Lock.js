import React from 'react';
import { Switch } from 'react-native';

const Lock = ({ device, updateDevice }) => (
  <Switch
    onValueChange={value => updateDevice(device, value)}
    value={device.state === 'locked'}
  />
);

export default Lock;
