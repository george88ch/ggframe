import * as firebase from "firebase/app"

import "firebase/auth"
import 'firebase/firestore'

// git ignored

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
const firebaseConfig = {
    
};


let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebaseApp.firestore()

const { TimeStamp, GeoPoint } = firebase.firestore

export { firebaseAuth, db, TimeStamp }

