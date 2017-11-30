import React, {Component} from 'react';
import {View} from 'react-native'; 
import PropTypes from 'prop-types';
import {LinkButton} from '../LinkButton';

import normalizeTitle from '../../utils/normalizeTitle';

const DeviceList = ({ devices }) => (
  <View>
    {devices.map((device, index) => (
      <LinkButton key={device.device_name}
        title={normalizeTitle(device.device_name)}
        to={`device/${device.device_name}`} />
    ))}
  </View>
);

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      device_name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default DeviceList;