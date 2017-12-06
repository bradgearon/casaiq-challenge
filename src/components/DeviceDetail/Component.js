import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import DeviceControl from '../DeviceControl';
import SlidingPanel from '../SlidingPanel';

import { Text } from '../common';

const dateFormat = 'YYYY-MM-DD h:mm:ss A';

const HistoryList = ({ device }) => {
  if (device === null || device.history === null) {
    return null;
  }
  return device.history.map(history => (
    <View key={history.id}>
      <Text>
        {moment(history.timestamp)
          .format(dateFormat)}: {history.state}
      </Text>
    </View>
  ));
};

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
  device: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
  updateDevice: PropTypes.func.isRequired,
  addHistory: PropTypes.func.isRequired,
};

export default DeviceDetail;
