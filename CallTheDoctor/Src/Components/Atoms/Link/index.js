import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../Constant';

export default function LinkCustoms({size, title, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
