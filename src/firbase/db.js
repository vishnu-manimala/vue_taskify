import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyC6s2DquoTfi5MLhVg5Z3gm8kyb0y8wtSQ",
    authDomain: "taskify-da9c6.firebaseapp.com",
    projectId: "taskify-da9c6",
    storageBucket: "taskify-da9c6.appspot.com",
    messagingSenderId: "61557021491",
    appId: "1:61557021491:web:ab5037450fbc0a057cfc46"
  };
  
  firebase.initializeApp(firebaseConfig)

export const database = firebase.database(); 