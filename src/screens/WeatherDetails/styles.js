import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: vh * 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bullet: {
    backgroundColor: colors.orange,
    borderRadius: (vw * 2) / 2,
    width: vw * 2,
    height: vw * 2,
  },
  marginLeft: {
    marginLeft: vw * 2,
  },
  icon: {
    tintColor: colors.white,
    width: vw * 30,
    height: vh * 15,
  },
  temprature: {
    fontSize: vh * 3,
    alignSelf: 'center',
  },
  descriptionView: {
    marginTop: vh * 2,
    backgroundColor: colors.navyBlue,
    borderRadius: vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh,
    paddingHorizontal: vw * 3,
    maxWidth: vw * 37,
  },
  boxView: {
    marginTop: vh * 2,

    width: '32%',
    marginRight: '1%',
  },
  boxImage: {
    tintColor: colors.white,
    resizeMode: 'contain',
    width: '100%',
    height: vh * 4,
  },
  value: {
    marginTop: vh,
    alignSelf: 'center',
  },
});
export default styles;
