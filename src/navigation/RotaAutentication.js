/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';
import ForgotPassward from '../screens/ForgotPassword';
// import Detalhe from '../screens/Detalhe';
// import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function RotaAutentication() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{ headerShown: false }}>
      {/* Estas telas estarão SEMPRE disponiveis */}
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassward" component={ForgotPassward} />
      {/* Estas telas só estarão disponiveis caso o usuario esteja logado */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Detalhe" component={Detalhe} /> */}
    </Stack.Navigator>
  );
}
