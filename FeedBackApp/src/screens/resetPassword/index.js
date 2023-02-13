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
import { ImagePath } from '../../assets/images';
import { Route } from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ResetPassword = props => {
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
            <Text style={styles.textStyle}>Reset Password</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>

          <CustomTextInput keyboardType={'default'} label={'New Password'} />
          <CustomTextInput keyboardType={'default'} label={'Confirm Password'} />
          <CustomButtonComponent label={'RESET PASSWORD'}
            onPress={() => {
              props.navigation.navigate('Login')
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomHeader>
  );
};

export default ResetPassword;
