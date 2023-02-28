import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {CustomButtonComponent, CustomHeader} from '../../components';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOR} from '../../utils/color/color';
import commonFunction from '../../components/CommonFunction';
const Setting = props => {
  const [user, setUser] = useState('');
  const onSignOut = async () => {
    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        if (Platform.OS === 'android') {
          await AsyncStorage.clear();
          console.log('async items cleared android');
          props.navigation.navigate('Login');
        }
        if (Platform.OS === 'ios') {
          await AsyncStorage.multiRemove(asyncStorageKeys);
          console.log('async items cleared from ios');
          props.navigation.navigate('Login');
        }
      }
    } catch (error) {
      console.log('Error while sign out', error);
    }
  };
  const onDelete = async () => {
    const response = await commonFunction({
      // data: LoginCredentials,
      endpoint: `/businesses/delete/${user?.businessEmail}`,
      method: 'DELETE',
    })
      .then(async res => {
        console.log(res);
        try {
          const asyncStorageKeys = await AsyncStorage.getAllKeys();
          if (asyncStorageKeys.length > 0) {
            if (Platform.OS === 'android') {
              await AsyncStorage.clear();
              console.log('async items cleared android');
              props.navigation.replace('Login');
            }
            if (Platform.OS === 'ios') {
              await AsyncStorage.multiRemove(asyncStorageKeys);
              console.log('async items cleared from ios');
              props.navigation.replace('Login');
            }
          }
        } catch (error) {
          console.log('Error while sign out', error);
        }
      })
      .catch(eror => {
        console.log(eror);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  async function getUser(params) {
    const AsyncUser = await AsyncStorage.getItem('user');
    // setUser();
    let parsedUser = JSON.parse(AsyncUser);
    setUser(parsedUser);
    console.log('user from setting screen ', user);
  }
  return (
    <CustomHeader>
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-left" size={25} color="#000" />
          </TouchableOpacity>

          <View style={styles.forgotView}>
            <Text style={styles.textStyle}>Setting</Text>
          </View>
          <Image source={ImagePath.BLACKBELL} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 35,
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Image
            style={{width: 70, height: 70, marginRight: 15}}
            source={ImagePath.ELLIPSE}
          />
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 18, color: COLOR.TEXTBLACK}}>
              {user?.businessName}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={ImagePath.LOCATION} />
              <Text style={{color: 'grey'}}>Jakarta, Indonesia</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EditProfile')}>
            <Image source={ImagePath.UPDATE} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChangePassword')}
          style={{
            flexDirection: 'row',
            borderWidth: 0.3,
            borderColor: 'grey',
            marginTop: '15%',
            height: '10%',
            alignItems: 'center',
          }}>
          <Image source={ImagePath.LOCK} style={{margin: 10}} />
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              // fontWeight: 'bold'
            }}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete()}
          style={{
            flexDirection: 'row',
            // borderWidth: 0.3,
            borderColor: 'grey',
            // marginTop: 20,
            height: '10%',
            alignItems: 'center',
          }}>
          <Image source={ImagePath.DELETE} style={{margin: 10}} />
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              // fontWeight: 'bold'
            }}>
            Delete Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSignOut()}
          style={{
            flexDirection: 'row',
            borderWidth: 0.3,
            borderColor: 'grey',
            // marginTop: 20,
            height: '10%',
            alignItems: 'center',
          }}>
          <Image source={ImagePath.LOGOUT} style={{margin: 10}} />
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              // fontWeight: 'bold'
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </CustomHeader>
  );
};

export default Setting;
