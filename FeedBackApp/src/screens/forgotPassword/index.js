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
import {useState} from 'react';

import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import commonFunction from '../../components/CommonFunction';
import {useNavigation} from '@react-navigation/native';

// import { set } from 'react-native-reanimated';
const ForgotPassword = props => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  // const EmailCredentials = {
  //   businessEmail: setEmail,
  // };

  const onSend = async () => {
    console.log('"ygfwygyfwfbhfhjbhaefbhdhbsjbvsv', email);
    // setLoading(true);

    // try {
    const response = await commonFunction({
      endpoint: `/businesses/forgot-password/${email}`,
      method: 'GET',
    });
    console.log('response===>', response);
    if (response.data) {
      console.log(email, 'email----------');
      props.navigation.navigate(Route.Otp, {
        screen: 'forgotPassword',
        businessEmail: email,
      });
      // setLoading(false);
    }
    // } catch (error) {
    //   setLoading(false);
    //   console.log('error :>> ', error);
    // }
  };

  return (
    <CustomHeader>
      <KeyboardAwareScrollView>
        <View style={styles.mainView}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-left" size={25} color="#000" />
          </TouchableOpacity>
          <View style={styles.imageView}>
            <Image source={ImagePath.FORGOT_PASSWORD} />
          </View>
          <View style={styles.forgotView}>
            <Text style={styles.textStyle}>Forgot Your Password</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>
              Enter your registered email OR Phone below to receive password
              reset instruction
            </Text>
          </View>

          <CustomTextInput
            keyboardType={'email-address'}
            label={'Email'}
            onChangeText={txt => {
              setEmail(txt);
            }}
          />

          <View style={styles.descriptionView}>
            <Text style={styles.remember}>
              Remember Password ?
              <TouchableOpacity
                onPress={() => {
                  props.navigation.replace(Route.Login);
                }}>
                <Text style={styles.loginText}> Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <CustomButtonComponent
            // onPress={()=>{
            //   props.navigation.navigate('Otp',{screen:"forgot"})
            // }}
            onPress={() => {
              onSend();
              // loading={loading}
            }}
            label={'SEND'}
          />
        </View>
      </KeyboardAwareScrollView>
    </CustomHeader>
  );
};

export default ForgotPassword;
