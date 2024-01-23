import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjaoas8K6aANMRO9N3jIY6QO1DjGh6Wb0",
  authDomain: "cvjd-a0cd2.firebaseapp.com",
  projectId: "cvjd-a0cd2",
  storageBucket: "cvjd-a0cd2.appspot.com",
  messagingSenderId: "584468049512",
  appId: "1:584468049512:web:8980dbcfe921ff471195dd",
  measurementId: "G-7JBVJRBJW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
