import colors from '../assets/colors/colors';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function InputText(props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={colors.inputTextColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: colors.inputTextColor,
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  textInput: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: 14,
    color: colors.inputTextColor,
  },
});
