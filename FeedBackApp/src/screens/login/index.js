import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import commonFunction from '../../components/CommonFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import axios from 'axios';
import {CustomTextInput, CustomButtonComponent} from '../../components';
import {Route} from '../../navigation/route';
import {formToJSON} from 'axios';
import {COLOR} from '../../utils/color/color';
import {StatusBar} from 'react-native';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const LoginCredentials = {
  //   businessEmail: email,
  //   password: password,
  // };

  const onLogin = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.+com)+$/;
        if (!email || !password) {
          setLoading(false);
          alert('please enter details');
        } else if (reg.test(email) === false) {
          setLoading(false);
          alert('Email is Not Correct');
        } else {
          setLoading(false);
          let LoginCredentials = {businessEmail: email, password: password};

          const response = await commonFunction({
            data: LoginCredentials,
            endpoint: '/businesses/login',
            method: 'POST',
          });
          console.log('response :>> ', response.data);
          if (
            response.data.isActive == true &&
            response.data.isEmailVerfified == true
          ) {
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
            props.navigation.replace('BottomTab');
            setLoading(false);
          } else if (response.data.isActive == false) {
            alert('this bussinees is blocked by admin');
            setLoading(false);
          } else if (response.data.isEmailVerfified == false) {
            alert('this bussinees is not verfied');
            props.navigation.navigate('Otp', {
              businessEmail: email,
              screen: 'signup',
            });
            setLoading(false);
          } else {
          }
        }
      } catch (error) {
        Alert.alert(error.response.data.message);
        setLoading(false);
        // console.log('username or password wrong', error);
        // setLoading(false);
      }
    }, 3000);
    // setLoading(false);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar
        backgroundColor={COLOR.COMMONCOLOR}
        barStyle={'light-content'}
      />
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.imageView}>
              <Image source={ImagePath.LOGINLOGO} />
            </View>
            <Text style={styles.heading}>LOGIN</Text>
            <CustomTextInput
              value={email}
              secureTextEntry={false}
              onChangeText={txt => {
                setEmail(txt);
              }}
              label={'Email'}
              keyboardType={'email-address'}
            />
            <CustomTextInput
              keyboardType={'default'}
              secureTextEntry={true}
              value={password}
              label={'Password'}
              onChangeText={txt => {
                setPassword(txt);
              }}
            />

            <CustomButtonComponent
              onPress={() => {
                onLogin();
              }}
              label={'SIGN IN'}
              loading={loading}
            />

            <View style={styles.routeLinks}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.routeLinksText}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(Route.Forgot);
                }}>
                <Text style={styles.routeLinksText}> Forget Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
