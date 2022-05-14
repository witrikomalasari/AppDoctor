import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../Assets';
import {List} from '../../Components';
import {fonts} from '../../Constant';
import {colors} from '../../Constant/Color';

export default function Message() {
  // ini DUMMY DATA W/ USESTATE
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      photoDoctor: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas waktu...',
    },
    {
      id: 2,
      photoDoctor: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      photoDoctor: DummyDoctor6,
      name: 'Jhony McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana untuk...',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              photoDoctor={doctor.photoDoctor}
              name={doctor.name}
              desc={doctor.desc}
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
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
