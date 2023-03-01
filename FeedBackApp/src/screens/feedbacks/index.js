import {
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {CustomFlatList, CustomHeader} from '../../components';
import {height, width} from '../../utils/dimensions/dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROBOTO_BOLD, ROBOTO_MEDIUM} from '../../assets/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectCountry} from 'react-native-element-dropdown';
import {ImagePath} from '../../assets/images';
import commonFunction from '../../components/CommonFunction';
import {Route} from '../../navigation/route';

const Feedbacks = props => {
  const data = [
    {label: 'Registered', value: '1', image: ImagePath.REGISTERED},
    {label: 'Anonymous', value: '2', image: ImagePath.ANONYMOUS},
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [rating, setrating] = useState(0);
  const [name, setname] = useState('');
  const [FeedbacksByUsers, setFeedbacksByUsers] = useState([]);
  const [FilterFeedbacksByUsers, setFilterFeedbacksByUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  // console.log(value);
  useEffect(() => {
    Feedbacks();
  }, []);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };
  async function Feedbacks(params) {
    try {
      await commonFunction({
        data: '',
        endpoint: '/feedbacks/loggedin-business',
        method: 'GET',
      }).then(res => {
        let data = [];
        data.push(res.data);
        setFeedbacksByUsers(res.data);
        if (value === 2) {
          const result = FeedbacksByUsers.filter(item => {
            {
              if (item?.isAnonymous) {
                // console.log('is anomymous', item);
                return true;
              } else {
                // console.log('is notanomymous', item);
                return false;
              }
            }
          });
          console.log('filter', result);
        }
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }
  function getClick(user) {
    console.log(user);
  }
  return (
    <CustomHeader>
      <View
        style={{
          // backgroundColor: 'green',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: height * 0.1,
          width: width * 0.9,

          marginTop: 100,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate(Route.Home)}>
          <Icon name="arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: ROBOTO_MEDIUM,
              color: 'black',
              lineHeight: 29,
            }}>
            Feedback
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Route.Notifications)}>
          <Icon name="bell" size={22} color={'gray'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // backgroundColor: 'green',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.05,
          width: width * 0.9,
        }}>
        {/* <View style={styles.container}>
          <SelectCountry
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            imageStyle={styles.imageStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            imageField="image"
            itemTextStyle={{color: 'black'}}
            placeholder={
              !isFocus ? (
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <Icon
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name={'filter-variant'}
                    size={20}
                  />
                  <Text style={{color: 'black'}}>Filters</Text>
                </View>
              ) : (
                '...'
              )
            }
            // value={value}
            onFocus={() => setIsFocus(true)}
            value={value}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Icon
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name={'filter-variant'}
                size={20}
              />
            )}
          />
        </View> */}
      </View>
      <View style={{height: height * 0.9}}>
        <CustomFlatList
          data={FeedbacksByUsers}
          onPress={item => {
            props.navigation.navigate(Route.profileFromFlatList, {item});
          }}
        />
      </View>
    </CustomHeader>
  );
};

export default Feedbacks;
