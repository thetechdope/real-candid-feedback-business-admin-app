import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomFlatListNotification, CustomHeader} from '../../components';
import {height, width} from '../../utils/dimensions/dimensions';
import {Route} from '../../navigation/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROBOTO_MEDIUM} from '../../assets/fonts';

const Notifications = props => {
  return (
    <CustomHeader>
      <View
        style={{
          // backgroundColor: 'green',
          // alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: height * 0.1,
          width: width * 0.65,
          marginLeft: 20,
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
            }}>
            Notifications
          </Text>
        </View>
      </View>
      {/* <View
        style={{
          // backgroundColor: 'green',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.05,
          width: width * 0.9,
        }}></View> */}
      <CustomFlatListNotification />
    </CustomHeader>
  );
};

export default Notifications;
