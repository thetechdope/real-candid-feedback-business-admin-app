import { View, SafeAreaView, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { ImagePath } from '../../assets/images';


const Signup = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={ImagePath.LOGINLOGO} />
          </View>
          <View style={{
            // backgroundColor: 'red',s
            height: 120,
            width: 120,
            alignSelf: 'center',
            borderRadius: 60,
            marginTop: 20,
            // borderColor:'black',
            borderWidth:1
          }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
