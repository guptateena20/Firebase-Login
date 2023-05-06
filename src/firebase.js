import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAEwEcrJ96_dFUXlbxgZnIWbW-PQIRu1ik",
  authDomain: "react-authentication-ea6bd.firebaseapp.com",
  projectId: "react-authentication-ea6bd",
  storageBucket: "react-authentication-ea6bd.appspot.com",
  messagingSenderId: "306895299827",
  appId: "1:306895299827:web:9fa96ec79c95320bf94386",
  measurementId: "G-9ETG4PT8YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default app;