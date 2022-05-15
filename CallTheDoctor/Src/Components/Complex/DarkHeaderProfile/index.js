import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../../Simple';
import {DummyDoctor9} from '../../../Assets';
import {colors, fonts} from '../../../Constant';

export default function DarkHeaderProfile({onPress}) {
  return (
    <View style={styles.container}>
      <CustomButton type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor9} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
