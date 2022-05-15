import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../Constant';
import ButtonIconSend from './ButtonIconSend';
import IconOnly from './IconOnly';

export default function CustomButton({type, title, onPress, icon, disable}) {
  // console.log('ini icon', icon);

  if (type === 'buttonIconSend') {
    return <ButtonIconSend disable={disable} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disablebg}>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'primary'
        ? colors.button.primary.background
        : colors.button.secondary.background,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color:
      type === 'primary'
        ? colors.button.primary.text
        : colors.button.secondary.text,
  }),
  disablebg: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  disableText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.disable.text,
  },
});
