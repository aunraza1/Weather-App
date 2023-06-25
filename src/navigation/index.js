import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectCity from '../screens/SelectCity';
import WeatherDetails from '../screens/WeatherDetails';

const MainNavigation = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SelectCity">
      <MainStack.Screen component={SelectCity} name="SelectCity" />
      <MainStack.Screen component={WeatherDetails} name="WeatherDetails" />
    </MainStack.Navigator>
  );
};
export default MainNavigation;
