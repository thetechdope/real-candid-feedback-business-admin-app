import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
import {ROBOTO_REGULAR} from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    height: height * 0.08,
    // height: 27,
    // backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '(rgba(000, 000, 000,0.1)',
    marginBottom: 10,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 7,
    paddingHorizontal: 20,
  },
  textInputStyle: {
    color: 'black',
    // width: '100%',
    height: height * 0.048,
    // backgroundColor: 'red',

    fontSize: 16,
    lineHeight: 19,
    fontFamily: ROBOTO_REGULAR,
  },
  label: {
    color: '#969AA8',
    fontSize: 12,
    fontFamily: ROBOTO_REGULAR,
    lineHeight: 14,
    // paddingHorizontal: 20,
    // textAlign: 'left',
  },
  labelContainer: {
    // backgroundColor: 'red',
    height: height * 0.025,
    justifyContent: 'flex-end',
  },
});
