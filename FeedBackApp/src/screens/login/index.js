import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomTextInput, CustomButtonComponent} from '../../components';
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <CustomTextInput label={'Email'} />
      <CustomTextInput label={'Password'} />
      <CustomButtonComponent />
    </View>
  );
};

export default Login;
