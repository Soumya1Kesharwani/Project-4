import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: import.meta.env.VITE__FIREBASE_APIKEY,
    authDomain: "ai-interview-407e0.firebaseapp.com",
    projectId: "ai-interview-407e0",
    storageBucket: "ai-interview-407e0.firebasestorage.app",
    messagingSenderId: "839776515897",
    appId: "1:839776515897:web:81842788df8b9eded4dae8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider };