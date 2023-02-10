import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
export default StyleSheet.create({
  flatListContainer: {
    height: height * 0.9,
    width: width * 1,
    // backgroundColor: 'red',
    shadowColor: '#EBE7FD',
    shadowOpacity: 1,
    elevation: 12,

    shadowOffset: {width: 2, height: 10},
    justifyContent: 'center',

    // borderWidth: 5,
  },
});
