import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyC4ytHs6cNWf_POmyfh3h51Ke-mqev_PyI",
    authDomain: "eliran-clothing.firebaseapp.com",
    databaseURL: "https://eliran-clothing.firebaseio.com",
    projectId: "eliran-clothing",
    storageBucket: "eliran-clothing.appspot.com",
    messagingSenderId: "417852666018",
    appId: "1:417852666018:web:f73cc53baf7e25e67ea7fb",
    measurementId: "G-5X280HRR3J"
  };
  firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;