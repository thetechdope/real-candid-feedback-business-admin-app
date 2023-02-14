import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
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
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const LoginCredentials = {
    businessEmail: email,
    password: password,
  };
  useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    const data = await AsyncStorage.getItem('token');
    console.log('Login Token', data);
  }
  const onLogin = async () => {
    try {
      const response = await commonFunction({
        data: LoginCredentials,
        endpoint: '',
        method: 'GET',
      });
      if (response.data._id) {
        console.log('response :>> ', response.data._id);
        props.navigation.navigate('BottomTab');
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.imageView}>
              <Image source={ImagePath.LOGINLOGO} />
            </View>
            <Text style={styles.heading}>LOGIN</Text>
            <CustomTextInput
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
