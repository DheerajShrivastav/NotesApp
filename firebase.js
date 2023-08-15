// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCyz82IXt8_tB1S-2u6C634zc9a7O0GaAM',
  authDomain: 'notes-app-10d04.firebaseapp.com',
  projectId: 'notes-app-10d04',
  storageBucket: 'notes-app-10d04.appspot.com',
  messagingSenderId: '282405688643',
  appId: '1:282405688643:web:a1c845f0d56aff97fc8bf6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')
