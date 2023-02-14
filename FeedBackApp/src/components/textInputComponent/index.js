import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
// import {TextInput} from 'react-native-paper';
// import {TextInput} from '@react-native-material/core';

const CustomTextInput = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props?.label}</Text>
      <TextInput
        keyboardType={props?.keyboardType ? props.keyboardType : 'default'}
        style={styles.textInputStyle}
        secureTextEntry={props?.secureTextEntry}
        label={props.label}
        onChangeText={props?.onChangeText}
        theme={{colors: {primary: 'gray', underlineColor: 'transparent'}}}
      />
    </View>
  );
};

export default CustomTextInput;
