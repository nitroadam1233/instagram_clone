import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBl_kNHH8oIn17VrR2mcKQqOn3eAZo-Osw",
    authDomain: "instagram-clone-react-82ab7.firebaseapp.com",
    projectId: "instagram-clone-react-82ab7",
    storageBucket: "instagram-clone-react-82ab7.appspot.com",
    messagingSenderId: "562669348604",
    appId: "1:562669348604:web:ae6a7cee3832803e761979",
    measurementId: "G-6PENZ2M8LS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export { db, auth, storage };

export default db;