import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import DeviceControl from '../DeviceControl';
import SlidingPanel from '../SlidingPanel';

const DeviceDetail = ({ device, updateDevice, addHistory }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <DeviceControl
        device={device}
        updateDevice={updateDevice}
        addHistory={addHistory}
      />
      <Text>{device.state}</Text>
    </View>
    <SlidingPanel
      title="History"
      expandHeight={200}
    >
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Some history</Text>
      <Text style={{ fontSize: 20 }}>Last history</Text>
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
