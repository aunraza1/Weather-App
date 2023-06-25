import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {icons} from '../../assets';
import BoldText from '../BoldText';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.backArrowContainer}>
        <Image style={styles.backArrow} source={icons.backArrow} />
      </TouchableOpacity>
      <BoldText style={styles.title} text={title?.toUpperCase()} />
    </View>
  );
};
export default Header;
