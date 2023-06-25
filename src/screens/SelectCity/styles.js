import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: vh * 3,
    paddingHorizontal: vw * 5,
  },
  heading: {
    alignSelf: 'center',
    fontSize: vh * 2.5,
  },
  subHeading: {
    marginTop: vh,
  },
});
export default styles;
