import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor11} from '../../../Assets';
import {colors, fonts} from '../../../Constant';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor11} style={styles.image} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.textChat}>
            Oh tentu saja tidak karena jeruk itu sangat sehat...
          </Text>
        </View>
        <Text style={styles.timeChat}>4.45 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    maxWidth: '85%',
    backgroundColor: colors.primary,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  textChat: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.white,
  },
  timeChat: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
