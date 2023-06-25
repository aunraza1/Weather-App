import {apiKey} from '../config';

const useWeatherViewModal = () => {
  const fetchWeatherData = async cityName => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`,
        {method: 'GET'},
      );
      const parsed = await res.json();
      if (parsed?.cod == 200) {
        return parsed;
      }
      Promise.reject(parsed?.message);
    } catch (e) {
      throw new Error(e);
    }
  };

  return {fetchWeatherData};
};
export default useWeatherViewModal;
