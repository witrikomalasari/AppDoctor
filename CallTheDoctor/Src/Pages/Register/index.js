import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomButton, CustomInput, Gap, Header} from '../../Components';
import {Fire} from '../../Config';
import {colors, setDataAsyncstorage, showError, useForm} from '../../Constant';

export default function Register({navigation}) {
  // HOOKS USEFORM
  const [form, setForm] = useForm({
    fullname: '',
    pekerjaan: '',
    email: '',
    password: '',
  });

  // USESTATE
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onContinueButton = () => {
    // console.log(form);
    // setLoading(true);
    dispatch({type: 'SET_LOADING', value: true}); // redux MENJALANKAN LOADING (mengganti value jadi TRUE)
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN LOADING (mengganti value jadi FALSE)
        setForm('reset');
        // //https://firebase.com/users/no.uid dari console.log(sucess) -- penamaan path dBase
        const data = {
          fullname: form.fullname,
          pekerjaan: form.pekerjaan,
          email: form.email,
          uid: success.user.uid,
        };
        // save n Setting to FireBase
        Fire.database()
          .ref('users/' + success.user.uid + '/') // path
          .set(data);
        // save to AsyncStorage
        setDataAsyncstorage('user', data);
        navigation.replace('UploadPhoto', data);
        // console.log('sukses', JSON.stringify(success, null, 2));
      })
      .catch(error => {
        const errorMessage = error.message;
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false});
        showError(errorMessage);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomInput
            label="Full Name"
            value={form.fullname}
            onChangeText={text => setForm('fullname', text)}
          />
          <Gap height={24} />
          <CustomInput
            label="Pekerjaan"
            value={form.pekerjaan}
            onChangeText={text => setForm('pekerjaan', text)}
          />
          <Gap height={24} />
          <CustomInput
            label="Email Address"
            value={form.email}
            onChangeText={text => setForm('email', text)}
          />
          <Gap height={24} />
          <CustomInput
            label="Password"
            value={form.password}
            onChangeText={text => setForm('password', text)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <CustomButton
            type="primary"
            title="Continue"
            onPress={onContinueButton} // kirim data2 ke screen uploadPhoto
          />
        </ScrollView>
      </View>
    </View>
    // {loading && <LoadingSpinner />}
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
