import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataAsyncstorage = async (key, value) => {
  // data awal ( yg mo di set ke asyncstorage )
  //   {
  //     users: {
  //       fullname: 'witri';
  //       pekerjaan: 'developer';
  //     }
  //   }
  try {
    // asyncstorage harus berupa string, tidak boleh objek
    // maka ubah data users yg brupa objek menjadi string dng stringfy
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // console.log('gagal simpan data', e);
  }
};

export const getDataAsyncstorage = async key => {
  // {
  //     users: {},
  //     token: '',
  //     dokter: []
  // }
  try {
    // untuk get data dari async ambil key nya
    // agar dpt dimunculkan datanya, maka data value jadikan ke objek,
    // karena sebelumnya sudah diubah jadi string
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    // console.log('gagal get data asyncstorage', e);
  }
};
