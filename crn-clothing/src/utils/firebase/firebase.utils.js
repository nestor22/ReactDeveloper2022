import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crn-clothing-bd.firebaseapp.com",
  projectId: "crn-clothing-bd",
  storageBucket: "crn-clothing-bd.appspot.com",
  messagingSenderId: "50373946704",
  appId: "1:50373946704:web:cdd6145d80d1a08b451055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promp: "select_account",
});

export const auth = getAuth();
export const signInWithGooblePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName, email, createAt
      })
    }catch(err){
      console.error('error creating the user',err)
    }
  }

  return userDocRef
}