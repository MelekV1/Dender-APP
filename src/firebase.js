import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBPvPz06wPJNzy_SXw4tvILXIBmNTrJ5HM",
  authDomain: "swipe-and-find.firebaseapp.com",
  databaseURL: "https://swipe-and-find.firebaseio.com",
  projectId: "swipe-and-find",
  storageBucket: "swipe-and-find.appspot.com",
  messagingSenderId: "319546458764",
  appId: "1:319546458764:web:6f188a04d6144073d8f1a9",
  measurementId: "G-TNK8EZ3YY3",
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
