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

export const createUserProfileDocument = async  (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error catching user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;