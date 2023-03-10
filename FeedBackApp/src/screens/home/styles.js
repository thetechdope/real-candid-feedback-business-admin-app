import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
export default StyleSheet.create({
  mainContainer: {
    height: height * 0.2,
    width: width * 1,
    backgroundColor: COLOR.BACKGROUND,
    // justifyContent: 'center',

    alignItems: 'flex-end',
  },
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
  },
  SafeAreaView: {
    backgroundColor: COLOR.SAFEAREAVIEW,
  },
  title: {
    width: width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  titleText: {
    fontSize: 24,
    lineHeight: 29,
    color: '#FFFFFF',
    fontFamily: ROBOTO_MEDIUM,
  },
  meter: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowColor: '#EBE7FD',
    shadowOpacity: 1,
    elevation: 12,
    borderColor: '#EBE7FD',
    borderWidth: 1,

    shadowOffset: {width: 2, height: 10},
    width: '90%',
    height: height * 0.2,
    bottom: 50,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  barView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowColor: '#EBE7FD',
    shadowOpacity: 1,
    elevation: 12,
    borderColor: '#EBE7FD',
    borderWidth: 1,

    shadowOffset: {width: 2, height: 10},

    // overflow: 'visible',

    width: width * 0.7,
    height: height * 0.22,
    // top: 140,
    // marginTop: 0,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  Recent: {
    height: height * 0.08,
    width: width * 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    padding: 10,
  },
  RecentText: {
    color: COLOR.TEXTBLACK,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: ROBOTO_MEDIUM,
  },
});
