import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {icons} from '../../assets';
import RegularText from '../RegularText';

const ValuePicker = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftView}>
        <RegularText text={'Select Location'} />
      </View>

      <View style={styles.iconView}>
        <Image style={styles.dropdown} source={icons.dropdown} />
      </View>
    </TouchableOpacity>
  );
};
export default ValuePicker;
