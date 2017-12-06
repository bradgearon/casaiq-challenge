import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DeviceControl from '../DeviceControl';
import SlidingPanel from '../SlidingPanel';
import HistoryList from './HistoryList';

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
      <HistoryList device={device} />
    </SlidingPanel>
  </View>
);

DeviceDetail.propTypes = {
  device_name: PropTypes.string.isRequired,
  updateDevice: PropTypes.func.isRequired,
  addHistory: PropTypes.func.isRequired,
};

export default DeviceDetail;
