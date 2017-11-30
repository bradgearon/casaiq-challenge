import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class Link extends Component {
  static defaultProps = {
    component: TouchableHighlight,
  };

  static contextTypes = {
    router: PropTypes.object,
    navigation: PropTypes.object,
  };

  handlePress = (event) => {
    if (this.props.onPress) {
      this.props.onPress(event);
    }

    if (!event.defaultPrevented) {
      const { to } = this.props;
      const { router, navigation } = this.context;

      const action = router.getActionForPathAndParams(to);
      navigation.dispatch(action);
    }
  };

  render() {
    const { to, ...rest } = this.props;
    return <Component {...rest} onPress={this.handlePress} />;
  }
}

export { Link };
