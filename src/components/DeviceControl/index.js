import React, { Component } from 'react';

import UnknownDevice from './UnknownDevice';
import Lock from './Lock';

const DeviceTypes = {
  lock: Lock,
  unknown: UnknownDevice,
};

class DeviceControl extends Component {
  constructor(props) {
    super(props);
    this.component = UnknownDevice;
    const foundDeviceControl = DeviceTypes[this.props.device.type];
    if (foundDeviceControl !== undefined) {
      this.component = foundDeviceControl;
    }
  }
  render() {
    const Control = this.component;
    return <Control {...this.props} />;
  }
}

export default DeviceControl;
