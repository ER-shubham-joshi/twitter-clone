import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOyVolr3WDKTSVPE6RWRXgJCdRTxX1rnY",
  authDomain: "twitter-clone-3ea02.firebaseapp.com",
  projectId: "twitter-clone-3ea02",
  storageBucket: "twitter-clone-3ea02.appspot.com",
  messagingSenderId: "153858713572",
  appId: "1:153858713572:web:d8ad4744122ee4e455c9f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
