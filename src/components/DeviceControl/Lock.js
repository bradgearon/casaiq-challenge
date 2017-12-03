import React, { Component, PureComponent } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';

import LockImage from './LockImage';

const getLandscape = () => {
  const dim = Dimensions.get('window');
  return dim.width > dim.height;
};

class Lock extends PureComponent {
  constructor() {
    super();
    this.state = {
      landscape: getLandscape(),
    };

    Dimensions.addEventListener('change', () => {
      this.setState({
        landscape: getLandscape(),
      });
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
            style={{
              padding: 10, elevation: 2, borderRadius: 5, backgroundColor: '#ECEFF1',
            }}
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
          <Text style={{ fontSize: 18 }}>{this.props.device.state}</Text>
        </View>
      </View>

    );
  }
}

export default Lock;
