/**
 * Firebase Login Authentication
 */
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import { writeNewPost, getPosts } from './newsfeed.js'
import { firebaseApp, firebaseAuth } from './databaseInit.js'

// Initialize Firebase
const app = firebaseApp;
const auth = firebaseAuth;

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