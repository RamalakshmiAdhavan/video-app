import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXyu0-PcaUMCCAEq2CwDDxVfoQNwYpHaw",
  authDomain: "video-45825.firebaseapp.com",
  projectId: "video-45825",
  storageBucket: "video-45825.appspot.com",
  messagingSenderId: "758306924985",
  appId: "1:758306924985:web:2988b3ff0e660113312e68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
