import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDNa0sMpONfGLx4oIu6TR3Gwl4u_6bc-A",
  authDomain: "react-portfolio-dashboar-728fc.firebaseapp.com",
  projectId: "react-portfolio-dashboar-728fc",
  storageBucket: "react-portfolio-dashboar-728fc.appspot.com",
  messagingSenderId: "192673059339",
  appId: "1:192673059339:web:7f5358faf83cf2ee82ed0e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
