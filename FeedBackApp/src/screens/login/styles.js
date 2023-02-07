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
  },
  SafeAreaView: {
    backgroundColor: COLOR.SAFEAREAVIEW,
  },
  imageView: {
    height: height * 0.15,
    width: width * 1,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  routeLinks: {
    justifyContent: 'space-between',
    width: width * 0.9,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  routeLinksText: {
    color: COLOR.COMMONCOLOR,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    lineHeight: 29,
    textAlign: 'center',
    height: height * 0.1,
  },
});
