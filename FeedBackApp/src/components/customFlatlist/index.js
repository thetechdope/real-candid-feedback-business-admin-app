import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  VirtualizedList,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';
import {ImagePath} from '../../assets/images';
import {height, width} from '../../utils/dimensions/dimensions';
import {COLOR} from '../../utils/color/color';

const CustomFlatList = props => {
  const [refreshing, setRefreshing] = useState(false);
  const data = [
    {
      key: 1,
      name: 'Arun Kumar',
      emoji: 0,
    },
    {
      key: 2,
      name: 'Arun Kumar',
      emoji: 2,
    },
    {
      name: 'Arun Kumar',
      key: 3,
      emoji: 1,
    },
    {
      name: 'Arun Kumar',
      key: 4,
      emoji: 0,
    },
    {
      name: 'Arun Kumar',
      key: 5,
      emoji: 2,
    },
    {
      name: 'Arun Kumar',
      key: 7,
      emoji: 0,
    },
    {
      name: 'Arun Kumar',
      key: 6,
      emoji: 1,
    },
  ];
  console.log('mjsdhjsgdhsjhadsa', props);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={<ActivityIndicator color={'black'} />}
          />
        }
        // style={{height: height * 0.3, width: '100%', backgroundColor: 'red'}}
        keyExtractor={(item, index) => index.toString()}
        data={props.data}
        renderItem={item => {
          // console.log(item?.item);
          return (
            <TouchableWithoutFeedback onPress={() => props.onPress(item)}>
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
                    {item.item.customerName}
                  </Text>
                  {item.item.rating === 0 ? (
                    <Image source={ImagePath.REDEMOJI} />
                  ) : item.item.rating === 1 ? (
                    <Image source={ImagePath.YELLOWEMOJI} />
                  ) : (
                    <Image source={ImagePath.GREENEMOJI} />
                  )}
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
                      {item.item.feedback}
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
