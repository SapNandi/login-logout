// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwmMgDG35MZZunVGnrivGMFzbNgE-d6g",
  authDomain: "first-project-47fa7.firebaseapp.com",
  projectId: "first-project-47fa7",
  storageBucket: "first-project-47fa7.appspot.com",
  messagingSenderId: "656360401872",
  appId: "1:656360401872:web:fcb48113a9e40cebb0e7d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace("welcome.html");
  }
});

document.getElementById("signin").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Created");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      // ...
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorMessage);
      document.getElementById("error").innerHTML = error.message;
      // ..
    });
});

document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success");
      // ...
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      document.getElementById("error").innerHTML = error.message;
      // ..
    });
});

document.getElementById("reset").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      document.getElementById("error").innerHTML = "Password resrt email send";
    })
    .catch((error) => {
    //   const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("error").innerHTML = errorMessage;
      // ..
    });
});
