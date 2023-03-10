import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  VirtualizedList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';
import {ImagePath} from '../../assets/images';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';

const CustomFlatListNotification = props => {
  const data = [
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
    },
  ]; // console.log(props);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        // style={{height: height * 0.3, width: '100%', backgroundColor: 'red'}}
        data={data}
        renderItem={item => {
          // console.log(item?.item);
          return (
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255,1)',
                  borderRadius: 20,
                  shadowColor: '#EBE7FD',
                  shadowOpacity: 1,
                  elevation: 7,
                  borderColor: '#EBE7FD',
                  borderWidth: 1,

                  shadowOffset: {width: 2, height: 20},
                  width: '90%',
                  height: height * 0.13,
                  padding: 10,
                  // borderColor: '#E8E8E8',
                  alignSelf: 'center',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <View style={{width: width * 0.9}}>
                  <Text
                    style={{
                      color: '#585954',
                      lineHeight: 20,
                      fontSize: 14,
                      fontFamily: ROBOTO_REGULAR,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing.djfgdkj
                  </Text>
                </View>
                {/* <View
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
                  <Text
                    style={{color: '#797979', fontSize: 13, lineHeight: 20}}>
                    1 day ago
                  </Text>
                </View> */}
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // padding: 10,
                  }}>
                  <View>
                    <Image
                      source={ImagePath.ELLIPSE}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                  <View style={{width: 300}}>
                    <Text
                      style={{
                        color: '#797979',
                        fontSize: 13,
                        lineHeight: 20,
                      }}>
                      10 min ago
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default CustomFlatListNotification;
