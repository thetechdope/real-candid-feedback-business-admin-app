/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
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
import React, {useEffect, useState} from 'react';
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
  const [FeedbacksByUsers, setFeedbacksByUsers] = useState([]);
  const [zero, setZero] = useState(0);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  let countOne = 0;
  let countTwo = 0;
  let countZero = 0;
  console.log('zerooooo frer', zero, one, two);
  const data = [
    {
      value: two,
      frontColor: '#66D464',
      topLabelComponent: () => (
        <Image source={ImagePath.GREENEMOJI} style={{marginBottom: 10}} />
      ),
    },
    {
      value: one,
      frontColor: '#E9D102',
      topLabelComponent: () => (
        <Image source={ImagePath.YELLOWEMOJI} style={{marginBottom: 10}} />
      ),
    },
    {
      value: zero,
      frontColor: '#FA4E4E',
      topLabelComponent: () => (
        <Image source={ImagePath.REDEMOJI} style={{marginBottom: 10}} />
      ),
    },
  ];
  useEffect(() => {
    Feedbacks();
  }, []);
  async function Feedbacks() {
    await commonFunction({
      data: '',
      endpoint: '/feedbacks/loggedin-business',
      method: 'GET',
    })
      .then(res => {
        let data = [];
        data.push(res.data);
        setFeedbacksByUsers(...data);
        // setFeedbacksByUsers(res.data);
        console.log('response from Home', FeedbacksByUsers);
      })
      .catch(error => {
        console.log('error in home screen', error);
      });
  }
  async function BarGraph() {
    FeedbacksByUsers.map(item => {
      if (item?.rating === 1) {
        // console.log('number one', item.rating);
        countOne += 1;

        setOne(countOne);
      } else if (item?.rating === 2) {
        // console.log('number two', item.rating);
        countTwo += 1;
        setTwo(countTwo);
      } else {
        // console.log('number zero', item.rating);
        countZero += 1;
        setZero(countZero);
      }
    });
  }
  useEffect(() => {
    BarGraph();

    // return
  }, [FeedbacksByUsers]);

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
          {zero > one && zero > two ? (
            <Image source={ImagePath.BAD} />
          ) : one > zero && one > two ? (
            <Image source={ImagePath.NORMAL} />
          ) : (
            <Image source={ImagePath.GOOD} />
          )}
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
                // data={FeedbacksByUsers.map(item => {
                //   return item.item.rating;
                // })}
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
                data={FeedbacksByUsers}
                onPress={item => {
                  props.navigation.navigate(Route.profileFromFlatList, {item});
                }}
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
