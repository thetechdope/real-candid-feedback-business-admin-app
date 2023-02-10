import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';

const Feedbacks = () => {
  return (
    <CustomHeader>
      <CustomFlatList />
    </CustomHeader>
  );
};

export default Feedbacks;
