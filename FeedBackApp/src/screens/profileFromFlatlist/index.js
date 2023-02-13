import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';
import {height, width} from '../../utils/dimensions/dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROBOTO_BOLD, ROBOTO_MEDIUM} from '../../assets/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectCountry} from 'react-native-element-dropdown';
import {ImagePath} from '../../assets/images';
import {Route} from '../../navigation/route';
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
        <TouchableOpacity onPress={() => props.navigation.navigate(Route.Home)}>
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
    </CustomHeader>
  );
};

export default ProfileFromFlatList;
