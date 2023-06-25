import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const RegularText = ({text, style, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : 1}
      allowFontScaling={false}
      style={[styles.text, style]}>
      {text}
    </Text>
  );
};
export default RegularText;
