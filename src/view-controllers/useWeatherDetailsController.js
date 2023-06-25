import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import useWeatherViewModal from '../view-models/useWeatherViewModal';

const useWeatherDetailController = city => {
  const navigation = useNavigation();
  const {fetchWeatherData} = useWeatherViewModal();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetchWeatherData(city);
      setDetails(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('E', e);
    }
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };
  useFocusEffect(
    useCallback(() => {
      if (city) {
        loadData();
      }
    }, []),
  );

  return {
    loading,
    details,
    onPressGoBack,
  };
};
export default useWeatherDetailController;
