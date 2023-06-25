import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const useSelectCityController = () => {
  const navigation = useNavigation();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = currentState => {
    setShowDropDown(!currentState);
  };
  const onSelectCity = city => {
    navigation.navigate('WeatherDetails', {city});
  };
  return {
    showDropDown,
    handleDropDown,
    onSelectCity,
  };
};
export default useSelectCityController;
