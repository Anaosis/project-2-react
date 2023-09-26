import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import firebaseConfig from '../../configs/firebase.js';
import { FacebookAuthProvider } from "firebase/auth";


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
provider2.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export const signOut = () =>  firebase.auth().signOut();

export default firebase;
