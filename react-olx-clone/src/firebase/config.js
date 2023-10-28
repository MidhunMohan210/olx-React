import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAc8uhX4CagrdInVdOq-eS295moJclP6gI",
    authDomain: "olx-clone-fdab8.firebaseapp.com",
    projectId: "olx-clone-fdab8",
    storageBucket: "olx-clone-fdab8.appspot.com",
    messagingSenderId: "197165420220",
    appId: "1:197165420220:web:dce5fb53408bd41f220ab9",
    measurementId: "G-3041W3RFE8"
  };

export const Firebase = firebase.initializeApp(firebaseConfig);