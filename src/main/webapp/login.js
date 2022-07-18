/**
 * Firebase Login Authentication
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

// DATABASES
// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2cPmNFujsnHdZTf0Gr3e4JPnAOfwyj7Q",
    authDomain: "summer22-sps-7.firebaseapp.com",
    projectId: "summer22-sps-7",
    storageBucket: "summer22-sps-7.appspot.com",
    messagingSenderId: "918223220381",
    appId: "1:918223220381:web:8ed5c46b3c85b5462d6e74",
    measurementId: "G-0KN80E72H3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function signin() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    signInWithEmailAndPassword(auth, username, password)
                .then((userCredential) => {
                // Signed in 
                console.log(username)
                console.log(password)
                const user = userCredential.user;
                const quoteContainer = document.getElementById('loginNoti');
                quoteContainer.innerText = user;
                // ...
                })
                .catch((error) => {
                console.log(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                const quoteContainer = document.getElementById('loginNoti');
                quoteContainer.innerText = errorMessage;
                });
}

// add the signin function to global scope
window.signin = signin