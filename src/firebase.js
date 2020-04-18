import firebase from "firebase";

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDwTME7BacgmrUZLdMZsRuNZcnaamvkVMY",
    authDomain: "m3fresh-1a6c8.firebaseapp.com",
    databaseURL: "https://m3fresh-1a6c8.firebaseio.com",
    projectId: "m3fresh-1a6c8",
    storageBucket: "m3fresh-1a6c8.appspot.com",
    messagingSenderId: "628582672709",
    appId: "1:628582672709:web:e30f2011181c84482c762c",
  };
  return firebase.initializeApp(firebaseConfig);
};
