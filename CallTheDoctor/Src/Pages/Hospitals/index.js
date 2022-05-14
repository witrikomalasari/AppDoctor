import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../Assets';
import {ILHospitalBG} from '../../Assets/illustration';
import {ListHospital} from '../../Components';
import {colors, fonts, showError} from '../../Constant';
import {Fire} from '../../Config';

export default function Hospitals({navigation}) {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then(res => {
        console.log('data hospitals', JSON.stringify(res.val(), null, 2));
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch(err => showError(err.message));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map(hospital => {
          return (
            <ListHospital
              key={hospital.id}
              picRs={hospital.image}
              jenisRs={hospital.jenis}
              nameRs={hospital.nama}
              address={hospital.alamat}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
