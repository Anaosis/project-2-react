import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import firebaseConfig from '../../configs/firebase.js';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () =>  firebase.auth().signOut();

export default firebase;
