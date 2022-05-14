import firebase from 'firebase';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDho71LCQ0m7JYJ0HEVxhhgiNbVlohCluA',
    authDomain: 'my-doctor-e7ff7.firebaseapp.com',
    databaseURL: 'https://my-doctor-e7ff7-default-rtdb.firebaseio.com',
    projectId: 'my-doctor-e7ff7',
    storageBucket: 'my-doctor-e7ff7.appspot.com',
    messagingSenderId: '775244011511',
    appId: '1:775244011511:web:7a26cac3f9be2e372c40f2',
  });
}
const Fire = firebase;

export default Fire;
