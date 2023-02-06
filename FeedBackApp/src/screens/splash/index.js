import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';

const Splash = () => {
  return (
    <View>
      <Image source={ImagePath.LOGO} />
    </View>
  );
};

export default Splash;
