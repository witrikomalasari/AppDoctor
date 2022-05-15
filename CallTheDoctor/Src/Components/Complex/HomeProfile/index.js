import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../Assets';
import {colors, fonts, getDataAsyncstorage} from '../../../Constant';

export default function HomeProfile({onPress}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullname: '',
    pekerjaan: '',
  });

  useEffect(() => {
    getDataAsyncstorage('user').then(res => {
      // console.log(
      //   'ini isi asyncStorage UPLOAD PHOTO',
      //   JSON.stringify(res, null, 2),
      // );
      const data = res;
      data.photo = res?.photo?.length > 0 ? {uri: res.photo} : profile.photo; // merubah format data photo dari string ke objek
      // console.log('isi dari RES', JSON.stringify(data, null, 2));
      setProfile(data);
    });
  }, []);

  // console.log('ini profile dari homeProfile', JSON.stringify(profile, null, 2));
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.profesi}>{profile.pekerjaan}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profesi: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
