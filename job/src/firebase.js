
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEuKqQDBNilVaBTUYjrDCFldHAAQGsJtE",
  authDomain: "job-portal-ff111.firebaseapp.com",
  projectId: "job-portal-ff111",
  storageBucket: "job-portal-ff111.firebasestorage.app",
  messagingSenderId: "106077842343",
  appId: "1:106077842343:web:5737b656ef7eb7d425a482",
  measurementId: "G-V68M5187SQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

