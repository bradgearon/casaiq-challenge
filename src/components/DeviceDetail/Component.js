import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import DeviceControl from '../DeviceControl';
import SlidingPanel from '../SlidingPanel';

const DeviceDetail = ({ device, updateDevice, addHistory }) => (
  <View>
    <DeviceControl
      device={device}
      updateDevice={updateDevice}
      addHistory={addHistory}
    />
    <Text>{device.state}</Text>
    <SlidingPanel
      title="History"
      height={200}
    >
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
    </SlidingPanel>
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
