import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomHeader = props => {
  // console.log(props);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
