import firebase from "firebase";
import "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBiso-ApE1gRaCsExH-5wsfx98NFsGZNJs",
  authDomain: "tripzip-af480.firebaseapp.com",
  databaseURL: "https://tripzip-af480.firebaseio.com",
  projectId: "tripzip-af480",
  storageBucket: "tripzip-af480.appspot.com",
  messagingSenderId: "1081346993045",
  appId: "1:1081346993045:web:a9fc2d9d090f05aa4ea49c",
  measurementId: "G-ZB3CHRCK5S"
};
let fire = firebase.initializeApp(firebaseConfig);
export default fire;
