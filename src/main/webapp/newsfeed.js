/**
 * Firebase Database Management
 */
import { getDatabase, ref, child, get, push, update } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';
import { firebaseApp, firebaseDatabase } from './databaseInit.js'

const app = firebaseApp;
const database = firebaseDatabase;

// write new post to the database
export function writeNewPost(postID, studyTopic, studySubject, actionItems) {
    // A post entry.
    const postData = {
      topic: studyTopic,
        subject: studySubject,
        items: actionItems
    };
  
    // Get a key for a new post.
    const newPostKey = postID;
  
    // Write the new post's data
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
  
    return update(ref(database), updates);
}

// retrieve a list of posts
export function getPosts() {
    const dbRef = ref(database);
    get(child(dbRef, `posts/`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
}

window.writeNewPost = writeNewPost
window.getPosts = getPosts

