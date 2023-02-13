import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';
import {height, width} from '../../utils/dimensions/dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectCountry} from 'react-native-element-dropdown';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
import {COLOR} from '../../utils/color/color';
import LinearGradient from 'react-native-linear-gradient';

const ProfileFromFlatList = props => {
  const data = [
    {label: 'Registered', value: '1', image: ImagePath.REGISTERED},
    {label: 'Anonymous', value: '2', image: ImagePath.ANONYMOUS},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };

  return (
    <CustomHeader>
      <View
        style={{
          // backgroundColor: 'green',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: height * 0.1,
          width: width * 0.9,

          marginTop: 100,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: ROBOTO_MEDIUM,
              color: 'black',
              lineHeight: 29,
            }}></Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Route.Notifications)}>
          <Icon name="bell" size={22} color={'gray'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height * 0.2,
          width: width * 1,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={ImagePath.ELLIPSE} />
      </View>
      <View
        style={{
          height: height * 0.05,
          width: width * 1,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: ROBOTO_MEDIUM, fontSize: 20, lineHeight: 24}}>
          Name
        </Text>
      </View>
      <View
        style={{
          height: height * 0.16,
          width: width * 1,
          justifyContent: 'center',
          // backgroundColor: COLOR.COMMONCOLOR,
          // alignItems: 'flex-end',
          alignSelf: 'flex-end',
        }}>
        <LinearGradient
          colors={[COLOR.LINEARGRADIENT1, COLOR.LINEARGRADIENT2]}
          style={styles.linearGradient}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View
              style={{
                // alignItems: 'center',
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: width * 0.5,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 20,
                  color: '#E6DCFF',
                  fontFamily: ROBOTO_MEDIUM,
                  marginBottom: 10,
                }}>
                Current Rating
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 15,
                  color: '#E6DCFF',
                  fontFamily: ROBOTO_REGULAR,
                }}>
                12/12/2021
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.09,
                width: width * 0.4,
                // backgroundColor: 'red',
              }}>
              <Image source={ImagePath.GREENBIG} />
            </View>
          </View>
        </LinearGradient>
      </View>
      <View
        style={{
          // backgroundColor: 'green',
          height: height * 0.53,
          padding: 20,
          width: width * 0.95,
          alignSelf: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: height * 0.1,
            // backgroundColor: 'red',
          }}>
          <Icon name="phone" color={'#7E50EE'} size={32.5} />
          <Text
            style={{
              color: '#797979',
              fontFamily: ROBOTO_REGULAR,
              fontSize: 14,
              lineHeight: 17,
              marginLeft: 20,
            }}>
            +1 212-933-8373
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: height * 0.1,
            // backgroundColor: 'red',
          }}>
          <Icon name="email-newsletter" color={'#7E50EE'} size={32.5} />
          <Text
            style={{
              color: '#797979',
              fontFamily: ROBOTO_REGULAR,
              fontSize: 14,
              lineHeight: 17,
              marginLeft: 20,
            }}>
            Jackrowell@gmail.com
          </Text>
        </View>
      </View>
    </CustomHeader>
  );
};

export default ProfileFromFlatList;
