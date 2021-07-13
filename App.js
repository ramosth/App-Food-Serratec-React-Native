/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Rotas } from './src/navigation/Rotas';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './src/assets/colors/colors';
import { UsuarioLogadoProvider } from './src/contexto/contextUsuario';

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.backgroundColor }}>
      <NavigationContainer>
        <UsuarioLogadoProvider>
          <Rotas />
        </UsuarioLogadoProvider>
        {/* tudo o que vier fora do contexto não terá acesso aos dados da variavel GLOBAL, neste exemplo, seria o objeto usuario */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
