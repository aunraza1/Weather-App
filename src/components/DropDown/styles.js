import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.black + '77',
  },
  subView: {
    padding: vh * 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: vw * 4,
    borderTopRightRadius: vw * 4,
    maxHeight: vh * 40,
    width: '100%',
  },
  itemText: {
    marginTop: vh * 2,
    fontSize: vh * 2,
    color: colors.black,
  },
  row: {
    marginTop: vh,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeView: {
    height: vw * 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 7,
    backgroundColor: colors.primary,
    borderRadius: (vw * 7) / 2,
  },
  heading: {
    fontSize: vh * 2.4,
    color: colors.black,
  },
  closeIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});
export default styles;
