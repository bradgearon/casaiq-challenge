import React from 'react';
import {
  Text as ReactNativeText,
  Button as ReactNativeButton,
} from 'react-native';

import { COLOR_ACCENT } from '../styles/common';
import typeStyles from '../styles/type';

export const Text = ({ style, ...props }) =>
  <ReactNativeText style={[typeStyles.font, style]} {...props} />;

export const Button = ({ style, ...props }) =>
  <ReactNativeButton color={COLOR_ACCENT} style={style} {...props} />;

