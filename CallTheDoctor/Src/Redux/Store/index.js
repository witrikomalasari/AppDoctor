// import {createStore} from 'redux';

import {configureStore} from '@reduxjs/toolkit';

// const [profile, setProfile] = useState('prawito');

const initialState = {
  // initialState adalah data awal seperti profile pada useState diatas
  loading: false,
  name: 'witri komalasari',
  pekerjaan: 'React Native Developer',
};

const reducer = (state = initialState, action) => {
  // action inilah yg digunakan tuk mengubah value2 yg ada
  // (action diposisikan sebagai PROPS berisi: props.type dan props.value)
  if (action.type === 'SET_LOADING') {
    // KARENA VALUES NYA DIAMBIL DARI INITIALSTATE DIATAS (TYPE DATA OBJECT) MAKA BENTUK RETURN GUNAKAN OBJECT
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = configureStore({reducer});

export default store;
