import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCRN5l6GPmGP0wb29jRy1lip-y1lFr1yfM",
  authDomain: "slack-clone-3c577.firebaseapp.com",
  projectId: "slack-clone-3c577",
  storageBucket: "slack-clone-3c577.appspot.com",
  messagingSenderId: "910969077396",
  appId: "1:910969077396:web:dd2d1d70b9ea687514be81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }