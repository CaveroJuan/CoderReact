// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4uURiCl3gZvf1xnxllxpver0wrWTypbE",
  authDomain: "ecommerce-bulonera.firebaseapp.com",
  projectId: "ecommerce-bulonera",
  storageBucket: "ecommerce-bulonera.appspot.com",
  messagingSenderId: "1070509372055",
  appId: "1:1070509372055:web:39933a8331d0d37a56afd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const getFirestoreApp = () => {
  return app;
};

export default getFirestoreApp;
