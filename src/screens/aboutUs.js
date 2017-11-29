import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import {Link} from '../components/link';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us'
  };

  render() {
    const {dispatch} = this.props.navigation;
    const {getActionForPathAndParams} = this.props.screenProps.router;
    
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
        <Link to="device/some-other-device" {...this.props}>
          <Text>Some Other Device</Text>
        </Link>
        <Button
          onPress={() => {
            let action = getActionForPathAndParams('device/some-other-device');
            dispatch(action);
          }}
          title="Go to Device"/>
      </View>
    );
  }
}

export {AboutUs}; 