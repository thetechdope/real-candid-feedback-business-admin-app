import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
export default StyleSheet.create({
  mainContainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: COLOR.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: height * 0.94,
    width: width * 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // borderWidth: 5,
  },
  SafeAreaView: {
    backgroundColor: COLOR.SAFEAREAVIEW,
  },
});
