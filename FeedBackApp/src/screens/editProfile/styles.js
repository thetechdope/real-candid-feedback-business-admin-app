import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
import {ROBOTO_MEDIUM} from '../../assets/fonts';

export default StyleSheet.create({
  SafeAreaView: {
    backgroundColor: COLOR.SAFEAREAVIEW,
  },
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
    // justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // backgroundColor:'red'
  },
  // heading: {
  //   fontSize: 24,
  //   fontFamily: 'Roboto-Medium',
  //   lineHeight: 29,
  //   textAlign: 'center',
  //   height: height * 0.1,
  //   marginTop:40,
  //   // justifyContent:'center'
  // },
  // imageView: {
  //   width: width * 1,
  //   alignItems: 'center',
  //   marginTop: 35
  // },
  profileVw: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    borderRadius: 100 / 2,
    // marginTop:45,
  },
  camera: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    alignSelf: 'center',
    marginTop: -35,
    alignSelf: 'flex-end',
  },
  prVw: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    borderRadius: 60,
    marginTop: 45,
    // backgroundColor:'red'
  },
  forgotView: {
    // height: 40,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: ROBOTO_MEDIUM,
    lineHeight: 29,
    color: COLOR.TEXTBLACK,
  },
});
