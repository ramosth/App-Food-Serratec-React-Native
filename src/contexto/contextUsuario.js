/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

//2. ESTADO GLOBAL - BOA PRÁTICA
const estadoGlobalInicial = {
  usuario: null, // usuario: {},
  login: () => {}, //poderia ser o no lugar de login: --- setUsuario:
  logout: () => {},
};

//1. CRIANDO O CONTEXTO
// usuario: {email, premium, idade, nome}
export const UsuarioLogado = createContext(estadoGlobalInicial); //cria um contexto, e inicializa com um objeto vazio

//1. PROVIDER
export const UsuarioLogadoProvider = ({ children }) => {
  // const [user, setUser] = useState({});
  const [user, setUser] = useState(null);

  return (
    <UsuarioLogado.Provider
      value={{
        usuario: user,
        login: (newUser) => {
          setUser(newUser);
        },
        logout: () => {
          // setUser({});
          setUser(null);
        },
      }}>
      {children}
    </UsuarioLogado.Provider>
  );
};
