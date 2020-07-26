import firebase from "firebase";

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
    } else {
      firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }
  });
  // firebase.analytics();
};
