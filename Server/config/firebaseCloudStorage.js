
const { initializeApp } = require("firebase/app");
const { getStorage,  } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDtxrgz7k4G7wThBKy6EQ-WCescAqOl01w",
  authDomain: "sdgp-y3-05-petbay.firebaseapp.com",
  projectId: "sdgp-y3-05-petbay",
  storageBucket: "sdgp-y3-05-petbay.appspot.com",
  messagingSenderId: "68269331856",
  appId: "1:68269331856:web:fa7bfd964f05087fc64f15",
  measurementId: "G-V4ZWEZNXRQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const storage = getStorage();

module.exports = {storage}
