import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';

const Signup = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#7E50EE'}}>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#7E50EE',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: '100%',
            marginTop: 70,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            width: '100%',
          }}>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
