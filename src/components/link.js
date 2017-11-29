import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';

class Link extends Component {
  static defaultProps = { component: TouchableHighlight };
  handlePress = (event) => {
    if(this.props.onPress) {
      this.props.onPress(event);
    }

    if (!event.defaultPrevented) {
      const {to, navigation} = this.props;
      const {router} = this.props.screenProps;
      
      let action = router.getActionForPathAndParams(to);
      navigation.dispatch(action);
    }
  };

  render() {
    const { component: Component, to, ...rest } = this.props;
    return <Component {...rest} onPress={this.handlePress}/>
  };

}

export {Link};