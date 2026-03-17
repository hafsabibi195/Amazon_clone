import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC51x-EuxJsJhxOt1siERuQmzoViNTOAHo",
  authDomain: "clone-7dc31.firebaseapp.com",
  projectId: "clone-7dc31",
  storageBucket: "clone-7dc31.appspot.com",
  messagingSenderId: "685432498435",
  appId: "1:685432498435:web:14345fcb5d8457a927e136",
  measurementId: "G-0YR6TC9LNT",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
