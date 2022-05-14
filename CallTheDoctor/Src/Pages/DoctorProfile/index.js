import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile} from '../../Components/Complex';
import ProfileItem from '../../Components/Complex/ProfileItem';
import {CustomButton, Gap} from '../../Components/Simple';
import {colors} from '../../Constant';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        typeIcon="female"
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" desc="Universitas Indonesia, 2020" />
      <Gap height={16} />
      <ProfileItem label="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
      <Gap height={16} />
      <ProfileItem label="No. STR" desc="0000116622081996" />
      <View style={styles.wrapperButton}>
        <CustomButton
          type="primary"
          title="Start Consultation"
          onPress={() => navigation.navigate('ChatRoom')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapperButton: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
