import React from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import RegularText from '../RegularText';
import BoldText from '../BoldText';
import {icons} from '../../assets';

const Dropdown = ({visible, label, items = [], onPressItem, onClose}) => {
  const renderItems = ({item, index}) => (
    <TouchableOpacity onPress={() => onPressItem(item?.value)} key={index}>
      <RegularText style={styles.itemText} text={item?.label} />
    </TouchableOpacity>
  );
  return (
    <Modal statusBarTranslucent={true} visible={visible} transparent={true}>
        <View style={styles.container}>
          <View style={styles.subView}>
            <View style={styles.row}>
              <BoldText style={styles.heading} text={label} />
              <TouchableOpacity onPress={onClose} style={styles.closeView}>
                <Image style={styles.closeIcon} source={icons.close} />
              </TouchableOpacity>
            </View>
            <FlatList
              renderItem={renderItems}
              data={items}
              key="dropdownItems"
            />
          </View>
        </View>
    </Modal>
  );
};
export default Dropdown;
