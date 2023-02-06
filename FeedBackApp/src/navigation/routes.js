import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Splash} from '../screens';
import {Route} from './route';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.Splash} component={Splash} />
      <Stack.Screen name={Route.Signup} component={Signup} />
      <Stack.Screen name={Route.Login} component={Login} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
