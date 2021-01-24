import firebase from "firebase";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPcqOzpPh2h_woDmw52Hbr0QGxODs4BlQ",
  authDomain: "qwerhacks2021-project.firebaseapp.com",
  projectId: "qwerhacks2021-project",
  storageBucket: "qwerhacks2021-project.appspot.com",
  messagingSenderId: "333611052365",
  appId: "1:333611052365:web:5b586a6bad3e02b99adb04",
  measurementId: "G-LV5RT899J1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
