import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {ILNullPhoto} from '../../Assets';
import {Header, Profile} from '../../Components/Complex';
import {CustomButton, CustomInput, Gap} from '../../Components/Simple';
import Fire from '../../Config/Fire';
import {
  colors,
  getDataAsyncstorage,
  setDataAsyncstorage,
  showError,
  showSuccess,
} from '../../Constant';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullname: '',
    pekerjaan: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDBFirebase, setphotoForDBFirebase] = useState('');

  useEffect(() => {
    // RENDER TIAP PERUBAHAN
    getDataAsyncstorage('user').then(res => {
      // console.log('updateProfile', JSON.stringify(res, null, 2));
      const data = res;
      // console.log('value dari res', JSON.stringify(data, null, 2));
      setPhoto({uri: res.photo});
      // data.photo = {uri: data.photo}; // data.photo valuenya dijadikan object  data?.photo?.length > 1 ?
      // setPhoto(data.photo);
      setProfile(data);
      // console.log('ini log CONST DATA2', JSON.stringify(data, null, 2));
    });
  }, []);

  // console.log('iniUPDATE proff', JSON.stringify(photo, null, 2));

  const handleSaveProfile = () => {
    // console.log('ini profile', JSON.stringify(profile, null, 2));
    // console.log('test perubahan password', password);
    // setLoading(true);
    dispatch({type: 'SET_LOADING', value: true}); // redux MENJALANKAN LOADING (MENGUBAH VALUE MENJADI TRUE)
    if (password.length > 0) {
      if (password.length < 6) {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN LOADING(MENGUBAH VALUE JADI FALSE)
        showError('Password kurang dari 6 Huruf');
      } else {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN LOADING(VALUE JADI FALSE)
        showSuccess('DATA BERHASIL DI UPDATE');
        updateNewPassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      showSuccess('DATA BERHASIL DI UPDATE');
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  // PHOTO
  const getUpdateImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, // kompres photo
      response => {
        // console.log('response:', JSON.stringify(response, null, 2));
        if (response.didCancel || response.errorMessage) {
          showError('Oops, Anda belum memilih foto');
        } else {
          const sourcePhoto = {uri: response?.assets[0]?.uri};
          // console.log(
          //   'ini photo buat database',
          //   JSON.stringify(sourcePhoto, null, 2),
          // );
          setphotoForDBFirebase(
            `data: ${response.assets[0].type};base64,${response.assets[0].base64}`,
          );
          setPhoto(sourcePhoto);
          showSuccess('FOTO PROFILE BERHASIL DI UPDATE');
        }
      },
    );
  };

  const updateNewPassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        // lihat dulu apakah ada USER ata TIdak ( cek ke AKUN FIREBASE)
        // console.log('isi dari USER', user);
        user.updatePassword(password).catch(err => {
          showError(err.message);
        });
      }
    });
  };

  // console.log('PHOTOFIRE DATBASE', JSON.stringify(photoForDBFirebase, null, 2));

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDBFirebase;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN LOADING(VALUE MENJADI FALSE)
        // console.log('success:', data);
        showSuccess('PROFILE BERHASIL DI UPDATE');
        setDataAsyncstorage('user', data);
        // console.log(
        //   'ISI ASYNCSTORAGE DI UPDATE PROFILE',
        //   JSON.stringify(data, null, 2),
        // );
      })
      .catch(err => {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN LOADING ( VALUE MENJADI FALSE)
        showError(err.message);
      });
  };

  // console.log('PROFILE ISI', JSON.stringify(profile, null, 2));
  // console.log('PHTODB', JSON.stringify(photoForDBFirebase, null, 2));

  const changeText = (key, value) => {
    // console.log('ini KEY UPDATE PROFILE', key);
    // console.log('ini VALUE UPDATE PROFILE', value);
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile typeIcon="remove" photo={photo} onPress={getUpdateImage} />
          <Gap height={26} />
          <CustomInput
            label="Full Name"
            value={profile.fullname}
            onChangeText={text => changeText('fullname', text)}
          />
          <Gap height={24} />
          <CustomInput
            label="Pekerjaan"
            value={profile.pekerjaan}
            onChangeText={text => changeText('pekerjaan', text)}
          />
          <Gap height={24} />
          <CustomInput label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <CustomInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <CustomButton
            type="primary"
            title="Save Profile"
            onPress={handleSaveProfile}
          />
        </View>
      </ScrollView>
    </View>
    // {loading && <LoadingSpinner />}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
