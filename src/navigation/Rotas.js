/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { UsuarioLogado } from '../contexto/contextUsuario';
import RotaAutentication from './RotaAutentication';
import RotaLogin from './RotaLogin';

export const Rotas = () => {
  const {usuario} = useContext(UsuarioLogado);
  return usuario ? <RotaLogin /> : <RotaAutentication />;
  // return usuario ? <Home /> &&  <Detalhe /> : <RotaAutentication />;
};
