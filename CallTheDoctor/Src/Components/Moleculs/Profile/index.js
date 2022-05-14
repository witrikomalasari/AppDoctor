import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DummyUser,
  IconFemale,
  IconMale,
  IconRemovePhoto,
} from '../../../Assets';
import {colors, fonts} from '../../../Constant';

export default function Profile({photo, name, desc, typeIcon, onPress}) {
  const TypeIcon = () => {
    if (typeIcon === 'remove') {
      return <IconRemovePhoto style={styles.icon} />;
    }
    if (typeIcon === 'female') {
      return <IconFemale style={styles.icon} />;
    }
    if (typeIcon === 'male') {
      return <IconMale style={styles.icon} />;
    }
  };

  return (
    <View style={styles.container}>
      {typeIcon !== 'remove' && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.photoUser} />
        </View>
      )}
      {typeIcon === 'remove' && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.photoUser} />
          {typeIcon && <TypeIcon />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profesi}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoUser: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profesi: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});
