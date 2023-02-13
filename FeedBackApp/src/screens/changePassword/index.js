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
const ChangePassword = props => {
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
            onPress={() => {
              props.navigation.goBack()
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomHeader>
  );
};

export default ChangePassword;
