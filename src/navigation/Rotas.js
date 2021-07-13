/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { UsuarioLogado } from '../contexto/contextUsuario';
import Home from '../screens/Home';
// import Detalhe from '../screens/Detalhe';
import RotaAutentication from './RotaAutentication';

export const Rotas = () => {
  const {usuario} = useContext(UsuarioLogado);
  return usuario ? <Home /> : <RotaAutentication />;
  // return usuario ? <Home /> &&  <Detalhe /> : <RotaAutentication />;
};
