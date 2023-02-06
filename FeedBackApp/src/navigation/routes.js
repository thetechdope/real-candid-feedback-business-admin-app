import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '../screens/index';
import {Route} from './route';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.Splash} component={screens.Splash} />
      <Stack.Screen name={Route.Signup} component={screens.Signup} />
      <Stack.Screen name={Route.Login} component={screens.Login} />
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
