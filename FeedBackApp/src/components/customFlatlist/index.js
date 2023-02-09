import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  VirtualizedList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';
import {ImagePath} from '../../assets/images';
import {width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';

const CustomFlatList = props => {
  const data = [
    {
      name: 'Arun Kumar',
    },
  ]; // console.log(props);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        style={{height: 50, width: '100%'}}
        data={data}
        renderItem={item => {
          console.log(item?.item);
          return (
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 20,
                shadowColor: '#0000001A',
                shadowOpacity: 1,
                elevation: 12,

                shadowOffset: {width: 2, height: 10},
                width: '90%',
                height: 120,
                padding: 10,
                // borderColor: '#E8E8E8',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: ROBOTO_BOLD,
                    fontSize: 14,
                    lineHeight: 20,
                    width: width * 0.56,
                    color: COLOR.TEXTBLACK,
                  }}>
                  Name
                </Text>
                <Image source={ImagePath.REDEMOJI} />
                <Text style={{color: '#797979', fontSize: 13, lineHeight: 20}}>
                  1 day ago
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={ImagePath.ELLIPSE}
                    style={{height: 50, width: 50}}
                  />
                </View>
                <View style={{marginLeft: 20, width: 300}}>
                  <Text
                    style={{
                      color: '#585954',
                      lineHeight: 20,
                      fontSize: 14,
                      fontFamily: ROBOTO_REGULAR,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomFlatList;
