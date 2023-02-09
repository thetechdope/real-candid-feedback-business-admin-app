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
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {height, width} from '../../utils/dimensions/dimensions';

const Home = () => {
  const data = [
    {
      value: 20,
      frontColor: '#66D464',
      topLabelComponent: () => <Image source={ImagePath.GREENEMOJI} />,
    },
    {
      value: 80,
      frontColor: '#E9D102',
      topLabelComponent: () => <Image source={ImagePath.YELLOWEMOJI} />,
    },
    {
      value: 90,
      frontColor: '#FA4E4E',
      topLabelComponent: () => <Image source={ImagePath.REDEMOJI} />,
    },
  ];
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
              <BarChart
                height={height * 0.12}
                width={width * 0.6}
                data={data}
                barWidth={25}
                noOfSections={3}
                // barBorderRadius={4}
                roundedTop={true}
                frontColor="lightgray"
                yAxisThickness={0}
                xAxisThickness={0}
                hideAxesAndRules={true}
                disableScroll={true}
              />
            </View>
          </View>
          <View style={styles.Recent}>
            <Text style={styles.RecentText}>Recently Added Feedback</Text>
          </View>
          <View>
            <CustomFlatList />
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
