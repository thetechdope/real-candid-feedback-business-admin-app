import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomFlatList = props => {
  // console.log(props);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        style={{height: 50, width: '100%'}}
        data={props?.data}
        renderItem={item => {
          console.log(item?.item);
          return (
            <View>
              <Text>{item?.item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomFlatList;
