import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA68Qz5LpEQGmgdzAnwi000f27_Z89BuKw",
  authDomain: "prescipto.firebaseapp.com",
  projectId: "prescipto",
  storageBucket: "prescipto.firebasestorage.app",
  messagingSenderId: "729604235018",
  appId: "1:729604235018:web:0a60d4465a4f12bc9d24f3",
  measurementId: "G-SJ3P4GZN1L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const github = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      axios.post("http://localhost:9000/api/signup", {
        username: "kolade",
        email: "kolade@gmil22.com",
        profilePics: "image",
        password: "kolade",
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const signInWithGithub = () => {
  signInWithPopup(auth, github)
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
};
