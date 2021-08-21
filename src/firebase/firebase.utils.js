import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBVAXOEFxqaQwccFEdFIeM3piPsKdBwCPA",
    authDomain: "alpha-32829.firebaseapp.com",
    projectId: "alpha-32829",
    storageBucket: "alpha-32829.appspot.com",
    messagingSenderId: "166926860131",
    appId: "1:166926860131:web:eae7214ca22bd789341d56"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
