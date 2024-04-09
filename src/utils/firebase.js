import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMuMSiyfu0CK8bxzX9-hjZNki9WJcWkJI",
    authDomain: "start-0.firebaseapp.com",
    databaseURL: "https://start-0.firebaseio.com",
    projectId: "start-0",
    storageBucket: "start-0.appspot.com",
    messagingSenderId: "626789575277",
    appId: "1:626789575277:web:16f353fda96889eda02d64",
    measurementId: "G-HYX82QQSJN"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);