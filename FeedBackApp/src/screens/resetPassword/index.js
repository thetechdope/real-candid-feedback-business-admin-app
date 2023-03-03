import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  CustomButtonComponent,
  CustomHeader,
  CustomTextInput,
} from '../../components';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    setEmail(props.route?.params?.businessEmail);
  }, []);
  const onReset = async () => {

    let body = {
      businessEmail: email,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    await axios
      .patch('http://34.212.54.70:3000/api/businesses/reset-password', body)
      .then(res => {
        // console.log('otp===>', res);
        if (res?.status) {
          alert('Password Reset Successfully done !');
          navigation.navigate(Route.Login);
        } else {
          alert('Failed to Reset Password !');
        }
      })
      .catch(err => {
        console.log('err===>', err);
      });
  };
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>

          <CustomTextInput
            keyboardType={'default'}
            label={'New Password'}
            secureTextEntry={true}
            onChangeText={txt => setNewPassword(txt)}
          />
          <CustomTextInput
            keyboardType={'default'}
            label={'Confirm Password'}
            secureTextEntry={true}
            onChangeText={txt => setConfirmPassword(txt)}
          />
          <CustomButtonComponent
            label={'RESET PASSWORD'}
            // onPress={() => {
            //   props.navigation.navigate('Login')
            // }}
            onPress={() => {
              onReset();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomHeader>
  );
};

export default ResetPassword;
