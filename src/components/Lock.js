import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

class Lock extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const topMin = 10;
    const topMax = 50;
    const { device, updateDevice } = this.props;

    let isLocked = device.state === 'locked';
    const lockTopY = new Animated.Value(isLocked ? topMax : topMin);

    const toggleLock = () => {
      const toValue = isLocked ? topMin : topMax;
      Animated.spring(lockTopY, { toValue }).start();
      isLocked = !isLocked;
      updateDevice(device, isLocked);
    };

    return (
      <TouchableWithoutFeedback onPress={toggleLock}>
        <View>
          <Animated.Image
            style={{ top: lockTopY }}
            source={require('../assets/lock-top.png')}
          />
          <Image
            style={{
              top: -58,
            }}
            source={require('../assets/lock-bottom.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Lock;
