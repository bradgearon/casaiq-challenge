import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import DeviceControl from '../DeviceControl';

const DeviceDetail = ({ device, updateDevice, addHistory }) => (
  <View>
    <DeviceControl
      device={device}
      updateDevice={updateDevice}
      addHistory={addHistory}
    />
    <Text>{device.state}</Text>
    <Text>{JSON.stringify(device.history)}</Text>
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
