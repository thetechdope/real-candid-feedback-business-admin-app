import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
// import {TextInput} from 'react-native-paper';
// import {TextInput} from '@react-native-material/core';

const CustomTextInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{props?.label}</Text>
      </View>
      <TextInput
        keyboardType={props?.keyboardType ? props.keyboardType : 'default'}
        style={styles.textInputStyle}
        secureTextEntry={props?.secureTextEntry}
        value={props.value}
        label={props.label}
        placeholder={props.placeholder}
        onChangeText={props?.onChangeText}
        editable={true}
        // theme={{colors: {primary: 'gray', underlineColor: 'transparent'}}}
      />
    </View>
  );
};

export default CustomTextInput;
