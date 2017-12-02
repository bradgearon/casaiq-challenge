import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

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
      {device.history
        .sort((left, right) => right.timestamp - left.timestamp)
        .map(history => (
          <View>
            <Text>{moment(history.timestamp).format('YYYY-MM-DD hh:mm:ss')} {history.state}</Text>
          </View>
      ))}
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
