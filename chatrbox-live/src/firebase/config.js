import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "**********",
    authDomain: "**********",
    projectId: "**********",
    storageBucket: "**********",
    messagingSenderId: "**********",
    appId: "**********"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// initialize firebase connection method, get timestamp, and set up authentication
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };