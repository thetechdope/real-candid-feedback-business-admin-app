import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  const [user, setUser] = useState('');

  useEffect(() => {
    getToken();
  }, []);
  const checkUser = async () => {
    const token = await AsyncStorage.getItem('token'); // setUser(token)
    console
      .log(token, 'line ni 16')
      .then(() => {
        console.log(token, 'line ni 19');
        setTimeout(() => {
          if (token) {
            console.log('token', token);
            props.navigation.replace('BottomTab');
          } else {
            props.navigation.replace(Route.Login);
          }
        }, 5000);
      })
      .catch(error => {
        console.log(error);
      });
    // console.log('Splash Screen', token);
  };
  async function getToken() {
    const token = await AsyncStorage.getItem('token');
    setUser(token);
    setTimeout(() => {
      if (token) {
        console.log('token', token);
        props.navigation.replace('BottomTab');
      } else {
        props.navigation.replace(Route.Login);
      }
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <Image source={ImagePath.LOGO} />
    </View>
  );
};

export default Splash;
