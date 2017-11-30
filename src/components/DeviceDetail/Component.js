import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native'; 
import PropTypes from 'prop-types';

const DeviceDetail = ({ device }) => (
  <View>
    <Text>{device.device_name}</Text>
    <Text>{device.type}</Text>
    <Switch value={device.state === 'locked'} />
  </View>
);

DeviceDetail.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    device_name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }).isRequired
};

export default DeviceDetail;