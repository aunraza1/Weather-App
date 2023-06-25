import React, {useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation';
import useWeatherViewModal from './src/view-models/useWeatherViewModal';
const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
export default App;
