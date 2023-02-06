import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {ImagePath} from '../../assets/images';

const Splash = () => {
  return (
    <View>
      <Image source={ImagePath.LOGO} style={{height: 500, width: '100%'}} />
    </View>
  );
};

export default Splash;
