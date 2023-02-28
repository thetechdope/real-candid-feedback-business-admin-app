import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
import React, {useState} from 'react';
// import { useState } from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import InputBox from '../../components/inputBox';
import {CustomButtonComponent} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonFunction from '../../components/CommonFunction';

const Signup = props => {
  const [photo, setPhoto] = useState();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const SignupCredentials = {
    businessName: name,
    businessAddress: address,
    businessPhoneNumber: phone,
    businessEmail: email,
    password: password,
    businessWebsiteUrl: url,
  };

  const onSignup = async () => {
    // setLoading(true);

    // try {
    const response = await commonFunction({
      data: SignupCredentials,
      endpoint: '/businesses/signup',
      method: 'POST',
    });
    // console.log('response :>> ', JSON.stringify(response.data));
    if (response.data) {
      props.navigation.navigate('Otp', {
        businessEmail: email,
        screen: 'signup',
      });
      // setLoading(false);
    }
    // } catch (error) {
    //   setLoading(false);
    //   console.log('error :>> ', error);
    // }
  };

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    console.log('result', result.assets[0].uri);
    setPhoto(result.assets[0].uri);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.imageView}>
              <Image source={ImagePath.LOGINLOGO} />
            </View>

            <View style={styles.prVw}>
              {photo ? (
                <Image style={styles.profileVw} source={{uri: photo}} />
              ) : (
                <View style={styles.profileVw}>
                  <Image source={ImagePath.ELLIPSE} />
                </View>
              )}
              <TouchableOpacity
                style={styles.camera}
                onPress={() => {
                  openCamera();
                }}>
                <Image source={ImagePath.CAMERA} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.heading]}>Sign Up</Text>
            <View style={{marginTop: -40}}>
              <InputBox
                secureTextEntry={false}
                onChangeText={txt => {
                  setName(txt);
                }}
                placeHolder="Bussiness-Name"
                keyboardType="default"
              />
              <InputBox
                secureTextEntry={false}
                onChangeText={txt => {
                  setAddress(txt);
                }}
                placeHolder="Address"
                keyboardType="default"
              />
              <InputBox
                secureTextEntry={false}
                onChangeText={txt => {
                  setEmail(txt);
                }}
                placeHolder="Email-Address"
                keyboardType="email-address"
              />
              <InputBox
                secureTextEntry={false}
                onChangeText={txt => {
                  setPhone(txt);
                }}
                placeHolder="Phone No"
                keyboardType="default"
              />
              <InputBox
                secureTextEntry={false}
                onChangeText={txt => {
                  setUrl(txt);
                }}
                placeHolder="Website-URL"
                keyboardType="email-address"
              />
              <InputBox
                secureTextEntry={true}
                onChangeText={txt => {
                  setPassword(txt);
                }}
                placeHolder="Password"
                keyboardType="default"
              />
            </View>
            <CustomButtonComponent
              label={'CREATE A ACCOUNT'}
              // onPress={() => props.navigation.navigate('Otp')}
              onPress={() => {
                onSignup();
                // loading={loading}
              }}
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
