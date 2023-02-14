import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const commonFunction = async props => {
  console.log(props);
  const data = {
    businessName: 'Ots solutions',
    businessAddress: 'spaze platinum tower',
    businessEmail: 'ots1@gmail.com',
    password: 'Arun@1234',
    businessPhoneNumber: '928349037',
    businessWebsiteUrl: 'hdfsjf.com',
  };
  try {
    if (props) {
      const response = await axios.post(
        'https://api-8p1l.onrender.com/api/businesses/login',
        props,
      );
      console.log(response.data._id);
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('userId', response.data._id);
    } else {
      const response = await axios.get(
        'https://api-8p1l.onrender.com/api/businesses/',
      );
      console.log(response.data);
      //   await AsyncStorage.setItem('token', response.data.token);
      //   await AsyncStorage.setItem('userId', response.data._id);
    }
  } catch (error) {
    console.error(error.response);
  }
};
export default commonFunction;
