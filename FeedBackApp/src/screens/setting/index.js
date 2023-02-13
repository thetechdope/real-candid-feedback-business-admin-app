import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomButtonComponent, CustomHeader} from '../../components';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Setting = props => {
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
            <Text style={{fontSize: 18}}>Sam Perez</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={ImagePath.LOCATION} />
              <Text style={{color: 'grey'}}>Jakarta, Indonesia</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
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
            alignItems: 'center'
          }}>
          <Image source={ImagePath.LOCK} style={{ margin: 10 }} />
          <Text style={{
            fontSize: 15,
            color: 'grey',
            // fontWeight: 'bold'
          }}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={{
            flexDirection: 'row',
            // borderWidth: 0.3,
            borderColor: 'grey',
            // marginTop: 20,
            height: '10%',
            alignItems: 'center'
          }}>
          <Image source={ImagePath.DELETE} style={{ margin: 10 }} />
          <Text style={{
            fontSize: 15,
            color: 'grey',
            // fontWeight: 'bold'
          }}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          borderWidth: 0.3,
          borderColor: 'grey',
          // marginTop: 20,
          height: '10%',
          alignItems: 'center'
        }}>
          <Image source={ImagePath.LOGOUT} style={{ margin: 10 }} />
          <Text style={{
            fontSize: 15,
            color: 'grey',
            // fontWeight: 'bold'
          }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </CustomHeader>
  );
};

export default Setting;
