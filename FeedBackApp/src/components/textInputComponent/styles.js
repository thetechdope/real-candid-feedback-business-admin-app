import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    height: height * 0.07,
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
    width: '100%',
    height: 30,
    backgroundColor: 'white',
  },
  label: {
    color: COLOR.TEXTBLACK,
    // paddingHorizontal: 20,
    // textAlign: 'left',
  },
});
