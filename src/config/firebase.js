import firebase from 'firebase/app'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyAG2Z1PnPEPNbYfyfLlEdJtwLKaXGK2_CA",
    authDomain: "todo-application-16c6e.firebaseapp.com",
    databaseURL: "https://todo-application-16c6e.firebaseio.com",
    projectId: "todo-application-16c6e",
    storageBucket: "todo-application-16c6e.appspot.com",
    messagingSenderId: "470022644980",
    appId: "1:470022644980:web:5c4bd0d92e69c33d112aa1",
    measurementId: "G-RSKKNFK5ND"
};

export default firebase.initializeApp(firebaseConfig);
