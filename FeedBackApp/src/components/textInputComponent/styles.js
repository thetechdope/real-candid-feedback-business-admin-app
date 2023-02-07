import {StyleSheet} from 'react-native';
import {height} from '../../utils/dimensions/dimensions';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
  },
  textInputStyle: {
    color: 'black',
    borderWidth: 1,
    borderColor: '(rgba(000, 000, 000,0.1)',
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 7,
  },
});
