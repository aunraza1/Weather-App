import React from 'react';
import {
  BoldText,
  Header,
  LightText,
  Loader,
  RegularText,
  Wrapper,
} from '../../components';
import useWeatherDetailController from '../../view-controllers/useWeatherDetailsController';
import {ScrollView, View, Image} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {icons} from '../../assets';
import {weatherIcons} from '../../config';

const WeatherDetails = ({route}) => {
  const city = route?.params?.city;
  const {details, loading, onPressGoBack} = useWeatherDetailController(city);

  const extraDetails = [
    {
      id: 1,
      name: 'Humidity',
      value: details?.main?.humidity + '%',
      icon: icons.humidity,
    },
    {
      id: 2,
      name: 'Feels Like',
      value: Math.ceil(details?.main?.feels_like) + '°C',
      icon: icons.temprature,
    },
    {
      id: 3,
      name: 'Wind Speed',
      value: details?.wind?.speed + 'm/s',
      icon: icons.wind,
    },
  ];
  return (
    <Wrapper>
      <Header onPress={onPressGoBack} title={city} />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.centeredView}>
            <View style={styles.row}>
              <View style={styles.bullet} />
              <LightText
                style={styles.marginLeft}
                text={`Today  ${moment(new Date()).format('hh:mm')}`}
              />
            </View>
            <Image
              style={styles.icon}
              source={
                weatherIcons[details?.weather[0]?.main]
                  ? weatherIcons[details?.weather[0]?.main]
                  : icons.clouds
              }
            />
            <BoldText
              style={styles.temprature}
              text={`${Math.ceil(details?.main?.temp)} °C`}
            />
            <View style={styles.descriptionView}>
              <RegularText text={details?.weather[0]?.description} />
            </View>
            <View style={[styles.row, {width: '100%'}]}>
              {extraDetails?.map((v, i) => (
                <View key={i} style={styles.boxView}>
                  <Image style={styles.boxImage} source={v?.icon} />
                  <BoldText style={styles.value} text={v?.value} />
                  <RegularText style={styles.value} text={v?.name} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </Wrapper>
  );
};
export default WeatherDetails;
