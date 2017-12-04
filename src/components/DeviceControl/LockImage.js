import React, { PureComponent } from 'react';
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

class LockImage extends PureComponent {
  constructor(props) {
    super(props);
    this.init = true;

    this.topMinPercent = 0.055;
    this.topMaxPercent = 0.50;

    this.topMin = 0;
    this.topMax = 0;

    this.state = {
      value: this.props.value,
      lockTopY: new Animated.Value(0),
    };

    this.toggleLock = this.toggleLock.bind(this);
    this.onTopLayout = this.onTopLayout.bind(this);
  }

  onTopLayout(event) {
    if (!this.init) {
      return;
    }

    this.topHeight = event.nativeEvent.layout.height;

    this.topMin = this.topHeight * this.topMinPercent;
    this.topMax = this.topHeight * this.topMaxPercent;

    this.state.lockTopY.setValue(this.state.value ? this.topMax : this.topMin);
    this.init = false;
  }

  toggleLock() {
    const toValue = this.state.value ? this.topMin : this.topMax;
    Animated.spring(this.state.lockTopY, { toValue }).start();
    const newValue = !this.state.value;
    this.setState({
      value: newValue,
    });

    this.props.onValueChanged(newValue);
  }

  render() {
    const { style } = this.props;

    return (
      <Touchable
        onPress={this.toggleLock}
        style={style}
      >
        <View>
          <Animated.Image
            tintColor={this.props.tintColor}
            onLayout={this.onTopLayout}
            resizeMode="contain"
            style={{
              top: this.state.lockTopY,
              flex: 0.5,
            }}
            source={{ uri: lockImage.top }}
          />
          <Image
            tintColor={this.props.tintColor}
            resizeMode="contain"
            style={{
              flex: 0.5,
            }}
            source={{ uri: lockImage.bottom }}
          />
        </View>
      </Touchable>
    );
  }
}

export default LockImage;
