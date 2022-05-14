import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../Assets';
import {CustomButton, Gap, Header, LinkCustoms} from '../../Components';
import {Fire} from '../../Config';
import {
  colors,
  fonts,
  setDataAsyncstorage,
  showError,
  showSuccess,
} from '../../Constant';

export default function UploadPhoto({navigation, route}) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDBFirebase, setphotoForDBFirebase] = useState('');

  const {fullname, pekerjaan, uid} = route.params; // dikirim dari register

  // console.log('ini route dari register', JSON.stringify(route.params, null, 2));

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, // kompres photo
      response => {
        // console.log('responseeeeeeee:', JSON.stringify(response, null, 2));
        if (response.didCancel || response.errorMessage) {
          showError('Oops, Anda belum memilih foto');
        } else {
          const sourcePhoto = {uri: response?.assets[0]?.uri};
          setphotoForDBFirebase(
            `data: ${response.assets[0].type};base64,${response.assets[0].base64}`,
          );
          setPhoto(sourcePhoto);
          setHasPhoto(true);
          showSuccess('FOTO PROFILE BERHASIL DIUPLOAD');
        }
      },
    );
  };

  const uploadAndContinue = () => {
    // save phot ke database firebase
    Fire.database()
      .ref('users/' + uid + '/') // path di fireB
      .update({photo: photoForDBFirebase}); // menambahkan key & isinya baru ke database fireB
    // save photo ke local storage
    const data = route.params;
    data.photo = photoForDBFirebase; // masukan dulu photo ke param
    setDataAsyncstorage('user', data);
    // console.log('ini isi ASYNCSTORAGE', JSON.stringify(data, null, 2));
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Header title="UploadPhoto" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.photoWrapper} onPress={getImage}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullname}</Text>
          <Text style={styles.profesi}>{pekerjaan}</Text>
        </View>
        <View>
          <CustomButton
            disable={!hasPhoto}
            title="Upload and Continue"
            type="primary"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <LinkCustoms
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  photoWrapper: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 110,
    height: 110,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profesi: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
