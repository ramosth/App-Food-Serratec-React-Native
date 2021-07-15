/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detalhe from '../screens/Detalhe';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function RotaLogin() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Detalhe" component={Detalhe} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
