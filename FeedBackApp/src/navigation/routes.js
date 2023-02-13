import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '../screens/index';
import {Route} from './route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../components/customBottomTab';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomBottomTab {...props} />}
      initialRouteName={Route.Home}>
      <Tab.Screen name={Route.Home} component={screens.Home} />
      <Tab.Screen name={Route.Feedbacks} component={screens.Feedbacks} />
      <Tab.Screen name="Settings" component={screens.Setting} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Route.Splash}
        component={screens.Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Route.Signup} component={screens.Signup} />
      <Stack.Screen
        name={Route.Otp}
        component={screens.Otp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Route.Login}
        component={screens.Login}
        ß
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Route.Forgot}
        component={screens.ForgotPassword}
        options={{headerShown: false}}
      />
       {/* <Stack.Screen
        name={Route.Setting}
        component={screens.Setting}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={'BottomTab'}
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Route.Notifications}
        component={screens.Notifactions}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function Routes(props) {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
