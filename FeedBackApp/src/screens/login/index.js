import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';

import {CustomTextInput, CustomButtonComponent} from '../../components';
const Login = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={ImagePath.LOGINLOGO} />
          </View>
          <Text style={styles.heading}>LOGIN</Text>
          <CustomTextInput label={'Email'} />
          <CustomTextInput label={'Password'} />
          <CustomButtonComponent label={'SIGN IN'} />
          <View style={styles.routeLinks}>
            <TouchableOpacity>
              <Text style={styles.routeLinksText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.routeLinksText}> Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
