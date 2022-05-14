import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../Assets';
import {CustomButton, CustomInput, Gap, LinkCustoms} from '../../Components';
import {Fire} from '../../Config';
import {
  colors,
  fonts,
  setDataAsyncstorage,
  showError,
  showSuccess,
  useForm,
} from '../../Constant';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // console.log('ini isi inputan form login', form);

    dispatch({type: 'SET_LOADING', value: true}); // redux MENJALANKAN LOADING (VALUE UBAH JADI TRUE)
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(responseSignIn => {
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');

        // console.log(
        //   'ini ResponseSignIn FireBase',
        //   JSON.stringify(responseSignIn, null, 2),
        // );
        Fire.database()
          .ref(`users/${responseSignIn.user.uid}/`)
          .once('value')
          .then(resDB => {
            // console.log(
            //   'sukses Dbase FireBase',
            //   JSON.stringify(resDB.val(), null, 2),
            // );
            if (resDB.val()) {
              setDataAsyncstorage('user', resDB.val());
              showSuccess('Anda Berhasil Login');
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        // console.log('gagal SignIn', error.message);
        // setLoading(false);
        dispatch({type: 'SET_LOADING', value: false}); // redux MEMATIKAN loading mengganti value menjadi FALSE

        const errorMessage = error.message;
        showError(errorMessage);
      });
  };

  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <CustomInput
        label="Email Address"
        onChangeText={text => setForm('email', text)}
        value={form.email}
      />
      <Gap height={24} />
      <CustomInput
        label="Password"
        onChangeText={text => setForm('password', text)}
        value={form.password}
        secureTextEntry={true}
      />
      <Gap height={10} />
      <LinkCustoms title="Forgot My Password" size={12} />
      <Gap height={40} />
      <CustomButton type="primary" title="Sign In" onPress={handleLogin} />
      <Gap height={30} />
      <LinkCustoms
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
    //{loading && <LoadingSpinner />} */} // DIGANTI MENJADI GLOBALSTATE
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
