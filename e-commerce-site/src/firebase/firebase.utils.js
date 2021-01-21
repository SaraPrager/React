import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfoucWdF5IT4Dbyk3aqsc1sEKNrfM5SdE",
  authDomain: "crwn-db-61a31.firebaseapp.com",
  projectId: "crwn-db-61a31",
  storageBucket: "crwn-db-61a31.appspot.com",
  messagingSenderId: "225531282288",
  appId: "1:225531282288:web:043a8a76b81ba4f89a85b5",
};

export const createUserProfileDoc = async (user, additionalData) => {
  if (!user) {
    return;
  }

  const reference = firestore.doc(`users/${user.uid}`);
  const snapshot = await reference.get();
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      reference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error("Problem creating a user", err.message);
    }
  }

  return reference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const googleSignIn = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
