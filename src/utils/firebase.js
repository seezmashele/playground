import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: 'AIzaSyBESIe1_EPVKFCJtJ5MU5ExKMcH0Wg0POE',
//   authDomain: 'playground-africa.firebaseapp.com',
//   projectId: 'playground-africa',
//   storageBucket: 'playground-africa.appspot.com',
//   messagingSenderId: '1037874070527',
//   appId: '1:1037874070527:web:8ceb21333c0a165c7f9dca'
//   // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyANF0bUax_Gf4ZnkQVxqnrHxMtO8Yw8Wms",
  authDomain: "publik-events.firebaseapp.com",
  projectId: "publik-events",
  storageBucket: "publik-events.appspot.com",
  messagingSenderId: "520601860049",
  appId: "1:520601860049:web:117ea19ba0f0563335d2f0"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
