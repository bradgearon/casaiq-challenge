import React from 'react';
import {
  Text as ReactNativeText,
} from 'react-native';

import typeStyles from '../styles/type';

export const Text = ({ style, ...props }) =>
  <ReactNativeText style={[typeStyles.font, style]} {...props} />;
