import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Animated,
  Image,
} from 'react-native';

const lockImage = {
  top: require('../../assets/lock-top.png'),
  bottom: require('../../assets/lock-bottom.png'),
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

    const topMinPercent = 0.06;
    const topMaxPercent = 0.23;

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
      <TouchableWithoutFeedback onPress={toggleLock}>
        <View style={style}>
          <Animated.Image
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
              flex: 1,
              top: lockTopY,
            }}
            source={lockImage.top}
          />
          <Image
            resizeMode="contain"
            style={{
              bottom: '12%',
              marginBottom: '-4%',
              flex: 1,
            }}
            source={lockImage.bottom}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default LockImage;
