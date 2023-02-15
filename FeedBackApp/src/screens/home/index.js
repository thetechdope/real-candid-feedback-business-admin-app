import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagePath} from '../../assets/images';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {height, width} from '../../utils/dimensions/dimensions';
import {Route} from '../../navigation/route';
import {COLOR} from '../../utils/color/color';
import commonFunction from '../../components/CommonFunction';
const Home = props => {
  const data = [
    {
      value: 20,
      frontColor: '#66D464',
      topLabelComponent: () => (
        <Image source={ImagePath.GREENEMOJI} style={{marginBottom: 10}} />
      ),
    },
    {
      value: 80,
      frontColor: '#E9D102',
      topLabelComponent: () => (
        <Image source={ImagePath.YELLOWEMOJI} style={{marginBottom: 10}} />
      ),
    },
    {
      value: 90,
      frontColor: '#FA4E4E',
      topLabelComponent: () => (
        <Image source={ImagePath.REDEMOJI} style={{marginBottom: 10}} />
      ),
    },
  ];
  useEffect(() => {
    Feedbacks();
  }, []);
  async function Feedbacks(params) {
    const response = await commonFunction({
      data: '',
      endpoint: 'feedbacks',
      method: 'GET',
    });
    console.log(response);
  }
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar
        backgroundColor={COLOR.COMMONCOLOR}
        barStyle={'light-content'}
      />
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>HOME</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Route.Notifications)}>
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
              height: height * 0.23,
              // backgroundColor: 'red',
              width: width * 0.8,
              // overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View style={styles.barView}>
              <BarChart
                height={height * 0.12}
                width={width * 0.6}
                data={data}
                barWidth={20}
                noOfSections={3}
                disablePress
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
            <ScrollView horizontal={true} key={'flat'}>
              <CustomFlatList
                onPress={() =>
                  props.navigation.navigate(Route.profileFromFlatList)
                }
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
