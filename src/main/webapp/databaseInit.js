import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import { getDatabase} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';
import { getAuth} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyB_tx6JuWZYA5X-o-oqSc7dV3rjxY6pjYE",
    authDomain: "dle-sps-summer22.firebaseapp.com",
    databaseURL: "https://dle-sps-summer22-default-rtdb.firebaseio.com",
    projectId: "dle-sps-summer22",
    storageBucket: "dle-sps-summer22.appspot.com",
    messagingSenderId: "750694877988",
    appId: "1:750694877988:web:15b8ca267d6636e3ef41b1",
    measurementId: "G-C7F1EMECPJ",
  };
  
// Initialize Firebase Database
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);