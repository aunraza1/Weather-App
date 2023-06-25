import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 5,
    backgroundColor: colors.primary,
  },
});
export default styles;
