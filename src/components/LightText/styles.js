import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh} from '../../utils/units';

const styles = StyleSheet.create({
  text: {
    alignSelf:'flex-start',
    fontFamily: 'Montserrat-Light',
    fontSize: vh * 1.5,
    color: colors.white,
  },
});
export default styles;
