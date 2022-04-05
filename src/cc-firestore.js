import "firebase/compat/analytics";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { toast } from "react-toastify";

export const FIREBASE_API_CONFIG = {
  apiKey: "AIzaSyDO7CW9lZ0fyWpLDFQTokM51OYgtboPFJo",
  authDomain: "crystal-clash-manager.firebaseapp.com",
  projectId: "crystal-clash-manager",
  storageBucket: "crystal-clash-manager.appspot.com",
  messagingSenderId: "868006969728",
  appId: "1:868006969728:web:faa5f46a07df61c309c165",
  measurementId: "G-JPKKSMH08N"
};
const firebaseApp = firebase.initializeApp(FIREBASE_API_CONFIG);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const dbErrorHandlerPromise = (error) => {
  console.error(error);
  const errorMessage = "Some error occured. You may need to be logged in to edit data.";
  toast(errorMessage);
  return Promise.reject();
};

export { db, auth, firebaseApp, dbErrorHandlerPromise };
