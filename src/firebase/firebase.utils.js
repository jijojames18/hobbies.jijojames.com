import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLo3XYBq3RTcHqy-NLYSy52MTSE6edRU4",
  authDomain: "portfolio-website-a589a.firebaseapp.com",
  databaseURL: "https://portfolio-website-a589a.firebaseio.com",
  projectId: "portfolio-website-a589a",
  storageBucket: "portfolio-website-a589a.appspot.com",
  messagingSenderId: "590480877562",
  appId: "1:590480877562:web:be49758f331e0f2170a643",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
