import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { ImagePath } from '../../assets/images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import InputBox from '../../components/inputBox';
import { CustomButtonComponent } from '../../components';
const Signup = (props) => {

  const [photo, setPhoto] = useState()

  const openCamera = async () => {
    const options = {
      mediaType: "photo"
    }
    const result = await launchImageLibrary(options);
    console.log('result', result.assets[0].uri)
    setPhoto(result.assets[0].uri)
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={ImagePath.LOGINLOGO} />
          </View>

          <View style={styles.prVw}>
            {photo ?
              <Image style={styles.profileVw} source={{ uri: photo }} /> :
              <View style={styles.profileVw}>
                <Image source={ImagePath.ELLIPSE} />
              </View>
            }
            <TouchableOpacity style={styles.camera} onPress={() => {
              openCamera()
            }}>
              <Image source={ImagePath.CAMERA} />
            </TouchableOpacity>

          </View>
          <Text style={[styles.heading]}>Sign Up</Text>
          <View style={{marginTop:-40}}>
          <InputBox
            placeHolder='Bussiness-Name'
            keyboardType='default' />
          <InputBox
            placeHolder='Address'
            keyboardType='default' />
          <InputBox
            placeHolder='Email-Address'
            keyboardType='email-address' />
          <InputBox
            placeHolder='Phone No'
            keyboardType='default' />
          <InputBox
            placeHolder='Website-URL'
            keyboardType='email-address' />
          <InputBox
            placeHolder='Password'
            keyboardType='default' />
            </View>
            <CustomButtonComponent label={'CREATE A ACCOUNT'} 
            onPress={() => props.navigation.navigate('Otp')}/>


        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
