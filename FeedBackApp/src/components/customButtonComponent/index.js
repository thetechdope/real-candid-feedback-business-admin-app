import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
// import {TextInput} from '@react-native-material/core';

const CustomButtonComponent = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textInputStyle}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonComponent;
