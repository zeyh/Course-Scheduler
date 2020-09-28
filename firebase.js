import * as firebase from 'firebase';

// import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9JovHk4VKGQv35wVkIqm3XtYtWkVDya4",
    authDomain: "course-scheduler-35cf5.firebaseapp.com",
    databaseURL: "https://course-scheduler-35cf5.firebaseio.com",
    projectId: "course-scheduler-35cf5",
    storageBucket: "course-scheduler-35cf5.appspot.com",
    messagingSenderId: "557430174808",
    appId: "1:557430174808:web:20dfaaf71d245c25b4062d",
    measurementId: "G-3JFW807CHN"
};

firebase.initializeApp(firebaseConfig);

export { firebase };