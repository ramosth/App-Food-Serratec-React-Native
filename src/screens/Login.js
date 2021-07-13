/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import InputText from '../components/InputText';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { UsuarioLogado } from '../contexto/contextUsuario';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // ACESSANDO O CONTEXTO
  const { usuario, login } = useContext(UsuarioLogado);
  console.log('usuario => ', usuario);

  // useEffect(() => {
  //   login(
  //     {
  //       email: 'email@gmail.com',
  //     }
  //   );
  // }, []);

  const fazerLogin = () => {
    // fazer aqui *** uma requisição a uma API.. que retornaria um objeto usuarioCadastrado, e salvaria como contextoGlobal
    const usuarioCadastrado = {
      id: '1',
      nome: 'Mário',
      email: 'mario@gmail.com',
      idade: 42,
      premium: true,
    };
    login(usuarioCadastrado);
    // navigation.navigate('Home'); //não vai mais precisar dessa rota, pois só quem tem acesso a tela de Home é o usuarioCadastrado que fez login.
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/Icon.png')}
                style={styles.headerLogo}
              />
            </TouchableOpacity>
            {/* Icon */}
            <View style={styles.headerLink}>
              <Text style={styles.headerTextLink}>Skip</Text>
            </View>
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Login to your account</Text>
          <Text style={styles.titlesTitle}>
            Good to see you again, enter your details below to continue ordering.
          </Text>
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Email Address</Text>
            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              iconName="email-outline"
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Password</Text>
            <InputText
              value={senha}
              onChangeText={setSenha}
              placeholder="Enter password"
              iconName="lock-outline"
            />
          </View>
          <View style={styles.buttonForgot}>
            <Button
              titulo="Forgot Password"
              buttonStyles={[styles.buttonForgotStyles]}
              tituloStyles={[styles.tituloForgotStyles]}
              onPress={() => navigation.navigate('ForgotPassward')} />
          </View>
        </View>
        {/* Button */}
        <View style={[styles.buttonSigIn]}>
          <Button
            path={require('../assets/images/google.png')}
            titulo="Sign-in with Google"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles} />
        </View>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5, 0.6]}
          colors={['#FB832D', '#FC7F36', '#FF774C']}
          style={[styles.buttonCreate, { elevation: 8 }]}>
          <Button
            titulo="Create an account"
            buttonStyles={[styles.buttonCreateStyles]}
            onPress={() => navigation.navigate('CreateAccount')} />
        </LinearGradient>
        <View style={styles.buttonLogin}>
          <Button
            titulo="Login to my account"
            buttonStyles={styles.buttonLoginStyles}
            tituloStyles={styles.tituloLoginStyles}
            onPress={fazerLogin} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 28,
    alignItems: 'center',
  },
  headerLogo: {
    justifyContent: 'center',
    marginLeft: 171,
  },
  headerLink: {
    marginRight: 10,
  },
  headerTextLink: {
    color: colors.primaryColor,
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1,
  },
  titlesWrapper: {
    marginTop: 55,
    paddingHorizontal: 44,
  },
  titlesSubtitle: {
    fontFamily: 'Sk-Modernist-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    color: colors.textDark,
    marginTop: 15,
    width: 287,
  },
  inputsWrapper: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  inputItemWrapper: {
    marginBottom: 20,
  },
  inputItemTitle: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 12,
    marginBottom: 10,
    marginHorizontal: 25,
  },
  buttonCreate: {
    marginHorizontal: 22,
    borderRadius: 20,
  },
  buttonSigIn: {
    marginTop: 180,
    marginHorizontal: 85,
    marginBottom: 20,
  },
  buttonStyles: {
    backgroundColor: colors.white,
    shadowColor: '#AAACAE',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8,
  },
  buttonCreateStyles: {
    backgroundColor: 'transparent',
    shadowColor: colors.textDark,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
  },
  tituloStyles: {
    color: colors.textDark,
    fontFamily: 'Sk-Modernist-Regular',
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
  },
  buttonLogin: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonLoginStyles: {
    backgroundColor: 'transparent',
  },
  tituloLoginStyles: {
    color: colors.primaryColor,
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 16,
  },
  buttonForgot: {
    marginTop: -30,
    marginLeft: 270,
  },
  buttonForgotStyles: {
    backgroundColor: 'transparent',
  },
  tituloForgotStyles: {
    color: colors.textDark,
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 12,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
  },
});
