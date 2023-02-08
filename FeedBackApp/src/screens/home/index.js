import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagePath} from '../../assets/images';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
const Home = () => {
  const data = {
    name: 'hello testing flat list',
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>HOME</Text>
          <TouchableOpacity>
            <Icon name="bell" color={'#FFFFFF'} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.meter}>
          <Text
            style={{fontSize: 16, lineHeight: 19, fontFamily: ROBOTO_MEDIUM}}>
            Monthly Average Rating
          </Text>
          <Image source={ImagePath.BAD} />
        </View>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}>
            <View style={styles.barView}>
              <Image source={ImagePath.BAR} />
            </View>
          </View>
          <View style={styles.Recent}>
            <Text style={styles.RecentText}>Recently Added Feedback</Text>
          </View>
          <View>
            <CustomFlatList data={data} />
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
