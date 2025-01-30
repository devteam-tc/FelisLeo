// firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDocs, getDoc, query, orderBy, limit, startAfter, where } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBPTYxLhit2YjnOIvzbsIRihqz-ASxmW6Y",
    authDomain: "felisleo-f6d7a.firebaseapp.com",
    projectId: "felisleo-f6d7a",
    storageBucket: "felisleo-f6d7a.firebasestorage.app",
    messagingSenderId: "800505128277",
    appId: "1:800505128277:web:61a8ffbf84c97fba87fbdc",
    measurementId: "G-ZCZL91V9E7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, collection, doc, getDocs, getDoc, query, orderBy, limit, startAfter, where };
