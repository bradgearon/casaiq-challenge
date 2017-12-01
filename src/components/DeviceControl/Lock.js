import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const lockImage = {
  top: require('../../assets/lock-top.png'),
  bottom: require('../../assets/lock-bottom.png'),
};

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
            source={lockImage.top}
          />
          <Image
            style={{ top: -58 }}
            source={lockImage.bottom}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Lock;
