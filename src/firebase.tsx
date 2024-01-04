import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";  
import 'firebase/auth'  
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCebwz37xnCO44ozuGupbiq04L_30SwYbI",
  authDomain: "homevaluespot.firebaseapp.com",
  projectId: "homevaluespot",
  storageBucket: "homevaluespot.appspot.com",
  messagingSenderId: "241269653481",
  appId: "1:241269653481:web:ffb935c8c4dfeab3729578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };