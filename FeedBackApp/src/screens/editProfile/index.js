import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {ImagePath} from '../../assets/images';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import InputBox from '../../components/inputBox';
import CustomTextInput from '../../components/textInputComponent';
import {CustomButtonComponent} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonFunction from '../../components/CommonFunction';

const EditProfile = props => {
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState();
  const [businessName, setBusinessName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState();
  const [previousPhoto, setPreviousPhoto] = useState('');
  const [userData, setUserData] = useState('');
  const responseData = item => {
    // console.log('item', item);
    setBusinessName(item.businessName);
    setEmail(item.businessEmail);
    setPhone(item.businessPhoneNumber);
    setAddress(item.businessAddress);
    setPreviousPhoto(item?.businessImage);
  };

  async function getUser(params) {
    await AsyncStorage.getItem('user').then(res => {
      setData(res), console.log('response======', JSON.parse(res));
      let d1 = JSON.parse(res);
      responseData(d1);
    }); //  let user1 = JSON.parse(userData)
  }
  const _retrieveData = async () => {
    await AsyncStorage.getItem('user').then(res => {
      // console.log(JSON.parse(res));
      setUserData(JSON.parse(res));
      responseData(JSON.parse(res));
    });
  };

  const editCredentials = {
    businessName: businessName,
    businessAddress: address,
    businessPhoneNumber: phone,
    businessEmail: email,
    avatar: photo,
  };
  const formData = new FormData();
  formData.append('avatar', {
    uri: photo,
    type: 'image/jpg',
    name: 'abc.jpg',
  });
  formData.append('businessName', businessName);
  formData.append('businessEmail', email);
  formData.append('businessPhoneNumber', phone);
  formData.append('businessAddress', address);

  const onEdit = async () => {
    setLoading(true);

    try {
      const response = await commonFunction({
        data: formData,
        endpoint: '/businesses/update-business',
        method: 'PATCH',
      });
      // _storeData(response);
      console.log('resUSer====<>< before', response.data);
      // console.log('email', response.data.businessEmail);
      if (response?.data?.data) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        responseData(response.data.data);
        props.navigation.navigate('Setting');
        // console.log('resUSer====<>< after', response.data.data);
        _retrieveData();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log('error :>> ', error);
    }
    setLoading(false);
  };

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    console.log('result', result.assets);
    setPhoto(result?.assets[0]?.uri);
  };
  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(res => {
  //     setData(res), console.log('response======', JSON.parse(res));
  //     let d1 = JSON.parse(res);
  //     responseData(d1);
  //   }); //  let user1 = JSON.parse(userData)
  // }, []);
  useEffect(() => {
    // getUser();
    _retrieveData();
  }, []);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                marginLeft: 20,
                marginTop: 25,
              }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <Icon name="arrow-left" size={25} color="#000" />
              </TouchableOpacity>

              <View>
                <Text style={styles.textStyle}>Edit Profile</Text>
              </View>
              <Image source={ImagePath.BLACKBELL} />
            </View>
            <View style={styles.prVw}>
              {photo ? (
                <Image style={styles.profileVw} source={{uri: photo}} />
              ) : previousPhoto ? (
                <View style={styles.profileVw}>
                  <Image
                    source={{uri: previousPhoto}}
                    style={{height: 120, width: 120, borderRadius: 100 / 2}}
                  />
                </View>
              ) : (
                <Image style={styles.profileVw} source={ImagePath.DUMMY} />
              )}
              <TouchableOpacity
                style={styles.camera}
                onPress={() => {
                  openCamera();
                }}>
                <Image source={ImagePath.CAMERA} />
              </TouchableOpacity>
            </View>
            {/* <Text style={[styles.heading]}>Edit Profile</Text> */}
            <View style={{marginTop: 24}}>
              <CustomTextInput
                value={businessName}
                secureTextEntry={false}
                onChangeText={txt => setBusinessName(txt)}
                label={'Business Name'}
                keyboardType={'default'}
              />

              <CustomTextInput
                value={email}
                secureTextEntry={false}
                onChangeText={txt => setEmail(txt)}
                label={'Email'}
                keyboardType={'default'}
              />
              <CustomTextInput
                value={phone}
                secureTextEntry={false}
                onChangeText={txt => setPhone(txt)}
                label={'Phone No.'}
                keyboardType={'default'}
              />
              <CustomTextInput
                value={address}
                secureTextEntry={false}
                onChangeText={txt => setAddress(txt)}
                label={'Address'}
                keyboardType={'default'}
              />
            </View>
            <CustomButtonComponent
              label={'UPDATE'}
              onPress={() => onEdit()}
              loading={loading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
