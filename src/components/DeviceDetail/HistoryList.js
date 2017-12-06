import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from '../common';

const dateFormat = 'YYYY-MM-DD h:mm:ss A';

const HistoryList = ({ device }) => {
  if (device === null || device.history === null) {
    return null;
  }
  return (
    <View>
      { device.history.map(history => (
        <View key={history.id}>
          <Text>
            {moment(history.timestamp)
            .format(dateFormat)}: {history.state}
          </Text>
        </View>
      ))}
    </View>
  );
};

HistoryList.propTypes = {
  device: PropTypes.shape({
    history: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }),
};

export default HistoryList;
