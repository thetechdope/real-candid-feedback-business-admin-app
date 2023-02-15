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
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const LoginCredentials = {
    businessEmail: email,
    password: password,
  };

  const onLogin = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await commonFunction({
          data: LoginCredentials,
          endpoint: 'login',
          method: 'POST',
        });
        // console.log('response :>> ', JSON.stringify(response.data));
        if (response.data._id) {
          await AsyncStorage.setItem('token', response.data.token);
          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          props.navigation.replace('BottomTab');
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        alert('error :>> ', error);
        // setLoading(false);
      }
    }, 3000);
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
