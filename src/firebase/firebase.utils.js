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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;