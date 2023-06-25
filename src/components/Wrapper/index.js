import React from 'react';
import {View} from 'react-native';
import styles from './styles';
const Wrapper = ({containerStyle, children}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};
export default Wrapper;
