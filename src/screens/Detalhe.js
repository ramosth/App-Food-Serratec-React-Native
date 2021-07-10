/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import toppingsData from '../assets/data/toppingsData';

export default function Detalhe({ route, navigation }) {
  const { item } = route.params;
  const [contador, setContador] = useState(0);

  const renderToppingsItem = ({ item }) => {
    return (
      <TouchableOpacity >
        <View
          style={[
            styles.toppingItemWrapper, {
              marginLeft: item.id === 1 ? 25 : 0,
              borderColor: item.selected ? colors.primaryColor : colors.white,
              borderWidth: item.selected ? 1 : 0,
            }]}>
          <Image source={item.image} style={styles.toppingImage} />
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            {/* Icon */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={16} color={colors.textDark} />
              </View>
            </TouchableOpacity>
            {/* Texto */}
            <TouchableOpacity>
              <View style={styles.search}>
                <Text style={styles.searchText}>Delivery to</Text>
                <Feather name="chevron-down" size={14} color={colors.textDark} />
              </View>
              <Text style={styles.searchTextSub}>lekki phase 1, Estate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerRight}>
                <Image
                  source={require('../assets/images/profile.png')}
                  style={styles.profileImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Informações */}
        <View style={styles.infoImageWrapper}>
          <Image
            source={require('../assets/images/burger.png')}
            style={styles.infoImage}
          />
        </View>
        {/* Button Quantidade */}
        <View style={{ alignItems: 'center' }}>
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 0.6]} colors={['#FB832D', '#FC7F36', '#FF774C']} style={[styles.buttonCreate, { elevation: 8, borderRadius: 30, width: 120, flexDirection: 'row', justifyContent: 'center' }]}>
              <Button titulo="-" buttonStyles={[styles.buttonCreateStyles, {marginRight: 20, marginLeft: -10}]} onPress={() => setContador(contador - 1)} disabled={contador === 0 ? true : false} tituloStyles={contador <= 0 ? [styles.tituloDisable] : [{color: colors.white}]} />
            <Text style={{color: colors.white, marginVertical: 15}}>{contador}</Text>
            <Button titulo="+" buttonStyles={[styles.buttonCreateStyles, {marginLeft: 10}]} onPress={() => setContador(contador + 1)} />
          </LinearGradient>
        </View>
        {/* Title e infos */}
        <View style={styles.titlesWrapper}>
          <Text style={[styles.titlesTitle, {}]}>{item.title}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 30 }}>
            <View style={styles.ratingWrapper}>
              <Image
                source={require('../assets/images/Star.png')}
              />
              <Text style={styles.titleSubTitle}>{item.rating}+</Text>
            </View>
            <View style={styles.ratingWrapper}>
              <Image
                source={require('../assets/images/fire.png')}
              />
              <Text style={styles.titleSubTitle}>{item.weight}</Text>
            </View>
            <View style={styles.ratingWrapper}>
              <Image
                source={require('../assets/images/time.png')}
              />
              <Text style={styles.titleSubTitle}>{item.time}</Text>
            </View>
          </View>
        </View>
        {/* Descrição */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        {/* Toppings */}
        <View style={styles.toppingsWrapper}>
          <Text style={styles.subTitleText}>Toppings for you</Text>
          <View style={styles.toppingsListWrapper}>
            <FlatList
              data={toppingsData}
              renderItem={renderToppingsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

      </ScrollView>
      <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]} colors={['#FB832D', '#FC7F36', '#FF774C']} style={[styles.buttonCreate, { elevation: 8, marginHorizontal: 20, borderRadius: 20, marginBottom: 31, height: 51 }]}>
        <Button titulo="Add to card" buttonStyles={[styles.buttonCreateStyles]} onPress={() => Alert.alert('Carrinho', 'Produto adicionado com sucesso!')} />
      </LinearGradient>
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
    paddingTop: 30,
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    marginBottom: -15,
  },
  headerLeft: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 13,
    borderRadius: 15,
  },
  headerRight: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderRadius: 15,
    borderColor: colors.white,
    borderWidth: 1,
  },
  titlesWrapper: {
    alignItems: 'center',
    marginTop: 35,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.textDark,
    marginBottom: 10,
  },
  titleSubTitle: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 13,
    color: colors.textDark,
    marginLeft: 5,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchText: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
    color: colors.textDark,
    marginRight: 5,
  },
  searchTextSub: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 15,
    color: colors.primaryColor,
    marginTop: 10,
  },
  // novos
  buttonCreateStyles: {
    backgroundColor: 'transparent',
    shadowColor: colors.textDark,
  },
  infoImageWrapper: {
    marginHorizontal: '22%',
    marginTop: 40,
    marginBottom: 35,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 28,
    width: 238,
    height: 194,
    borderRadius: 20,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  description: {
    marginLeft: 35,
    marginTop: 35,
    marginBottom: 35,
    alignItems: 'center',
    width: 330,
    height: 84,
  },
  descriptionText: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: colors.textDark,
  },
  toppingsWrapper: {
    marginBottom: 20,
  },
  subTitleText: {
    marginLeft: 30,
    fontFamily: 'Sk-Modernist-Bold',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 21,
    color: colors.textDark,
  },
  toppingsListWrapper: {
    paddingVertical: 30,
    marginBottom: 10,
  },
  toppingItemWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: 150,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    marginRight: 20,
    shadowColor: colors.textDark,
    elevation: 5,
  },
  toppingImage: {
    resizeMode: 'contain',
    marginRight: 8,
    width: 30,
    height: 30,
  },
  tituloDisable: {
    opacity: 0.4,
  },
});
