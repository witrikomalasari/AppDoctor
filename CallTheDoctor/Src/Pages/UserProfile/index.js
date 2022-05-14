import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../Assets';
import {Header, List, Profile} from '../../Components/Complex';
import {Gap} from '../../Components/Simple';
import {Fire} from '../../Config';
import {colors, getDataAsyncstorage, showError} from '../../Constant';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullname: '',
    pekerjaan: '',
  });

  useEffect(() => {
    getDataAsyncstorage('user').then(res => {
      // console.log('asyncstorage UserProfile', JSON.stringify(res, null, 2)); // photo di asnycStorage msh string
      const data = res;
      data.photo = res?.photo?.length > 0 ? {uri: res.photo} : profile.photo; // res.photo sudah diubah dari string ke objek URI
      // console.log('PHOTO PADA DATA', JSON.stringify(data, null, 2));
      setProfile(data);
    });
  }, []);

  // console.log('USERPROFILE PHOTO', JSON.stringify(profile, null, 2));

  const handleSignOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        // console.log('SUKSES LOG OUT');
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          desc={profile.pekerjaan}
          name={profile.fullname}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        icon="editProfile"
        name="Edit Profile"
        desc="Last updated yesterday"
        type="nextIcon"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        icon="language"
        name="Language"
        desc="Available 12 languages"
        type="nextIcon"
      />
      <List
        icon="giveUsRate"
        name="Give Us Rate"
        desc="On Google Play Store"
        type="nextIcon"
      />
      <List
        icon="help"
        name="Sign Out"
        desc="Read our guidelines"
        type="nextIcon"
        onPress={handleSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
