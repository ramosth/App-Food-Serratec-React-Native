/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import categoriesData from '../assets/data/categoriaData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: '#FFF',
            borderColor: item.corBorda,
            opacity: item.selected ? 1 : 0.4,
            borderWidth: item.selected ? 2 : 1,
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}>
        <View style={[styles.categoryItemWrapper2, { backgroundColor: item.corFundo }]}>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };
  const renderPopularItem = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.popularItemWrapper]} onPress={() => navigation.navigate('Detalhe', { item: item })}>
        <View>
          <Image source={item.image} style={[styles.categoryItemImage, { width: 170, height: 112, marginTop: 20 }]} />
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 15 }}>
          <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Bold', fontWeight: '500' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Medium', marginTop: 5, lineHeight: 19 }}>{item.subTitle}</Text>
        </View>
        <View style={styles.popularCardBottom}>
          <View style={styles.ratingWrapper}>
            <Image
              source={require('../assets/images/Star.png')}
            />
            <Text style={styles.rating}>{item.rating}+</Text>
          </View>
          <View style={styles.addPizzaButton}>
            <Image
              source={require('../assets/images/Heart.png')}
            />
          </View>
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
                <Feather name="menu" size={24} color={colors.textDark} />
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
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>Enjoy Delicious food</Text>
        </View>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
            <Text style={styles.popularTitle}>Popular restaurants</Text>
            <Text style={styles.popularSeeTitle}>View all(29)</Text>
          </View>
          {/* Cards */}
          <View>
            <FlatList
              data={popularData}
              renderItem={renderPopularItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.menuIcones}>
        {/* Icons */}
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <View style={styles.headerLeft1}>
            <Image
              source={require('../assets/images/Home.png')}
              style={[styles.profileImage1, { marginLeft: 10 }]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft1}>
            <Image
              source={require('../assets/images/HeartEmpty.png')}
              style={styles.profileImage1}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LinearGradient
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            locations={[0, 0.5, 1.6]}
            colors={['#FB832D', '#FC7F36', '#FF774C']}
            style={styles.menuSearch}>
            <View style={[styles.headerLeft1, { backgroundColor: 'transparent', borderColor: 'transparent' }]}>
              <Image
                source={require('../assets/images/Search.png')}
                style={[styles.profileImage1]}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft1}>
            <Image
              source={require('../assets/images/Notification.png')}
              style={styles.profileImage1}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft1}>
            <Image
              source={require('../assets/images/Buy.png')}
              style={styles.profileImage1}
            />
          </View>
        </TouchableOpacity>
      </View>
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
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.textDark,
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
    marginTop: 5,
  },
  categoriesWrapper: {
    marginTop: 40,
  },
  categoriesListWrapper: {
    paddingBottom: 30,
  },
  categoryItemWrapper: {
    marginRight: 22,
    marginBottom: 5,
    borderRadius: 80,
    paddingVertical: 18,
    paddingHorizontal: 16,
    elevation: 2,
  },
  categoryItemWrapper2: {
    borderRadius: 100,
    paddingVertical: 34,
    paddingHorizontal: 8,
  },
  categoryItemImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 16,
    marginTop: 10,
  },
  popularWrapper: {
    marginBottom: 40,
  },
  popularTitle: {
    marginLeft: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  popularSeeTitle: {
    marginRight: 20,
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    color: colors.primaryColor,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1,
  },
  popularItemWrapper: {
    marginLeft: 20,
    height: 270,
    width: 220,
    backgroundColor: colors.white,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: 30,
    // adicionar sombra no "Card"
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addPizzaButton: {
    paddingHorizontal: 24,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 30,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
  menuIcones: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: colors.white, height: 100, shadowColor: colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 40, elevation: 2, paddingBottom: 35, position: 'absolute', bottom: 0, width: '100%',
  },
  menuSearch: {
    shadowColor: '#242222', elevation: 8, borderRadius: 50, paddingHorizontal: 2, marginBottom: 30,
  },
  profileImage1: {
    resizeMode: 'contain',
  },
  headerLeft1: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 15,
    borderRadius: 30,
    marginBottom: 5,
  },
});
