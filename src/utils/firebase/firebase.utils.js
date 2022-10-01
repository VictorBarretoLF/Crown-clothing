// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxjIUrZRv7cCfjFpKcOG8Hd5d-K-IQc5Q",
  authDomain: "crwm-clothing-db-6eb51.firebaseapp.com",
  projectId: "crwm-clothing-db-6eb51",
  storageBucket: "crwm-clothing-db-6eb51.appspot.com",
  messagingSenderId: "453070476198",
  appId: "1:453070476198:web:ada0ea528000fcbc30f567",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
