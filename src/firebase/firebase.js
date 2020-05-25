import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuWRvGsf8nmOW-tDF3kJzeWUCUgmgnShc",
    authDomain: "donnatellooart.firebaseapp.com",
    databaseURL: "https://donnatellooart.firebaseio.com",
    projectId: "donnatellooart",
    storageBucket: "donnatellooart.appspot.com",
    messagingSenderId: "490233662629",
    appId: "1:490233662629:web:6e8a334bfa415473ac514c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;