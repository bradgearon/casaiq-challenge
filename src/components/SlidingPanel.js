import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Animated,
  ScrollView,
} from 'react-native';

import Touchable from 'react-native-platform-touchable';


class SlidingPanel extends Component {
  constructor(props) {
    super(props);

    this.iconImage = require('../assets/ic_arrow_drop_down_circle_white_48dp.png');

    this.onExpand = this.onExpand.bind(this);
    this.setMainHeight = this.setMainHeight.bind(this);
    this.setTitleHeight = this.setTitleHeight.bind(this);

    this.state = {
      expandHeight: 0,
      containerTop: new Animated.Value(0),
      iconRotation: new Animated.Value(0),
      title: this.props.title,
      expanded: false,
      titleHeight: 0,
    };
  }

  onExpand() {
    this.state.expanded = !this.state.expanded;
    const top = this.state.expanded ? -this.props.expandHeight : 0;
    const rotation = this.state.expanded ? 1 : 0;

    Animated.parallel([
      Animated.spring(this.state.iconRotation, {
        toValue: rotation,
      }),
      Animated.spring(this.state.containerTop, {
        toValue: top,
      }),
    ]).start();
  }

  setMainHeight(event) {
    const { height } = event.nativeEvent.layout;
    this.setState(() => ({
      expandHeight: this.props.expandHeight,
      height,
    }));
  }

  setTitleHeight(event) {
    const { height } = event.nativeEvent.layout;
    this.setState(() => ({
      titleHeight: height,
    }));
  }

  render() {
    const rotation = this.state.iconRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    return (
      <Animated.View
        style={{
          top: this.state.containerTop,
          height: this.state.height,
        }}
      >
        <View>
          <Touchable
            onPress={this.onExpand}
            onLayout={this.setMainHeight}
            background={Touchable.SelectableBackground()}
            style={{
              elevation: 1.5,
              backgroundColor: 'white',
            }}
          >
            <View style={{
                flexDirection: 'row',
                padding: 10,
              }}
            >
              <Text
                onLayout={this.setTitleHeight}
                style={{
                  flex: 1,
                  fontSize: 20,
                }}
              >
                {this.state.title}
              </Text>
              <Animated.Image
                style={{
                  transform: [{ rotate: rotation }],
                  height: this.state.titleHeight,
                  width: this.state.titleHeight,
                }}
                tintColor="darkgrey"
                source={this.iconImage}
              />
            </View>
          </Touchable>
          <ScrollView style={{
              backgroundColor: 'white',
              height: this.state.expandHeight,
            }}
          >
            <View style={{ padding: 10 }}>
              {this.props.children}
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}

export default SlidingPanel;
