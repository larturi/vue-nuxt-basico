import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDi_IaCr51vkaU13YKv9R53tmtegOLsdEw",
    authDomain: "crud-nuxt-vue-f5222.firebaseapp.com",
    databaseURL: "https://crud-nuxt-vue-f5222.firebaseio.com",
    projectId: "crud-nuxt-vue-f5222",
    storageBucket: "crud-nuxt-vue-f5222.appspot.com",
    messagingSenderId: "118499831055",
    appId: "1:118499831055:web:b66623f9d57bb14c76227a"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
