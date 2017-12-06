import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import { Text } from '../common';

import LockImage from './LockImage';

import containerStyles from '../../styles/containers';
import { COLOR_ACCENT, COLOR_SECONDARY } from '../../styles/common';

const getLandscape = () => {
  const dim = Dimensions.get('window');
  return dim.width > dim.height;
};

class Lock extends Component {
  static propTypes = {
    device: PropTypes.shape({
      state: PropTypes.string.isRequired,
    }).isRequired,
    updateDevice: PropTypes.func.isRequired,
    addHistory: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      landscape: getLandscape(),
    };

    this.onDimensionsChanged = this.onDimensionsChanged.bind(this);
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  }

  onDimensionsChanged() {
    this.setState({
      landscape: getLandscape(),
    });
  }

  render() {
    return (
      <View style={[{
        flex: 1,
        justifyContent: 'center',
        flexDirection: this.state.landscape ? 'row' : 'column',
      }, this.props.style]}
      >
        <View style={{
          flex: this.state.landscape ? 0.75 : 0.55,
          height: '75%',
          alignItems: 'flex-end',
        }}
        >
          <LockImage
            tintColor={COLOR_SECONDARY}
            style={[
              containerStyles.es,
              containerStyles.ps,
              containerStyles.brs,
              { backgroundColor: COLOR_ACCENT },
            ]}
            onValueChanged={(value) => {
              this.props.updateDevice(this.props.device, value);
              this.props.addHistory(this.props.device);
            }}
            value={this.props.device.state === 'locked'}
          />
        </View>
        <View style={{
          padding: 10,
          flex: this.state.landscape ? 0.5 : undefined,
        }}
        >
          <Text>{this.props.device.state}</Text>
        </View>
      </View>

    );
  }
}

export default Lock;
