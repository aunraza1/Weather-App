import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../utils/theme';
import styles from './styles';

const Loader = ({size, color, style}) => {
  return (
    <ActivityIndicator
      style={[styles.container, style]}
      color={color ? color : colors.white}
      size={size ? size : 'large'}
    />
  );
};
export default Loader;
