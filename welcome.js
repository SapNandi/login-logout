import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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
  if (!user) {
    location.replace("iindex.html");
  } else {
    document.getElementById("user").innerHTML = `${user.email}`;
  }
});

document.getElementById("logout").addEventListener("click", function () {
  signOut(auth)
    .catch((error) => {
      console.log(error);
    });
});
