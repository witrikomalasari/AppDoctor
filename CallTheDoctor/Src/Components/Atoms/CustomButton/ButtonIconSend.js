import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../Assets';
import {colors} from '../../../Constant';

export default function ButtonIconSend({disable, onPress, type}) {
  // Cara panjang: function icon dibawah ini, dipanggil dng <Icon/>
  // const Icon = () => {
  //   if (disable) {
  //     return <IconSendDark />;
  //   }
  //   if (!disable) {
  //     return <IconSendLight />;
  //   }
  //   return <IconSendDark />;
  // };

  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      {/*<Icon />*/}
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    width: 45,
    height: 45,
    backgroundColor: disable ? colors.disable : colors.blue,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
