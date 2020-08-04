import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBT5afRH5JO7s66JXyAEGEMG1yiPlGtOto",
    authDomain: "crwn-db-40c20.firebaseapp.com",
    databaseURL: "https://crwn-db-40c20.firebaseio.com",
    projectId: "crwn-db-40c20",
    storageBucket: "crwn-db-40c20.appspot.com",
    messagingSenderId: "189276764757",
    appId: "1:189276764757:web:e4a9ad820eb82e05a4f2dc",
    measurementId: "G-0BFL7V712S"
};

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'})
 export const signInWithGoogle = () => auth.signInWithPopup(provider);
 export default firebase;