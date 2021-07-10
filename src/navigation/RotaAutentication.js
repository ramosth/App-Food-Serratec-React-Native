import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';
import ForgotPassward from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Detalhe from '../screens/Detalhe';

const Stack = createStackNavigator();

export default function RotaAutentication() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassward" component={ForgotPassward} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}
