import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const lockTop = require('../../assets/lock-top.png');
const lockBottom = require('../../assets/lock-bottom.png');

class Lock extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const topMin = 10;
    const topMax = 50;
    const { device, updateDevice, addHistory } = this.props;

    let isLocked = device.state === 'locked';
    const lockTopY = new Animated.Value(isLocked ? topMax : topMin);

    const toggleLock = () => {
      const toValue = isLocked ? topMin : topMax;
      Animated.spring(lockTopY, { toValue }).start();
      isLocked = !isLocked;
      updateDevice(device, isLocked);
      addHistory(device);
    };

    return (
      <TouchableWithoutFeedback onPress={toggleLock}>
        <View>
          <Animated.Image
            style={{ top: lockTopY }}
            source={lockTop}
          />
          <Image
            style={{ top: -58 }}
            source={lockBottom}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Lock;
