import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { ImagePath } from '../../assets/images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import InputBox from '../../components/inputBox';
import { CustomButtonComponent } from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const EditProfile = (props) => {

  const [photo, setPhoto] = useState()

  const openCamera = async () => {
    const options = {
      mediaType: "photo"
    }
    const result = await launchImageLibrary(options);
    console.log('result', result.assets[0].uri)
    setPhoto(result.assets[0].uri)
  };
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
            marginTop:25
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
            {photo ?
              <Image style={styles.profileVw} source={{ uri: photo }} /> :
              <View style={styles.profileVw}>
                <Image source={ImagePath.ELLIPSE} />
              </View>
            }
            <TouchableOpacity style={styles.camera} onPress={() => {
              openCamera()
            }}>
              <Image source={ImagePath.CAMERA} />
            </TouchableOpacity>

          </View>
          {/* <Text style={[styles.heading]}>Edit Profile</Text> */}
          <View style={{marginTop:24}}>
          <InputBox
            placeHolder='Bussiness-Name'
            keyboardType='default' />
          <InputBox
            placeHolder='Address'
            keyboardType='default' />
          <InputBox
            placeHolder='Email-Address'
            keyboardType='email-address' />
          <InputBox
            placeHolder='Phone No'
            keyboardType='default' />
          <InputBox
            placeHolder='Website-URL'
            keyboardType='email-address' />
          <InputBox
            placeHolder='Password'
            keyboardType='default' />
            </View>
            <CustomButtonComponent label={'UPDATE'} 
            onPress={() => props.navigation.goBack()}/>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
