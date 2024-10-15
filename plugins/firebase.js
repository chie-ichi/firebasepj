import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBEfREyHCVdN_nByqcVYR0Ux0Jik3jlUto",
    authDomain: "fir-pj-15e72.firebaseapp.com",
    projectId: "fir-pj-15e72",
    storageBucket: "fir-pj-15e72.appspot.com",
    messagingSenderId: "2551314159",
    appId: "1:2551314159:web:6849eb7084577ddd824d1a",
    measurementId: "G-DR6YTVM3YG"
  });
}

export default firebase;