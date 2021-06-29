import firebase from "firebase";

import 'firebase/firestore'

  // Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyDpUXu3zSQb0AgUVrI62lCSnewpELs3bOM",
   authDomain: "digitalizador-crud.firebaseapp.com",
   projectId: "digitalizador-crud",
   storageBucket: "digitalizador-crud.appspot.com",
   messagingSenderId: "959462245987",
   appId: "1:959462245987:web:416c002ab1a5bc785a9a56"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
}
