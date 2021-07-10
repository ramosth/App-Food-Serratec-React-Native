import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RotaAutentication from './src/navigation/RotaAutentication';

export default function App() {
  return (
    <NavigationContainer>
      <RotaAutentication />
    </NavigationContainer>
  );
}
