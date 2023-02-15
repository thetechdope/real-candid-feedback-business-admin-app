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

const CustomFlatList = props => {
  const data = [
    {
      key: 1,
      name: 'Arun Kumar',
    },
    {
      key: 2,
      name: 'Arun Kumar',
    },
    {
      name: 'Arun Kumar',
      key: 3,
    },
    {
      name: 'Arun Kumar',
      key: 4,
    },
    {
      name: 'Arun Kumar',
      key: 5,
    },
    {
      name: 'Arun Kumar',
      key: 7,
    },
    {
      name: 'Arun Kumar',
      key: 6,
    },
  ]; // console.log(props);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        nestedScrollEnabled={true}
        // style={{height: height * 0.3, width: '100%', backgroundColor: 'red'}}
        keyExtractor={item => item.key}
        data={data}
        renderItem={item => {
          // console.log(item?.item);
          return (
            <TouchableWithoutFeedback onPress={props.onPress}>
              <View
                key={item.item.key}
                style={{
                  backgroundColor: 'rgba(255, 255, 255,1)',
                  borderRadius: 20,
                  shadowColor: '#EBE7FD',
                  shadowOpacity: 1,
                  elevation: 7,
                  borderColor: '#EBE7FD',
                  borderWidth: 1,

                  shadowOffset: {width: 2, height: 20},
                  width: width * 0.9,
                  height: height * 0.13,
                  padding: 10,
                  // borderColor: '#E8E8E8',
                  alignSelf: 'center',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  marginBottom: 10,
                  marginTop: 10,
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
                    {item.item.name}
                  </Text>
                  <Image source={ImagePath.REDEMOJI} />
                  <Text
                    style={{color: '#797979', fontSize: 13, lineHeight: 20}}>
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
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default CustomFlatList;
