import firebase from "firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBXowc23RYZsTzhxc55zlY1Ro97wvep44I",
    authDomain: "nitt-19bd2.firebaseapp.com",
    projectId: "nitt-19bd2",
    storageBucket: "nitt-19bd2.appspot.com",
    messagingSenderId: "734065910112",
    appId: "1:734065910112:web:bbfec003f76bbed894be05"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const database = firebase.firestore()
export default database