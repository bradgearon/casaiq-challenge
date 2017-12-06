import React, { Component } from 'react';
import {
  View,
  Animated,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import Touchable from 'react-native-platform-touchable';
import { Text } from './common';

import styles from '../styles/type';
import containerStyles from '../styles/containers';
import { COLOR_ACCENT } from '../styles/common';

class SlidingPanel extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    title: PropTypes.string,
    expandHeight: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.iconImage = require('../assets/drop_down.png');

    this.onExpand = this.onExpand.bind(this);
    this.setMainHeight = this.setMainHeight.bind(this);
    this.setTitleHeight = this.setTitleHeight.bind(this);

    this.state = {
      expandHeight: 0,
      containerTop: new Animated.Value(this.props.expanded ? -this.props.expandHeight : 0),
      iconRotation: new Animated.Value(0),
      title: this.props.title,
      expanded: this.props.expanded,
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
            style={[containerStyles.es, containerStyles.default]}
          >
            <View style={[containerStyles.ps, {
                flexDirection: 'row',
              }]}
            >
              <Text
                onLayout={this.setTitleHeight}
                style={[{ flex: 1 }, styles.h4]}
              >
                {this.state.title}
              </Text>
              <Animated.Image
                style={{
                  transform: [{ rotate: rotation }],
                  height: this.state.titleHeight,
                  width: this.state.titleHeight,
                }}
                tintColor={COLOR_ACCENT}
                source={this.iconImage}
              />
            </View>
          </Touchable>
          <ScrollView style={[{
              height: this.state.expandHeight,
            }, containerStyles.default]}
          >
            <View style={containerStyles.ps}>
              {this.props.children}
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}

export default SlidingPanel;
