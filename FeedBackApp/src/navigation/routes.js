import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '../screens/index';
import {Route} from './route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={screens.Home} />
      <Tab.Screen name="Settings" component={screens.Setting} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator initialRouteName={'BottomTab'}>
      <Stack.Screen
        name={Route.Splash}
        component={screens.Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Route.Signup} component={screens.Signup} />
      <Stack.Screen
        name={Route.Login}
        component={screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Route.Forgot}
        component={screens.ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'BottomTab'}
        component={MyTabs}
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
