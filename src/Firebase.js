import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyArUXUyJIEK5Ue7_HmUYv0hv_x674OPNQk",
    authDomain: "madolche-a4b65.firebaseapp.com",
    databaseURL: "https://madolche-a4b65.firebaseio.com",
    projectId: "madolche-a4b65",
    storageBucket: "madolche-a4b65.appspot.com",
    messagingSenderId: "1044884523483",
    appId: "1:1044884523483:web:c7888b1f46780babfbbffe"
}
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()