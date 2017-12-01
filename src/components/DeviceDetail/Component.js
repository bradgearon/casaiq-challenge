import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import UnknownDevice from '../UnknownDevice';
import Lock from '../Lock';

const DeviceTypes = {
  lock: Lock,
  unknown: UnknownDevice,
};

const DeviceControl = ({ device, ...rest }) => {
  let deviceControl = DeviceTypes.unknown;
  const foundDeviceControl = DeviceTypes[device.type];
  if (foundDeviceControl !== undefined) {
    deviceControl = foundDeviceControl;
  }
  return deviceControl({ device, ...rest });
};

const DeviceDetail = ({ device, updateDevice }) => (
  <View>
    <Text>{device.device_name}</Text>
    <Text>{device.type}</Text>
    <DeviceControl
      device={device}
      updateDevice={updateDevice}
    />
  </View>
);

DeviceDetail.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    device_name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeviceDetail;
