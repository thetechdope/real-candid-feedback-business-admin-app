import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-paper';
// import {TextInput} from '@react-native-material/core';

const CustomTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        label={props.label}
        theme={{colors: {primary: 'gray', underlineColor: 'transparent'}}}
      />
    </View>
  );
};

export default CustomTextInput;
