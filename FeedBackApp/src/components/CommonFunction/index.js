import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'http://34.212.54.70:3000/api';

const commonFunction = async ({data, endpoint, method}) => {
  console.log('prosjkdffks', data, endpoint, method);
  // const res = {
  //   businessName: 'Arun',
  //   businessAddress: 'spaze',
  //   businessEmail: 'arun@gmail.com',
  //   password: 'Arun@1234',
  //   businessPhoneNumber: '45577555',
  //   businessWebsiteUrl: 'http://www.codewitharun.github.io/',
  // };
  // let token = async()=> await AsyncStorage.getItem('token').then(res=>{
  //   console.log('res=======>', res)
  //   return res
  // })

  let token = await AsyncStorage.getItem('token');

  // setToken(result)

  // console.log('token', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const patchConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  if (method === 'POST') {
    const response = await axios.post(`${baseUrl}${endpoint}`, data, config);

    console.log('ufcwjcvhcvswcv', response.data);

    return response;
  } else if (method === 'GET') {
    console.log(endpoint);
    const response = await axios.get(`${baseUrl}${endpoint}`, config);
    console.log('resp=======', response.data);
    // await AsyncStorage.setItem('token', response.data.token);
    //   await AsyncStorage.setItem('userId', response.data._id);
    return response;
  } else if (method === 'DELETE') {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    console.log(response.data);

    //   await AsyncStorage.setItem('userId', response.data._id);
    return response;
  } else if (method === 'PATCH') {
    const response = await axios.patch(
      `${baseUrl}${endpoint}`,
      data,
      patchConfig,
    );
    console.log('response after patch', response.data);
    // await AsyncStorage.setItem('user', JSON.stringify(response.data));
    //   await AsyncStorage.setItem('userId', response.data._id);
    return response;
  }
};
export default commonFunction;
