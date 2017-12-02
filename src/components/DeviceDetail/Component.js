import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import DeviceControl from '../DeviceControl';
import SlidingPanel from '../SlidingPanel';

const DeviceDetail = ({ device, updateDevice, addHistory }) => (
  <View style={{ flex: 1, zIndex: 0 }}>
    <View style={{ flex: 1, zIndex: 0 }}>
      <DeviceControl
        style={{ alignItems: 'center' }}
        device={device}
        updateDevice={updateDevice}
        addHistory={addHistory}
      />
    </View>
    <SlidingPanel
      title="History"
      expandHeight={200}
      style={{ zIndex: 2 }}
    >
      {device.history
        .map(history => (
          <View key={history.id}>
            <Text style={{ fontSize: 16 }}>{moment(history.timestamp).format('YYYY-MM-DD h:mm:ss A')}: {history.state}</Text>
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
