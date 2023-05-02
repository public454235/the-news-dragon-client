// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsDtTK3JLejSQqq5AqxKBbg4NiBgyhYZg",
  authDomain: "the-news-dragon-f622b.firebaseapp.com",
  projectId: "the-news-dragon-f622b",
  storageBucket: "the-news-dragon-f622b.appspot.com",
  messagingSenderId: "594646304626",
  appId: "1:594646304626:web:3f4edce7be5bbf55deffeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app