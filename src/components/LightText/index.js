import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const LightText = ({text, style, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[styles.text, style]}>
      {text}
    </Text>
  );
};
export default LightText;
