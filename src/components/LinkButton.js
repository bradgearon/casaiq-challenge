import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './common';

class LinkButton extends Component {
  static contextTypes = {
    router: PropTypes.object,
    navigation: PropTypes.object,
  };

  static propTypes = {
    to: PropTypes.string.isRequired,
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
    return <Button {...rest} onPress={this.handlePress} />;
  }
}

export default LinkButton;
