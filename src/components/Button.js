/* eslint-disable react-native/no-inline-styles */
import colors from '../assets/colors/colors';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.buttonStyles, {flexDirection: 'row'}]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Image
        source={props.path}
        style={[styles.profileImage1, {marginRight: 11}]}
      />
      <Text style={[styles.titulo, props.tituloStyles]}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
    fontFamily: 'Sk-Modernist-Bold',
    fontSize: 14,
    color: colors.white,
  },
});
