import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBv2wyroS2-3DNfzwFSAV6WR5ks9wAjBuM',
  authDomain: 'clone-e1560.firebaseapp.com',
  projectId: 'clone-e1560',
  storageBucket: 'clone-e1560.appspot.com',
  messagingSenderId: '516961743335',
  appId: '1:516961743335:web:661ff4a1cfae54dde04d42',
  measurementId: 'G-KD63VDJFNY',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
