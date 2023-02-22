import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomButtonComponent, CustomHeader} from '../../components';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPTextView from 'react-native-otp-textinput';

const Otp = props => {

  const otpCredential = {
    businessEmail: businessEmail,
    // otp: otp,
   
  };

  const SubmitOtp = async() =>{

    const response = await commonFunction({
      data: otpCredential,
      endpoint:'/businesses/verify-email' ,
      method: 'PATCH',
    });
    // console.log('response :>> ', JSON.stringify(response.data));
    if (response.data) {

      props.navigation.navigate('Login');
      // setLoading(false);
    }

  }
  return (
    <CustomHeader>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
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
        <OTPTextView/>
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
         onPress={() => SubmitOtp()}/>
      </View>
    </CustomHeader>
  );
};

export default Otp;
