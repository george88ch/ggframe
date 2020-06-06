import * as firebase from "firebase/app"

import "firebase/auth"
import 'firebase/firestore'

// git ignored

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
const firebaseConfig = {
    apiKey: "AIzaSyBAd9OyT4kSRKc0chJbRa0PAOyHPQzaqgg",
    authDomain: "ggeplay-eb58e.firebaseapp.com",
    databaseURL: "https://ggeplay-eb58e.firebaseio.com",
    projectId: "ggeplay-eb58e",
    storageBucket: "ggeplay-eb58e.appspot.com",
    messagingSenderId: "702789318517",
    appId: "1:702789318517:web:08b160686e58cbc951c53c",
    measurementId: "G-BLY15SB901"
};


let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebaseApp.firestore()

const { TimeStamp, GeoPoint } = firebase.firestore

export { firebaseAuth, db, TimeStamp }

