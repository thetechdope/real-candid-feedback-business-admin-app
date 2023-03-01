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
import {useState, useEffect} from 'react';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import commonFunction from '../../components/CommonFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = props => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState();
  const navigation = useNavigation();

  useState(() => {
    AsyncStorage.getItem('token').then(res => setToken(res));
  }, [token]);
  const changePass = () => {
    setLoading(true);
    let data = {
      currentPassword: currentPassword,
      newPassword: newpassword,
      confirmPassword: confirmPassword,
    };
    console.log('token===><', token);
    let config = {headers: {Authorization: `Bearer ${token}`}};

    let response = axios
      .patch(
        'http://34.212.54.70:3000/api/businesses/change-password',
        data,
        config,
      )
      .then(resp => {
        alert('password changed successfully'), setLoading(false);
      })
      .catch(err => {
        console.log('errr=>>', err), setLoading(false);
      });
    return response;
  };

  // let PasswordCredential = {
  //   currentPassword: currentPassword,
  //   newpassword: newpassword,
  //   confirmPassword: confirmPassword,
  // };

  //   const ChangePasswordValue = async   => {
  //     try {
  //     // let parm ={
  //     //   currentPassword: currentPassword,
  //     //   newPassword: newpassword,
  //     //   confirmPassword: confirmPassword
  //     // };
  //       const user =  (await AsyncStorage.getItem('token'));
  //       // console.log(user)
  //       let config = {headers:{Authorization: `Bearer ${user}`}};
  //    let response= await axios.patch('http://34.212.54.70:3000/api/businesses/change-password', config,c\\);
  //    if (response.status == 200){
  //     console.log('response===========',response);
  //     return { status: true, data: response.data};
  //    }else{
  //     return{ status: false};
  //    }
  //    } catch (err) {
  //     console.log(err)
  //     return {status : false};
  //    }
  //   }
  //     .then(res => {
  //       console.log('otpres777777777===>', res);
  //       if (res?.status) {
  //         alert('Password Reset Successfully done !');
  //         navigation.navigate(Route.Login);
  //       } else {
  //         alert('Failed to Reset Password !');

  //       }}).catch(err => {console.log('err===>', err);
  //     });

  // }

  // const onChange = async () => {
  //   setTimeout(async () => {
  //     try {
  //       const response = await commonFunction({
  //         data: PasswordCredential,
  //         endpoint: '/businesses/change-password',
  //         method: 'PATCH',
  //       });
  //       console.log('response :>> ', response.data);
  //       if (response.data._id) {
  //         await AsyncStorage.setItem('token', response.data.token);
  //         await AsyncStorage.setItem('user', JSON.stringify(response.data));
  //         props.navigation.replace('BottomTab');
  //       }
  //     } catch (error) {
  //       console.log('error', error);
  //       // setLoading(false);
  //     }
  //   }, 3000);
  // };

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

          <CustomTextInput
            keyboardType={'default'}
            label={'Old Password'}
            onChangeText={txt => setCurrentPassword(txt)}
          />
          <CustomTextInput
            keyboardType={'default'}
            label={'New Password'}
            onChangeText={txt => setNewPassword(txt)}
          />
          <CustomTextInput
            keyboardType={'default'}
            label={'Confirm Password'}
            onChangeText={txt => setConfirmPassword(txt)}
          />

          <CustomButtonComponent
            loading={loading}
            label={'CHANGE PASSWORD'}
            onPress={() => changePass()}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomHeader>
  );
};

export default ChangePassword;
