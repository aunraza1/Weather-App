import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: vh * 2,
    flexDirection: 'row',
  },
  backArrowContainer: {
    width: '20%',
  },
  backArrow: {
    tintColor: colors.white,
    width: '80%',
    height: vh * 3,
    resizeMode: 'contain',
  },
  title: {
    fontSize:vh*2.5,
    marginLeft: vw * 15,
  },
});
export default styles;
