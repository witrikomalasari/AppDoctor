import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../Assets';
import {fonts} from '../../../Constant';
import {colors} from '../../../Constant/Color';

export default function DoctorCategory({categoryDoctor, onPress}) {
  const Icon = () => {
    if (categoryDoctor === 'Dokter Umum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (categoryDoctor === 'Psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    }
    if (categoryDoctor === 'Dokter Obat') {
      return <ILCatObat style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{categoryDoctor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
