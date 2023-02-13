import {StyleSheet} from 'react-native';
import {ROBOTO_REGULAR} from '../../assets/fonts';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 30,
    width: 100,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 11.7,
    height: 14,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 13,
    color: 'black',
    lineHeight: 20,
    fontFamily: ROBOTO_REGULAR,
  },
  selectedTextStyle: {
    fontSize: 13,
    color: '#575C71',
    lineHeight: 20,
    fontFamily: ROBOTO_REGULAR,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  linearGradient: {
    height: height * 0.12,
    width: width * 0.95,
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    // alignItems: 'center',
    // borderRadius: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  touchableView: {
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.TEXTWHITE,
    // fontWeight: 30,
    fontFamily: ROBOTO_REGULAR,
    lineHeight: 24,
    fontSize: 16,
  },
});
