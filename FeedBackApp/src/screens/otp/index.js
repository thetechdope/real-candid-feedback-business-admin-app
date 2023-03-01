import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import styles from './styles';
import {CustomButtonComponent, CustomHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPTextView from 'react-native-otp-textinput';
import axios from 'axios';
const Otp = ({route: {params}}, props) => {
  console.log('props====><', params);
  const screenName = params?.screen;
  const emailID = params?.businessEmail;
  console.log('screenName', screenName);

  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();

  const navigation = useNavigation();

  console.log('email-----', emailID);
  const SubmitOtp = () => {
    let body = {
      businessEmail: emailID,
      otp: otp,
    };

    console.log('body;;;;;', body);
    axios
      .patch('http://34.212.54.70:3000/api/businesses/verify-email', body)
      .then(res => {
        console.log('resssss', res?.data?.status);
        alert('OTP Verified Successfully');

        if (screenName === 'signup') {
          navigation.navigate(Route.Login);
        } else if (screenName === 'forgotPassword') {
          // navigation.navigate(Route.Login);
          navigation.navigate(Route.ResetPassword, {businessEmail: emailID});
        }
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };
  const ResendOtp = () => {
    let body = {
      businessEmail: 'Arunk4it@gmail.com',
    };
    const patchConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .get(`http://34.212.54.70:3000/api/businesses/resend-otp/${emailID}`)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log('err==== sending otp================>', err);
      });
  };
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
          <Text style={styles.textStyle}>OTP Verification</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Enter the OTP sent to your email.
          </Text>
        </View>
        <OTPTextView handleTextChange={txt => setOtp(txt)} />
        {/* <CustomTextInput keyboardType={'email-address'} label={'Email'} /> */}
        <View style={styles.descriptionView}>
          <Text style={styles.remember}>
            Don't receive the OTP?
            <TouchableOpacity
              onPress={() => {
                ResendOtp();
              }}>
              <Text style={styles.loginText}> RESEND OTP</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <CustomButtonComponent label={'SUBMIT'} onPress={() => SubmitOtp()} />
      </View>
    </CustomHeader>
  );
};

export default Otp;
