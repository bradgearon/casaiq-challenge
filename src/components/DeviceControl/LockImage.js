import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
} from 'react-native';

import Touchable from 'react-native-platform-touchable';

const lockImage = {
  top: require('../../assets/top.png'),
  bottom: require('../../assets/bottom.png'),
};

class LockImage extends Component {
  constructor(props) {
    super(props);
    this.init = true;
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    let topHeight = 0;

    const topMinPercent = 0.055;
    const topMaxPercent = 0.50;

    let topMin = 0;
    let topMax = 0;

    let { value, style } = this.props;
    const lockTopY = new Animated.Value(value ? topMax : topMin);

    const toggleLock = () => {
      const toValue = value ? topMin : topMax;
      Animated.spring(lockTopY, { toValue }).start();
      value = !value;
      this.props.onValueChanged(value);
    };

    return (
      <Touchable
        onPress={toggleLock}
        style={style}
      >
        <View>
          <Animated.Image
            tintColor="#2196F3"
            onLayout={(event) => {
              topHeight = event.nativeEvent.layout.height;
              topMin = topHeight * topMinPercent;
              topMax = topHeight * topMaxPercent;
              if (this.init) {
                lockTopY.setValue(value ? topMax : topMin);
                this.init = false;
              }
            }}
            resizeMode="contain"
            style={{
              top: lockTopY,
              flex: 0.5,
            }}
            source={lockImage.top}
          />
          <Image
            tintColor="#2196F3"
            resizeMode="contain"
            style={{
              flex: 0.5,
            }}
            source={lockImage.bottom}
          />
        </View>
      </Touchable>
    );
  }
}

export default LockImage;
