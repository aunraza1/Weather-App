import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const BoldText = ({text, style, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[styles.text, style]}>
      {text}
    </Text>
  );
};
export default BoldText;
