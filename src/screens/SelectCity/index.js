import {ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BoldText, RegularText, ValuePicker, Wrapper} from '../../components';
import useSelectCityController from '../../view-controllers/useSelectCityController';
import Dropdown from '../../components/DropDown';
import {cities} from '../../config';

const SelectCity = () => {
  const {showDropDown, handleDropDown, onSelectCity} =
    useSelectCityController();
  return (
    <Wrapper>
      <ScrollView style={styles.container}>
        <BoldText style={styles.heading} text={'Select Location'} />
        <RegularText
          style={styles.subHeading}
          numberOfLines={2}
          text={'Select the city you are looking for knowing the weather'}
        />
        <ValuePicker onPress={() => handleDropDown(false)} />
      </ScrollView>
      <Dropdown
        label={'Cities'}
        items={cities}
        onClose={() => handleDropDown(true)}
        onPressItem={name => {
          onSelectCity(name);
          handleDropDown(true);
        }}
        visible={showDropDown}
      />
    </Wrapper>
  );
};
export default SelectCity;
