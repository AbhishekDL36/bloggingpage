
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwOgTWo7yQNt0TMrqSpIk959sVHmso680",
  authDomain: "blogging-web-site-bcf0b.firebaseapp.com",
  projectId: "blogging-web-site-bcf0b",
  storageBucket: "blogging-web-site-bcf0b.firebasestorage.app",
  messagingSenderId: "546694381247",
  appId: "1:546694381247:web:9c2cfc72749133cede900a",
  measurementId: "G-PKFL2WXFBT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
