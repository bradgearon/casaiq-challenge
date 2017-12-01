import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import DeviceControl from '../DeviceControl';

const DeviceDetail = ({ device, updateDevice }) => (
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <DeviceControl
      device={device}
      updateDevice={updateDevice}
    />
    <Text style={{ fontSize: 24 }}>{device.state}</Text>
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
