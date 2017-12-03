import { StyleSheet } from 'react-native';
import {
  COLOR_SECONDARY,
  PADDING_DEFAULT,
  ELEVATION_DEFAULT,
  MARGIN_DEFAULT,
  BORDER_RADIUS,
} from './../styles/common';


const styles = StyleSheet.create({
  ms: {
    margin: MARGIN_DEFAULT,
  },
  mm: {
    margin: MARGIN_DEFAULT * 2,
  },
  ps: {
    padding: PADDING_DEFAULT,
  },
  es: {
    elevation: ELEVATION_DEFAULT,
  },
  brs: {
    borderRadius: BORDER_RADIUS,
  },
  default: {
    backgroundColor: COLOR_SECONDARY,
  },
});

export default styles;
