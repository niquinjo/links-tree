
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC6pLsRD0TmnBpzRnf78W_nx621pf4dF1A",
  authDomain: "reactlinks-fc90f.firebaseapp.com",
  projectId: "reactlinks-fc90f",
  storageBucket: "reactlinks-fc90f.firebasestorage.app",
  messagingSenderId: "351063005107",
  appId: "1:351063005107:web:4daf6c461d2f233f4a5dc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };