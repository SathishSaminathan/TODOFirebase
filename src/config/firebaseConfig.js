import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlk7R3Z40Z2ydu2KsyAweP7SY8kP3QHFI",
  authDomain: "todostore-4c596.firebaseapp.com",
  databaseURL: "https://todostore-4c596.firebaseio.com",
  projectId: "todostore-4c596",
  storageBucket: "todostore-4c596.appspot.com",
  messagingSenderId: "910013084499"
};
firebase.initializeApp(config);

export default firebase;
