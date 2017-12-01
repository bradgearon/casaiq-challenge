import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import * as Animatable from 'react-native-animatable';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    padding: 10,
    fontSize: 22,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

class SlidingPanel extends Component {
  constructor(props) {
    super(props);

    this.iconImage = require('../assets/ic_arrow_drop_down_circle_white_48dp.png');

    this.state = {
      title: this.props.title,
      expanded: false,
    };
  }

  render() {
    return (
      <Animatable.View
        ref={(c) => { this.container = c; }}
        style={[styles.container, { top: 0 }]}
      >
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.state.expanded = !this.state.expanded;

            this.container.transitionTo({
              top: this.state.expanded ? -this.props.height : 0,
            });
            this.icon.transitionTo({
              transform: [{
                rotate: this.state.expanded ? '180deg' : '0deg',
              }],
            });
          }}
          underlayColor="#f1f1f1"
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.title}</Text>
            <Animatable.Image
              style={styles.buttonImage}
              source={this.iconImage}
              ref={(c) => { this.icon = c; }}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.body} onLayout={this.setMaxHeight}>
          {this.props.children}
        </View>

      </Animatable.View>
    );
  }
}

export default SlidingPanel;
