import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtkyeTlmosxLNqFAenkTvrJRcj-eVK6Yc",
    authDomain: "chessers-71378.firebaseapp.com",
    projectId: "chessers-71378",
    storageBucket: "chessers-71378.appspot.com",
    messagingSenderId: "440478512794",
    appId: "1:440478512794:web:edb18363a3e0f936dd1123",
    measurementId: "G-S249HB8W2P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore;
const auth = firebase.auth();

export {db, auth};