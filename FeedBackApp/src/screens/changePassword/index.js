import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  CustomButtonComponent,
  CustomHeader,
  CustomTextInput,
} from '../../components';
import { useState,useEffect } from 'react';
import { ImagePath } from '../../assets/images';
import { Route } from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'


const ChangePassword = props => {

  const [newPassword, setNewPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const [email, setEmail]=useState("");

  const navigation =useNavigation();

  useEffect(()=>{
    setEmail(props.route?.params?.businessEmail);
  },[])
  const onChange = async() => {
    
    let body = {
      businessEmail: email,
      newPassword:newPassword,
      confirmPassword:confirmPassword,
    };
    await axios.patch('http://34.212.54.70:3000/api/businesses/change-password', body)
    .then(res => {
      console.log('otpres777777777===>', res);
      if (res?.status) {
        alert('Password Reset Successfully done !');
        navigation.navigate(Route.Login);
      } else {
        alert('Failed to Reset Password !');

      }}).catch(err => {console.log('err===>', err);
    });
  }


  return (
    <CustomHeader>
      <KeyboardAvoidingView>
        <View style={styles.mainView}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-left" size={25} color="#000" />
          </TouchableOpacity>
          <View style={styles.forgotView}>
            <Text style={styles.textStyle}>Create New Password</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>
              We've sent the code to the email on your device
            </Text>
          </View>

          <CustomTextInput keyboardType={'default'} label={'Old Password'} />
          <CustomTextInput keyboardType={'default'} label={'New Password'} />
          <CustomTextInput keyboardType={'default'} label={'Confirm Password'} />

          <CustomButtonComponent label={'CHANGE PASSWORD'}
            onPress={() => onChange()}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomHeader>
  );
};

export default ChangePassword;
