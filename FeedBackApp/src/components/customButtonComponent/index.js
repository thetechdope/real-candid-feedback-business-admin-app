import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../../utils/color/color';

// import {TextInput} from '@react-native-material/core';

const CustomButtonComponent = props => {
  return (
    <TouchableOpacity style={styles.touchableView} onPress={props.onPress}>
      <LinearGradient
        colors={[COLOR.LINEARGRADIENT1, COLOR.LINEARGRADIENT2]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props?.label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;
