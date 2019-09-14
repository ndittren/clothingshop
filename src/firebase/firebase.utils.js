import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC5JlJSzicdKzx86s-zIDbvnmPDVVDTU8o",
  authDomain: "clothingshop-ee36b.firebaseapp.com",
  databaseURL: "https://clothingshop-ee36b.firebaseio.com",
  projectId: "clothingshop-ee36b",
  storageBucket: "",
  messagingSenderId: "527619484970",
  appId: "1:527619484970:web:81f8417852561baee34253"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
