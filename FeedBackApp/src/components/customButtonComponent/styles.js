import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';

export default StyleSheet.create({
  linearGradient: {
    height: height * 0.07,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  touchableView: {
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.TEXTWHITE,
    // fontWeight: 30,
    fontFamily: 'ROBOTO-REGULAR',
    lineHeight: 24,
    fontSize: 16,
  },
});
