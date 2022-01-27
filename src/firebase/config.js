import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDn5n6u0rY37KCeN_O8YVRbam-I8YyTpiA",
  authDomain: "thedojo-1d076.firebaseapp.com",
  projectId: "thedojo-1d076",
  storageBucket: "thedojo-1d076.appspot.com",
  messagingSenderId: "719018306561",
  appId: "1:719018306561:web:0f3e6c05d9c5bb5d222400"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }