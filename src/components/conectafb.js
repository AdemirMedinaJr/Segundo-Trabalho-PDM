import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7bqfPl_JsvWFnmisSyFFkSO0XqTZFv3c",
    authDomain: "collection-hotels.firebaseapp.com",
    databaseURL: "https://collection-hotels.firebaseio.com",
    projectId: "collection-hotels",
    storageBucket: "collection-hotels.appspot.com",
    messagingSenderId: "847009373706",
    appId: "1:847009373706:web:8633bbaef8e35381c8c9f3"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();