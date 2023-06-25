import React from 'react';
import renderer from 'react-test-renderer';
import SelectCity from '../src/screens/SelectCity';
import WeatherDetails from '../src/screens/WeatherDetails';


jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
    useFocusEffect:jest.fn()
  }));
test('renders correctly', () => {
  const tree = renderer.create(<SelectCity />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders correctly', () => {
  const tree = renderer.create(<WeatherDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});