import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles';
import { CustomButtonComponent, CustomHeader } from '../../components';
import { useNavigation } from '@react-navigation/native'
import { ImagePath } from '../../assets/images';
import { Route } from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPTextView from 'react-native-otp-textinput';
import axios from 'axios';
const Otp = ({route:{params}},props) => {
  console.log('props====><',params)
  const screenName=params?.screen
  console.log("screenName",screenName)

  
  const [email,setEmail]=useState()
  const [otp,setOtp]=useState()

  const navigation= useNavigation();

  // const otpCredential = {
  //   businessEmail: businessEmail,
  //   // otp: otp,

  // };

  useEffect(()=>{
    setEmail(params?.businessEmail)
  },[email])

  const SubmitOtp = () => {
    let body = {
      businessEmail: email,
      otp: otp
    }

    axios.patch("http://34.212.54.70:3000/api/businesses/verify-email", body)
      .then((res) => {
        if (res.data.status == true) {
          // alert('OTP Verified Successfully')
          {
            screenName=='forgot'?
          navigation.navigate(Route.ResetPassword)
          :
          navigation.navigate(Route.Login)


          }
          // navigation.navigate(Route.Login)

        } else {
          alert('Incorrect Password')
        }

      }).catch(err => {
        console.log('err===>', err)
      })
  }
  return (
    <CustomHeader>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={25} color="#000" />
        </TouchableOpacity>
        <View style={styles.imageView}>
          <Image source={ImagePath.ILLUSTRATION} />
        </View>
        <View style={styles.forgotView}>
          <Text style={styles.textStyle}>OTP Verfication</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Enter the OTP sent to your email.
          </Text>
        </View>
        <OTPTextView 
        handleTextChange={txt=>setOtp(txt)}
        />
        {/* <CustomTextInput keyboardType={'email-address'} label={'Email'} /> */}
        <View style={styles.descriptionView}>
          <Text style={styles.remember}>
            Don't receive the OTP?
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace(Route.Login);
              }}>
              <Text style={styles.loginText}> RESEND OTP</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <CustomButtonComponent label={'SUBMIT'}
          onPress={() => SubmitOtp()} />
      </View>
    </CustomHeader>
  );
};

export default Otp;
