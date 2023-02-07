import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace(Route.Login);
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={ImagePath.LOGO} />
    </View>
  );
};

export default Splash;
