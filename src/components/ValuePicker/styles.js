import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vh * 6,
    padding: vh * 0.5,
    borderRadius: vw * 6,
    backgroundColor: colors.navyBlue,
    flexDirection: 'row',
    marginTop: vh * 2,
  },

  leftView: {
    paddingLeft: vw * 4,
    justifyContent: 'center',
    width: '80%',
    height: '100%',
  },
  iconView: {
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  dropdown: {
    tintColor: colors.white,
    width: '60%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default styles;
