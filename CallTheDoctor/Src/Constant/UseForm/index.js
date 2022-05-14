import {useState} from 'react';

// custom useState for register
export const useForm = initialState => {
  // console.log('ini initial', initialState);
  // cara lempar data ke useForm ini dengan useForm(isi invoke dng datanya)
  const [values, setValues] = useState(initialState);

  // KARENA VALUES NYA DIAMBIL DARI USESTATE DIATAS (TYPE DATA ARRAY) MAKA BENTUK RETURN GUNAKAN ARRAY
  return [
    values,
    (key, text) => {
      if (key === 'reset') {
        return setValues(initialState);
      }
      return setValues({...values, [key]: text});
    },
  ];
};
