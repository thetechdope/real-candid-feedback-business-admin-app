import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'http://34.212.54.70:3000/api/businesses';
const commonFunction = async ({data, endpoint, method}) => {
  console.log('prosjkdffks', data, endpoint, method);

  if (method === 'POST') {
    const response = await axios.post(`${baseUrl}/${endpoint}`, data);
    // console.log(response.data);

    return response;
  } else if (method === 'GET') {
    const response = await axios.get(
      'http://34.212.54.70:3000/api/dashboard/loggedin-business/kfc@gmail.com',
    );
    console.log(response.data);
    //   await AsyncStorage.setItem('token', response.data.token);
    //   await AsyncStorage.setItem('userId', response.data._id);
    return response;
  }
};
export default commonFunction;
