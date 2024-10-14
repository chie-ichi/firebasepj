// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 認証を使う場合
import { getFirestore } from "firebase/firestore"; // Firestoreを使う場合

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// 認証やFirestoreのインスタンスをエクスポート
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
