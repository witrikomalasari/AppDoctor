import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {CustomButton} from '../../Simple';
import {colors, fonts} from '../../../Constant';

export default function TxtInputChat() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
        placeholderTextColor="black"
      />
      <CustomButton type="buttonIconSend" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
  },
});
