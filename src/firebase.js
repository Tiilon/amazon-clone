import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAS9NcD5Ka6AaWUGqurJnqxB9LRLJIejWs",

  authDomain: "clone-b016d.firebaseapp.com",

  projectId: "clone-b016d",

  storageBucket: "clone-b016d.appspot.com",

  messagingSenderId: "626759348768",

  appId: "1:626759348768:web:2fd0749265994f15950245",

  measurementId: "G-R6J8DTD463"

};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };