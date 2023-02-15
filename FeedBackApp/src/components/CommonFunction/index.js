import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'https://api-8p1l.onrender.com/api/businesses';
const commonFunction = async ({data, endpoint, method}) => {
  console.log('prosjkdffks', data, endpoint, method);

  if (method === 'POST') {
    const response = await axios.post(`${baseUrl}/${endpoint}`, data);
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('userId', response.data._id);
    return response;
  } else if (method === 'GET') {
    const response = await axios.get(`${baseUrl}/${endpoint}`);
    console.log(response.data);
    //   await AsyncStorage.setItem('token', response.data.token);
    //   await AsyncStorage.setItem('userId', response.data._id);
    return response;
  }
};
export default commonFunction;
