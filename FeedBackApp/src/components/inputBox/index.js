import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import styles from './styles';

const InputBox = props => {
  return (
    <TextInput
      style={[styles.area, props.style, {marginTop: 10}]}
      keyboardType={props.keyboardType}
      placeholder={props.placeHolder}
    />
  );
};

export default InputBox;
