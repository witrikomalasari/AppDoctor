import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../Constant';
import {CustomButton, Gap} from '../../Simple';
import DarkHeaderProfile from '../DarkHeaderProfile';

export default function Header({title, onPress, type}) {
  if (type === 'darkHeaderProfile') {
    return <DarkHeaderProfile onPress={onPress} />;
  }

  return (
    <View style={styles.container(type)}>
      <CustomButton
        type="icon-only"
        icon={type === 'darkHeader' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'darkHeader' ? colors.secondary : colors.white,
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'darkHeader' ? 20 : 0,
    borderBottomRightRadius: type === 'darkHeader' ? 20 : 0,
  }),
  text: type => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'darkHeader' ? colors.text.white : colors.text.primary,
  }),
});
