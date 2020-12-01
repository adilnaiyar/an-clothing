import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWY4TvQzGGa34lKmXZuE5kG00BrZ1eSs0",
    authDomain: "an-shop-db.firebaseapp.com",
    databaseURL: "https://an-shop-db.firebaseio.com",
    projectId: "an-shop-db",
    storageBucket: "an-shop-db.appspot.com",
    messagingSenderId: "77949578072",
    appId: "1:77949578072:web:d9b40c143eb883b2c6532d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
